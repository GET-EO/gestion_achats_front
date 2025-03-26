import { useState } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, TextField, Button, MenuItem } from "@mui/material"
import "../../styles/user/index.css"
import ActionIcons from "../../components/ui/iconActions"
import { Controller, useForm } from "react-hook-form"
import UserService from "../../services/api_service/userService"

const roles = ["Manager", "Employé", "Directeur"];
  const departements = ["IT", "RH", "Finance", "Marketing"];
const rows  =  [
  {
    "id": "1",
    "nom": "Doe",
    "prenom": "John",
    "email": "john.doe@entreprise.com",
    "number_phone": "0388393811",
    "role": "manager",
    "departement": "IT",
  },
  {
    "id": "2",
    "nom": "Smith",
    "prenom": "Alice",
    "email": "alice.smith@entreprise.com",
    "number_phone": "0388393811",
    "role": "employe",
    "departement": "Finance"
  },
  {
    "id": "3",
    "nom": "Martin",
    "prenom": "Paul",
    "email": "paul.martin@entreprise.com",
    "number_phone": "0388393811",
    "role": "admin",
    "departement": "Direction"
  },
  {
    "id": "4",
    "nom": "Lefevre",
    "prenom": "Julie",
    "email": "julie.lefevre@entreprise.com",
    "number_phone": "0388393811",
    "role": "manager",
    "departement": "Achats"
  },
  {
    "id": "5",
    "nom": "Dupont",
    "prenom": "Marc",
    "email": "marc.dupont@entreprise.com",
    "number_phone": "0388393811",
    "role": "employe",
    "departement": "RH"
  },
  {
    "id": "6",
    "nom": "Dupont",
    "prenom": "Marc",
    "email": "marc.dupont@entreprise.com",
    "number_phone": "0388393811",
    "role": "employe",
    "departement": "RH"
  },
  {
    "id": "7",
    "nom": "Dupont",
    "prenom": "Marc",
    "email": "marc.dupont@entreprise.com",
    "number_phone": "0388393811",
    "role": "employe",
    "departement": "RH"
  },
  {
    "id": "8",
    "nom": "Dupont",
    "prenom": "Marc",
    "email": "marc.dupont@entreprise.com",
    "number_phone": "0388393811",
    "role": "employe",
    "departement": "RH"
  },
]


const Users = () => {
    const [showModal, setShowModal] = useState(false);

  
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            last_name: "",
            first_name: "",
            email: "",
            password: "",
            role: "",
            department: "",
            creation_date:"2025-03-27"
        }
    });

    const onSubmit = (data: any) => {
        UserService.register(data);
        console.log("Données du formulaire:", data);
    };
  
  
  return(
        <div className="users-container">
              <div className="dashboard-header">
        <h1 className="dashboard-title">Utilisateur</h1>
        <button className="prediction-button" onClick={() => setShowModal(true)}>Ajouter utilisateur</button>
      </div>
        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="tableau simple">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Prénoms</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Departement</TableCell>
                <TableCell>Opérations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.nom}</TableCell>
                <TableCell component="th" scope="row">{row.prenom}</TableCell>
                <TableCell component="th" scope="row">{row.email}</TableCell>
                <TableCell component="th" scope="row">{row.number_phone}</TableCell>
                <TableCell component="th" scope="row">{row.role}</TableCell>
                <TableCell component="th" scope="row">{row.departement}</TableCell>
                <TableCell component="th" scope="row"><ActionIcons/></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {showModal && (
        <div className="modal">
          <div className="modal-content" >
          <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom  onClick={() => setShowModal(false)}>Formulaire</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="last_name"
                    control={control}
                    rules={{ required: "Le nom est requis" }}
                    render={({ field }) => (
                        <TextField {...field} label="Nom" fullWidth margin="normal" error={!!errors.last_name} helperText={errors.last_name?.message} />
                    )}
                />
                <Controller
                    name="first_name"
                    control={control}
                    rules={{ required: "Le prénom est requis" }}
                    render={({ field }) => (
                        <TextField {...field} label="Prénom" fullWidth margin="normal" error={!!errors.first_name} helperText={errors.first_name?.message} />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: "L'email est requis", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email invalide" } }}
                    render={({ field }) => (
                        <TextField {...field} label="Email" fullWidth margin="normal" error={!!errors.email} helperText={errors.email?.message} />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Le numéro de téléphone est requis" }}
                    render={({ field }) => (
                        <TextField {...field} label="Numéro de téléphone" fullWidth margin="normal" error={!!errors.password} helperText={errors.password?.message} />
                    )}
                />
                <Controller
                    name="role"
                    control={control}
                    rules={{ required: "Le rôle est requis" }}
                    render={({ field }) => (
                        <TextField select {...field} label="Rôle" fullWidth margin="normal" error={!!errors.role} helperText={errors.role?.message}>
                            {roles.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                    )}
                />
                <Controller
                    name="department"
                    control={control}
                    rules={{ required: "Le département est requis" }}
                    render={({ field }) => (
                        <TextField select {...field} label="Département" fullWidth margin="normal" error={!!errors.department} helperText={errors.department?.message}>
                            {departements.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                    )}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Soumettre</Button>
            </form>
        </Container>           
          </div>
        </div>
      )}
      </div>
    )
}

export default Users