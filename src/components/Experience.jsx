import doctorLogo from "../assets/doctorLogo.png";
import "../index.css";

export default function Experience() {
    return (
        <div className="experience-container" id="experience">
            <h1 className="experience-title">EXPÉRIENCE</h1>
            <div className="experience-content">
                <div className="experience-text">
                    <h2>
                        Médecin généraliste avec quatre ans d'expérience dans le secteur public en Algérie, spécialisé dans la prévention et la prise en charge des maladies chroniques.
                    </h2>
                </div>
                <div className="experience-image">
                    <img src={doctorLogo} alt="Logo docteur" />
                    <a
                        href="/cv.pdf"
                        download="CV-Aourfi-Soumaya.pdf"
                        className="download-btn"
                    >
                        CV
                    </a>
                </div>
            </div>
        </div>
    );
}