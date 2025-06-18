import comSkill from "../assets/comSkill.png";
import educSkiil from "../assets/educSkill (1).png";
import nutSkill from "../assets/nutSkill.png";
import "../index.css";

export default function Skills() {
    return (
        <div className="skills-section" id="skills">
            <h1 className="skills-title">Mes Domaines de Compétence</h1>
            <div className="skills-cards">
                <div className="skill-item">
                    <img src={comSkill} alt="Communication scientifique" />
                    <h2>Communication scientifique</h2>
                    <p>
                        Capacité à transmettre des informations médicales de manière claire et accessible à différents publics (patients, grand public, professionnels).
                    </p>
                </div>
                <div className="skill-item">
                    <img src={educSkiil} alt="Santé publique & Éducation à la santé" />
                    <h2>Santé publique & Éducation à la santé</h2>
                    <p>
                        Expérience dans la sensibilisation, la prévention et la gestion des comportements de santé à l’échelle individuelle et communautaire.
                    </p>
                </div>
                <div className="skill-item">
                    <img src={nutSkill} alt="Nutrition & Micronutrition" />
                    <h2>Nutrition & Micronutrition</h2>
                    <p>
                        Conseil personnalisé en alimentation, prévention des carences, amélioration du bien-être et soutien aux maladies métaboliques.
                    </p>
                </div>
            </div>
        </div>
    );
}
