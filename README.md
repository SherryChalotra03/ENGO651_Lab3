# Calgary Building Permits Explorer

A web mapping application to visualize building permits in Calgary, built as part of the ENGO 651 course (Winter 2025). This project uses the City of Calgary’s Open Data API to fetch permit data, Leaflet.js for mapping, and plugins for clustering and overlapping markers. Users can filter permits by date range and explore details via interactive map markers.

## Features
- **Interactive Map**: Displays building permits as markers on a Leaflet map centered on Calgary.
- **Date Range Filter**: Select a date range using a Flatpickr widget to query permits.
- **Permit Details**: Click markers to view popups with issued date, work class, contractor, community, and address.
- **Clustering**: Groups nearby markers at certain zoom levels using Leaflet.markercluster.
- **Overlapping Markers**: Handles multiple permits at the same location with OverlappingMarkerSpiderfier.
- **Responsive Design**: Modern, user-friendly interface with styled components.

## Prerequisites
- **Web Browser**: Modern browser (e.g., Chrome, Firefox) for testing.
- **Internet Connection**: Needed to fetch API data and external libraries.

## Dependencies
- Leaflet.js (v1.9.4): Mapping library (loaded via CDN).
- Flatpickr: Date range picker (loaded via CDN).
- Leaflet.markercluster (v1.5.3): Marker clustering plugin (loaded via CDN).
- OverlappingMarkerSpiderfier: Handles overlapping markers (loaded via CDN).
- Open Calgary API: Data source (https://data.calgary.ca/resource/c2es-76ed.json).

## Installation & testing
1. **Clone or Download the Project**:
   - If using Git: `git clone <repository-url>` (replace with your repo URL if applicable).
   - Or download and extract the project files to `D:\Myphd\Course Work\Winter 2025\ENGO651\ENGO651_Lab3\ENGO651_Lab3-`. and run index.html. 
2. **Test the App:**
    - Use the date range picker to select a start and end date (e.g., 2023-01-01 to 2023-12-31).
    - Click "Search" to fetch and display permits on the map.
    - Click markers to view permit details.



## Usage
- Filter Permits: Enter a date range and click "Search" to update the map.
- Explore Overlaps: Click clustered or overlapping markers to "spiderfy" and reveal individual permits.
- Zoom: Use the map’s zoom controls to adjust clustering behavior.

