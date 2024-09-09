import React from 'react';
import './WetteraukreisStatistikPage.css';

function WetteraukreisStatistikPage() {
    return (
        <div className="statistik-page">
            <h2>Statistik im Wetteraukreis</h2>

            <figure className="image">
                <a href="https://gis.wetterau.de/GISWetterau/synserver?project=Monitoring&amp;client=Core&amp;View=Monitoring" target="_blank" rel="noopener noreferrer">
                    <img
                        loading="lazy"
                        src="https://wetteraukreis.de/fileadmin/_processed_/4/c/csm_KreismonitoringGemeinden_Startseite_92dad69284.jpg"
                        alt="Kreismonitoring Gemeinden"
                        className="map-image"
                    />
                </a>
                <figcaption className="caption">
                    <p>Die 25 Städte und Gemeinden des Wetteraukreises</p>
                </figcaption>
            </figure>

            <div className="statistik-info">
                <h3>Aktuelle Daten und Fakten</h3>
                <table className="statistik-table">
                    <tbody>
                    <tr>
                        <td>Fläche am 31.12.2023</td>
                        <td>1.100,66 km²</td>
                    </tr>
                    <tr>
                        <td>Einwohner am 30.06.2023</td>
                        <td>318.906</td>
                    </tr>
                    <tr>
                        <td>Einwohnerdichte am 30.06.2023</td>
                        <td>290 Einw./km²</td>
                    </tr>
                    <tr>
                        <td>Veränderung der Einwohnerzahl 30.06.2011 – 31.12.2022</td>
                        <td>+ 24.733 (+ 8,45%)</td>
                    </tr>
                    <tr>
                        <td>Sozialversicherungspflichtig Beschäftigte am 30.06.2023 am Arbeitsort Wetteraukreis</td>
                        <td>92.341</td>
                    </tr>
                    <tr>
                        <td>Sozialversicherungspflichtig Beschäftigte am 30.06.2023 am Wohnort Wetteraukreis</td>
                        <td>129.370</td>
                    </tr>
                    <tr>
                        <td>Dienstleistungsanteil am Arbeitsort (12/2021)</td>
                        <td>49,0%</td>
                    </tr>
                    <tr>
                        <td>Arbeitslose im Jahresdurchschnitt 2023</td>
                        <td>7.230</td>
                    </tr>
                    <tr>
                        <td>Arbeitslosenquote (Durchschnitt 2023)</td>
                        <td>4,2%</td>
                    </tr>
                    <tr>
                        <td>Bruttoinlandsprodukt 2021</td>
                        <td>9.548 Mio. Euro</td>
                    </tr>
                    <tr>
                        <td>Wohnungen 2022</td>
                        <td>147.750</td>
                    </tr>
                    <tr>
                        <td>Veränderung der Zahl der Wohnungen 09.05.2011 – 31.12.2022</td>
                        <td>+11.238 (+ 8,2%)</td>
                    </tr>
                    <tr>
                        <td>Siedlungs- und Verkehrsfläche 2022 (einschließlich aller Wege)</td>
                        <td>175,01 km²</td>
                    </tr>
                    <tr>
                        <td>Gewerbesteuerhebesatz 2023</td>
                        <td>350% – 440%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WetteraukreisStatistikPage;
