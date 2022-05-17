import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[50.2656237,18.9938192]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.2656237,18.9938192]}>
                    <Popup>
                        <h2>IT.focus</h2>
                        <p>Super firma programistyczna!</p>
                    </Popup>
                </Marker>

            </MapContainer>

        </div>
    );
};