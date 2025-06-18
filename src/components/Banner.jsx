import persoLogo from "../assets/persoLogo.png";
import "../index.css";

export default function Banner() {
    return (
        <div className="banner-container" id="banner">
            <div className="logo-section">
                <img src={persoLogo} className="perso-img" alt="Logo personnel" />
            </div>
            <div className="info-section">
                <h1>AOURFI SOUMEYA</h1>
                <h2>Médecin généraliste et conseillère en nutrition</h2>
            </div>
        </div>
    );
}