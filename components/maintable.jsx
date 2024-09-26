// "use client";
// import {
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Table,
//   Button,
// } from "@mui/material";
// import { theme } from "@/app/home/page";

// function createData(
//   classroom,
//   type,
//   category,
//   campus,
//   stage,
//   stage2,
//   stage3,
//   name,
//   shotn,
//   location,
//   capacity,
//   schedule,
//   action
// ) {
//   return {
//     classroom,
//     type,
//     category,
//     campus,
//     stage,
//     stage2,
//     stage3,
//     name,
//     shotn,
//     location,
//     capacity,
//     schedule,
//     action,
//   };
// }

// const rows = [
//   createData(
//     5,
//     "Facility",
//     "Shared",
//     "Boys Section",
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       P
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       M
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       H
//     </Button>,
//     "Music Room",
//     "MUS",
//     "1st Floor",
//     25,
//     "Yes",
//     "..."
//   ),
//   createData(
//     33,
//     "Classroom",
//     "Designated",
//     "Boys Section",
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       P
//     </Button>,
//     "",
//     "",
//     "Please Delete",
//     "Please Delete",
//     "1st Floor",
//     25,
//     "No",
//     "..."
//   ),
//   createData(
//     2,
//     "Facility",
//     "Shared",
//     "Boys Section",
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       P
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       M
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       H
//     </Button>,
//     "Cafeteria",
//     "CAF",
//     "Ground Floor",
//     500,
//     "No",
//     "..."
//   ),
//   createData(
//     4,
//     "Facility",
//     "Shared",
//     "Boys Section",
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       P
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       M
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       H
//     </Button>,
//     "Computer Lab",
//     "IT-LAB",
//     "1st Floor",
//     100,
//     "Yes",
//     "..."
//   ),
//   createData(
//     3,
//     "Facility",
//     "Shared",
//     "Boys Section",
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       P
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       M
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       H
//     </Button>,
//     "Science Lab",
//     "SC-Lab",
//     "2st Floor",
//     100,
//     "Yes",
//     "..."
//   ),
//   createData(
//     1,
//     "Facility",
//     "Shared",
//     "Boys Section",
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       P
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       M
//     </Button>,
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       H
//     </Button>,
//     "Playground",
//     "PG",
//     "Ground Floor",
//     500,
//     "Yes",
//     "..."
//   ),
//   createData(
//     307,
//     "Classroom",
//     "Designated",
//     "Boys Section",
//     <Button
//       variant="contained"
//       size="small"
//       color="theme.palette.secondary.main"
//       sx={{ color: "#ff6059", fontWeight: 800 }}
//     >
//       H
//     </Button>,
//     "",
//     "",
//     "Grade 12B",
//     "G12B",
//     "3st Floor",
//     26,
//     "Yes",
//     "..."
//   ),
// ];

// const BasicTable4 = () => {
//   const row = 1;
//   return (
//     <TableContainer sx={{ borderRadius: 2 }}>
//       <Table>
//         <TableHead>
//           <TableRow
//             key={row.id}
//             sx={{
//               "& td, & th": {
//                 border: "1px solid grey",
//                 bgcolor: "#ff6059",
//                 color: "white",
//                 fontWeight: "600",
//                 fontSize: 14,
//               },
//               textAlign: "center",
//             }}
//           >
//             <TableCell> Room No </TableCell>
//             <TableCell> Type </TableCell>
//             <TableCell> Category </TableCell>
//             <TableCell> Campus </TableCell>
//             <TableCell sx={{ overflow: "scroll" }}> Stage </TableCell>
//             <TableCell> Name </TableCell>
//             <TableCell> Short Name </TableCell>
//             <TableCell> Location </TableCell>
//             <TableCell> Capacity </TableCell>
//             <TableCell> Enable For Scheduling </TableCell>
//             <TableCell> Action </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               sx={{
//                 "& td, & th": { border: "1px solid black" },
//                 textAlign: "center",
//                 fontSize: 12,
//               }}
//             >
//               <TableCell>{row.classroom}</TableCell>
//               <TableCell>{row.type}</TableCell>
//               <TableCell>{row.category}</TableCell>
//               <TableCell>{row.campus}</TableCell>
//               <TableCell>
//                 {row.stage}

//                 {row.stage2}

//                 {row.stage3}
//               </TableCell>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.shotn}</TableCell>
//               <TableCell>{row.location}</TableCell>
//               <TableCell>{row.capacity}</TableCell>
//               <TableCell>{row.schedule}</TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   size="small"
//                   color="theme.palette.secondary.main"
//                   sx={{
//                     py: -1,
//                     textTransform: "none",
//                     borderRadius: 120,
//                     fontWeight: 800,
//                     fontSize: 14,
//                   }}
//                 >
//                   {row.action}
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default BasicTable4;
"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Button, ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";

