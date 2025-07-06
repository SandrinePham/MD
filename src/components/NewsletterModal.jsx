import { useEffect, useRef, useState } from "react";
import "./NewsletterModal.scss"; // Ton fichier de style perso

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const modalRef = useRef(null);

  // Fermer en cliquant à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Soumettre l'email
  const handleSubmit = () => {
    if (email.trim()) {
      // Tu peux ici ajouter un appel API
      setIsSubscribed(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>

        {isSubscribed ? (
          <div className="success-message">
            🎉 Merci pour ton inscription à la newsletter !
          </div>
        ) : (
          <>
            <h2>DECOUVRE MA NEWSLETTER !</h2>
            <p>
              Inscris-toi pour des conseils éclairés et des récits personnels
              sur le chemin du bien-être gynécologique.
            </p>
            <div className="input-container">
              <input
                type="email"
                placeholder="Ton adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
              />
              <button className="submit-btn" onClick={handleSubmit}>
                S'inscrire
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
