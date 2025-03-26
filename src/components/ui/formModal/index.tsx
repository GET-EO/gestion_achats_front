import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, TextField, MenuItem, Button, Typography } from "@mui/material";
import "./FormModal.css";

interface Field {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
}

interface FormModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  apiEndpoint: string;
  fields: Field[];
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, closeModal, title, apiEndpoint, fields }) => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Erreur lors de l'envoi");
      console.log("Données envoyées:", data);
      reset();
      closeModal();
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>{title}</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => (
              <div key={field.name} className="form-group">
                <Controller
                  name={field.name}
                  control={control}
                  rules={field.required ? { required: `${field.label} est requis` } : {}}
                  render={({ field: inputProps }) =>
                    field.type === "select" ? (
                      <TextField select {...inputProps} label={field.label} fullWidth margin="normal"
                        error={!!errors[field.name]}
                      >
                        {field.options?.map((option) => (
                          <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                      </TextField>
                    ) : (
                      <TextField {...inputProps} label={field.label} type={field.type} fullWidth margin="normal"
                        error={!!errors[field.name]}
                      />
                    )
                  }
                />
              </div>
            ))}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Soumettre</Button>
          </form>
          <Button onClick={closeModal} variant="outlined" fullWidth sx={{ mt: 1 }}>Fermer</Button>
        </Container>
      </div>
    </div>
  );
};

export default FormModal;
