import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import "../../styles/user/index.css"
import ActionIcons from "../../components/ui/iconActions"
import Options from "../../components/Options"

const demandes = [
    {
      "id": "REQ-20240325-001",
      "reference": "REQ-20240325-001",
      "date_creation": "2025-03-25",
      "employe_id": "EMP-102",
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
      "reference": "REQ-20240326-002",
      "date_creation": "2025-03-26",
      "employe_id": "EMP-205",
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
  
  return(
        <div className="users-container">
        <Options title="Material"/>
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
      </div>
    )
}

export default Materiel