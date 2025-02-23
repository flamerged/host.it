import mapboxgl from 'mapbox-gl';

const buildMap = (mapElement) => {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/vladtdkv/cki4j9mq10wh719rnmdplvini'
    });
};

const addMarkersToMap = (map, marker, element) => {
    new mapboxgl.Marker(element)
        .setLngLat([marker.lng, marker.lat])
        .addTo(map);
};

const fitMapToMarkers = (map, marker) => {
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend([marker.lng, marker.lat]);
    map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
};

const initMapbox = () => {
    const mapElement = document.getElementById('map');

    if (mapElement) {
        const map = buildMap(mapElement);
        const marker = JSON.parse(mapElement.dataset.markers);
        const element = document.createElement('div');
        element.className = 'marker';
        element.style.backgroundImage = `url('${marker.image_url}')`;
        element.style.backgroundSize = 'contain';
        element.style.width = '45px';
        element.style.height = '45px';
        addMarkersToMap(map, marker, element);
        fitMapToMarkers(map, marker);
        map.on('load', function () {
            map.resize();
        });
    }
};

export { initMapbox };