import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import "../../styles/budget/index.css"
import ActionIcons from "../../components/ui/iconActions"
import Options from "../../components/Options"

const budgets = [
    {
      "id": "1",
      "department": "informatique",
      "total_amount": 50000,
      "used_amount": 30000,
      "remaining_amount": 20000,
    },
    {
      "id": "2",
      "department": "Ressourcs humaines",
      "total_amount": 70000,
      "used_amount": 50000,
      "remaining_amount": 20000,
    },
    {
      "id": "3",
      "department": "Marketing",
      "total_amount": 15000,
      "used_amount": 5000,
      "remaining_amount": 10000,
    },
    {
      "id": "3",
      "department": "Logistique",
      "total_amount": 20000,
      "used_amount": 10000,
      "remaining_amount": 10000,
    },
  ]
  


const Budget = () => {
  
  return(
        <div className="budget-container">
        <Options title = 'Budget'/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="tableau simple">
            <TableHead>
              <TableRow>
                <TableCell>Departement</TableCell>
                <TableCell>Montant total</TableCell>
                <TableCell>Montant utilisés</TableCell>
                <TableCell>Reste du budget</TableCell>
                <TableCell>Opérations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {budgets.map((budget) => (
              <TableRow
                key={budget.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{budget.department}</TableCell>
                <TableCell component="th" scope="row">{budget.total_amount}</TableCell>
                <TableCell component="th" scope="row">{budget.used_amount}</TableCell>
                <TableCell component="th" scope="row">{budget.remaining_amount}</TableCell>
                <TableCell component="th" scope="row"><ActionIcons/></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
}

export default Budget