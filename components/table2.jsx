import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import { theme } from "@/app/home/page";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("LadyFinger", 159, 6.0, 24, 4.0),
  createData("Potato", 237, 9.0, 37, 4.3),
  createData("Tomato", 262, 16.0, 24, 6.0),
  createData("Garlic", 305, 3.7, 67, 4.3),
  createData("Red Chilli", 356, 16.0, 49, 3.9),
];

const BasicTable2 = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              "& td, & th": {
                border: "1px solid black",
                bgcolor: theme.palette.secondary.main,
                color: "white",
                fontWeight: "600",
              },
            }}
          >
            <TableCell> Dessert (100g serving) </TableCell>
            <TableCell> Calories </TableCell>
            <TableCell> Fat (g) </TableCell>
            <TableCell> Carbs (g) </TableCell>
            <TableCell> Proteins (g) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "& td, & th": { border: "1px solid black" } }}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable2;
