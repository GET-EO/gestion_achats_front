import React, { useState, FormEvent } from 'react';
import './FormModal.css';

interface FormModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Formulaire</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default FormModal;