const columns = [
  { field: "id", headerName: "Room No", width: 110 },
  { field: "type", headerName: "Type", width: 120 },
  { field: "category", headerName: "Category", width: 120 },
  { field: "campus", headerName: "Campus", width: 130 },
  {
    field: "stage",
    headerName: "Stage",
    width: 190,
    renderCell: (params) => {
      const buttons = params.row.stage;
      return (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            pt: 1,
          }}
        >
          {buttons.map((button, index) => (
            <Button
              variant="contained"
              size="small"
              color="theme.palette.secondary.main"
              sx={{ color: "#7a59ff", fontWeight: 800 }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
      );
    },
  },
  { field: "name", headerName: "Name", width: 120 },
  { field: "shotn", headerName: "Short Name", width: 120 },
  { field: "location", headerName: "Location", width: 120 },
  { field: "capacity", headerName: "Capacity ", width: 100 },
  { field: "schedule", headerName: "Enable For Scheduling ", width: 190 },
  {
    field: "actions",
    headerName: "Actions ",
    width: 80,
    renderCell: (params) => (
      <p
        style={{
          paddingBottom: 2,
          textAlign: "center",
          fontSize: 16,
          fontWeight: 800,
        }}
      >
        ...
      </p>
    ),
  },
];

const rows = [
  {
    id: 5,
    type: "Facility",
    category: "Shared",
    campus: "Boys Section",
    stage: [{ label: "P" }, { label: "H" }, { label: "M" }],
    name: "Music Room",
    shotn: "MUS",
    location: "1st Floor",
    capacity: 25,
    schedule: "Yes",
    actions: "...",
  },
  {
    id: 33,
    type: "Classroom",
    category: "Designated",
    campus: "Boys Section",
    stage: [{ label: "P" }],
    name: "Please Delete",
    shotn: "Please Delete",
    location: "1st Floor",
    capacity: 25,
    schedule: "No",
    actions: "...",
  },
  {
    id: 2,
    type: "Facility",
    category: "Shared",
    campus: "Boys Section",
    stage: [{ label: "P" }, { label: "H" }, { label: "M" }],
    name: "Cafeteria",
    shotn: "CAF",
    location: "Ground Floor",
    capacity: 500,
    schedule: "No",
    actions: "...",
  },
  {
    id: 4,
    type: "Facility",
    category: "Shared",
    campus: "Boys Section",
    stage: [{ label: "P" }, { label: "H" }, { label: "M" }],
    name: "Computer Lab",
    shotn: "IT-LAB",
    location: "1st Floor",
    capacity: 100,
    schedule: "Yes",
    actions: "...",
  },
  {
    id: 3,
    type: "Facility",
    category: "Shared",
    campus: "Boys Section",
    stage: [{ label: "P" }, { label: "H" }, { label: "M" }],
    name: "Science Lab",
    shotn: "SC-Lab",
    location: "2st Floor",
    capacity: 100,
    schedule: "Yes",
    actions: "...",
  },
  {
    id: 1,
    type: "Facility",
    category: "Shared",
    campus: "Boys Section",
    stage: [{ label: "P" }, { label: "H" }, { label: "M" }],
    name: "Playground",
    shotn: "PG",
    location: "Ground Floor",
    capacity: 500,
    schedule: "Yes",
    actions: "...",
  },
  {
    id: 307,
    type: "Classroom",
    category: "Designated",
    campus: "Boys Section",
    stage: [{ label: "H" }],
    name: "Grade 12B",
    shotn: "G12B",
    location: "3rd Floor",
    capacity: 26,
    schedule: "Yes",
    actions: "...",
  },
];
const paginationModel = { page: 0, pageSize: 7 };

export default function DataTable() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: 470, width: "100%", textAlign: "center" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[7, 10]}
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaders": {
              color: "white",
              fontSize: 15,
              textAlign: "center",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "semibold",
            },
            "& .MuiDataGrid-container--top [role='row'], & .MuiDataGrid-container--bottom [role='row']":
              {
                backgroundColor: "#616161", // Custom background using the CSS variable
              },
            "& .MuiDataGrid-cell": {
              textAlign: "center", // Centers text in all cells
            },
            "& .MuiDataGrid-columnHeadersInner": {
              textAlign: "center", // Centers text in all headers
            },
          }}
        />
      </Paper>
    </ThemeProvider>
  );
}
