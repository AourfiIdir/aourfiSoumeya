import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "",title:"" });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_c1hy63r","template_2yg648v",        // ✔️ template ID
            {
                title: formData.title,
                name: formData.name,
                time: new Date().toLocaleString(),
                message: formData.message,
                email: formData.email
            },
            "z5NE3n3VEoxh-xoXr"    // ✔️ public key
        )
            .then(() => {
                setSent(true);
                setError(null);
                setFormData({ name: "", email: "", message: "" ,title:""});
            })
            .catch((err) => {
                console.error("Erreur EmailJS :", err);
                setError("Erreur lors de l'envoi du message. Veuillez réessayer.");
            });
    };

    return (
        <div className="contact-section" id="contact">
            <h1 className="contact-title">Contactez-moi</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="object"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Votre message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Envoyer</button>
                {sent && <p className="sent-message">✅ Merci, votre message a bien été envoyé !</p>}
                {error && <p className="error-message">❌ {error}</p>}
            </form>
        </div>
    );
}
