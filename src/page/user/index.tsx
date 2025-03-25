import { useState } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import FormModal from "../../components/ui/formModal"
import "../../styles/user/index.css"
import ActionIcons from "../../components/ui/iconActions"

const rows  =  [
  {
    "id": "1",
    "nom": "Doe",
    "prenom": "John",
    "email": "john.doe@entreprise.com",
    "number_phone": "0388393811",
    "role": "manager",
    "departement": "IT"
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

  const [isModalOpen, setIsModalOpen]= useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(true)
  
  return(
        <div className="users-container">
        <h1 className="users-title">Users</h1>
        <button onClick={openModal}>Ouvrir le formulaire</button>
        <FormModal isOpen={isModalOpen} closeModal={closeModal} />
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
      </div>
    )
}

export default Users