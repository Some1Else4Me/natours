/* eslint-disable */

export const displayMap = locations => {
    mapboxgl.accessToken =
        'pk.eyJ1IjoidHVuZ3V5ZW4xNiIsImEiOiJjbG8yeXV4dXQxOTA5MmpvMzF0eTFiZGdwIn0.0Ti-i79luTzbyqQH9xRw1g';
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/tunguyen16/clo2yy0km00ia01qv4gwr3czj', // style URL
        scrollZoom: false
        // center: [-74.5, 40], // starting position [lng, lat]
        // zoom: 9 // starting zoom
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat(loc.coordinates)
            .addTo(map);

        new mapboxgl.Popup({ offset: 30 })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: { top: 200, bottom: 150, left: 100, right: 100 }
    });
};
