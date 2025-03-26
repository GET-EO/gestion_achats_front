import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import "../../styles/user/index.css"
import ActionIcons from "../../components/ui/iconActions"
import Options from "../../components/Options"
import FormModal from "../../components/ui/formModal"
import { useState } from "react"

const demandes = [
    {
      "id": "REQ-20240325-001",
      "reference": "b0aaf475-9e2e-4efc-b4a5-5cd889b30d74",
      "date_creation": "2025-03-25",
      "employe_id": "c7214068-c9a1-4ee2-bf4e-8da0368a3463",
      "employe_nom": "Jean Dupont",
      "departement": "IT",
      "articles": [
        {
          "id": "ART-001",
          "nom": "Ordinateur Dell XPS 15",
          "quantite": 2,
          "prix_unitaire": 1800,
          "fournisseur": "Dell France",
          "date_livraison_prevue": "2025-04-10"
        },
        {
          "id": "ART-002",
          "nom": "Clavier mécanique Logitech MX",
          "quantite": 3,
          "prix_unitaire": 120,
          "fournisseur": "Logitech",
          "date_livraison_prevue": "2025-04-12"
        }
      ],
      "montant_total": 3960,
      "statut": "En attente",
      "date_validation": null,
      "valide_par": null,
      "commentaire": "",
      "moyen_paiement": "Virement"
    },
    {
      "id": "REQ-20240326-002",
      "reference": "7a83f890-a860-4021-8870-622fa8f3bf67",
      "date_creation": "2025-03-26",
      "employe_id": "6afe831c-79e3-436a-b341-2e504ad88b93",
      "employe_nom": "Alice Martin",
      "departement": "Finances",
      "articles": [
        {
          "id": "ART-003",
          "nom": "Chaise ergonomique",
          "quantite": 5,
          "prix_unitaire": 250,
          "fournisseur": "BureauConfort",
          "date_livraison_prevue": "2025-04-15"
        }
      ],
      "montant_total": 1250,
      "statut": "Approuvée",
      "date_validation": "2025-03-27",
      "valide_par": "Manager RH",
      "commentaire": "Validé pour amélioration du confort des employés.",
      "moyen_paiement": "Carte"
    }
  ]
  


const Materiel = () => {

  const[showModal, setShowModal] = useState(false)
  
  return(
        <div className="users-container">
        <Options title="Material" openModal={()=>setShowModal(true)}/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="tableau simple">
            <TableHead>
              <TableRow>
                <TableCell>Crée le</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell>Département</TableCell>
                <TableCell>Article</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Statut</TableCell>
                <TableCell>Date validation</TableCell>
                <TableCell>Valider par</TableCell>
                <TableCell>Opérations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demandes.map((demande) => (
              <TableRow
                key={demande.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{demande.date_creation}</TableCell>
                <TableCell component="th" scope="row">{demande.employe_id}</TableCell>
                <TableCell component="th" scope="row">{demande.employe_nom}</TableCell>
                <TableCell component="th" scope="row">{demande.departement}</TableCell>
                <TableCell component="th" scope="row">
                    {demande.articles.map((article) => `${article.nom} (x${article.quantite})`).join(", ")}
                </TableCell>
                <TableCell component="th" scope="row">{demande.montant_total}</TableCell>
                <TableCell component="th" scope="row">{demande.statut}</TableCell>
                <TableCell component="th" scope="row">{demande.date_validation}</TableCell>
                <TableCell component="th" scope="row">{demande.valide_par}</TableCell>
                <TableCell component="th" scope="row"><ActionIcons/></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <FormModal
            isOpen={showModal}
            closeModal={() => setShowModal(false)}
            title="Add new Request"
            apiEndpoint="http://192.168.43.17:3000/products"
            fields={[
            { name: "name", label: "Materiel", type: "text", required: true},
            { name: "description", label: "Description", type: "text", required: true },
            { name: "unit_price", label: "Prix unitaire", type: "number", required: true },
            { name: "supplier_id", label: "Fournisseur", type: "select", options: demandes.map(demande => ({value: demande.employe_id.toString(), label: demande.employe_id})) },
            { name: "category_id", label: "Catégories", type: "select", options: demandes.map(demande => ({value: demande.reference.toString(), label: demande.reference}))},
            ]}
        />
      </div>
    )
}

export default Materiel