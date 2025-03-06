let map = L.map('map').setView([51.0447, -114.0719], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markers = L.markerClusterGroup();
let oms = typeof OverlappingMarkerSpiderfier !== 'undefined' ? new OverlappingMarkerSpiderfier(map) : null;

flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
    defaultDate: ["2023-01-01", "2023-12-31"]
});

function searchPermits() {
    markers.clearLayers();
    let dateRange = document.getElementById("dateRange").value.split(" to ");
    let startDate = dateRange[0];
    let endDate = dateRange[1] || startDate;

    let query = `issueddate >= '${startDate}' AND issueddate <= '${endDate}'`;
    let apiUrl = `https://data.calgary.ca/resource/c2es-76ed.json?$where=${encodeURIComponent(query)}&$limit=5000`;
    console.log("API URL:", apiUrl); // Log the URL being sent

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json' // Ensure we request JSON
        }
    })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                });
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                console.error("Data is not an array:", data);
                return;
            }
            console.log("Fetched data:", data); // Log the response
            data.forEach(permit => {
                if (permit.latitude && permit.longitude) {
                    let marker = L.marker([permit.latitude, permit.longitude]);
                    let popupContent = `
                        <b>Issued Date:</b> ${permit.issueddate || 'N/A'}<br>
                        <b>Work Class:</b> ${permit.workclassgroup || 'N/A'}<br>
                        <b>Contractor:</b> ${permit.contractorname || 'N/A'}<br>
                        <b>Community:</b> ${permit.communityname || 'N/A'}<br>
                        <b>Address:</b> ${permit.originaladdress || 'N/A'}
                    `;
                    marker.bindPopup(popupContent);
                    if (oms) oms.addMarker(marker);
                    markers.addLayer(marker);
                }
            });
            map.addLayer(markers);
        })
        .catch(error => console.error('Error fetching data:', error));
}

searchPermits();