import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { Box, Button, InputBase, Paper, TextField } from "@mui/material";
import React from "react";

const AboveTable = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <p style={{ fontSize: 15, fontWeight: 600 }}>Filter By:</p>
          <TextField
            id="outlined-basic"
            label="Stage"
            variant="outlined"
            sx={{
              width: "16%", // Set the desired width, thinner than the original 15%
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "1px", // Thinner border
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "1px", // Keep the border thin when focused
                },
              },
              "& .MuiInputBase-input": {
                padding: "5px 8px", // Adjust padding for a slimmer look
                fontSize: "0.85rem", // Slightly smaller font
              },
              "& .MuiInputLabel-root": {
                mt: -1.4,
                fontSize: "0.85rem", // Smaller label text size
              },
            }}
            InputProps={{
              sx: {
                height: "30px", // Control height for a thinner appearance
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            sx={{
              width: "16%", // Set the desired width, thinner than the original 15%
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "1px", // Thinner border
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "1px", // Keep the border thin when focused
                },
              },
              "& .MuiInputBase-input": {
                padding: "5px 8px", // Adjust padding for a slimmer look
                fontSize: "0.85rem", // Slightly smaller font
              },
              "& .MuiInputLabel-root": {
                mt: -1.4,
                fontSize: "0.85rem", // Smaller label text size
              },
            }}
            InputProps={{
              sx: {
                height: "30px", // Control height for a thinner appearance
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            sx={{
              width: "16%", // Set the desired width, thinner than the original 15%
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "1px", // Thinner border
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "1px", // Keep the border thin when focused
                },
              },
              "& .MuiInputBase-input": {
                padding: "5px 8px", // Adjust padding for a slimmer look
                fontSize: "0.85rem", // Slightly smaller font
              },
              "& .MuiInputLabel-root": {
                mt: -1.4,
                fontSize: "0.85rem", // Smaller label text size
              },
            }}
            InputProps={{
              sx: {
                height: "30px", // Control height for a thinner appearance
              },
            }}
          />
          <Button
            variant="text"
            sx={{ color: "#7a59ff", textTransform: "none" }}
          >
            Clear
          </Button>
        </Box>
        <Box>
          <Paper
            sx={{
              width: "560px",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            <InputBase
              type="text"
              placeholder="Search..."
              style={{ padding: 4 }}
            ></InputBase>
            <Box>
              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: "#7a59ff", mr: 1, textTransform: "none" }}
              >
                Search
              </Button>
              <Button
                variant="text"
                size="small"
                sx={{ color: "#7a59ff", textTransform: "none" }}
              >
                Clear
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        <Box
          sx={{ display: "flex", mt: 2, mb: 1, alignItems: "center", gap: 2 }}
        >
          <p style={{ fontSize: 14, fontWeight: 600 }}>Page Size:</p>
          <TextField
            id="outlined-basic"
            label="10"
            variant="outlined"
            sx={{
              width: "11%", // Set the desired width, thinner than the original 15%
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "1px", // Thinner border
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "1px", // Keep the border thin when focused
                },
              },
              "& .MuiInputBase-input": {
                padding: "5px 12px", // Adjust padding for a slimmer look
                fontSize: "0.85rem", // Slightly smaller font
              },
              "& .MuiInputLabel-root": {
                mt: -1.4,
                fontSize: 16, // Smaller label text size
              },
            }}
            InputProps={{
              sx: {
                height: "30px", // Control height for a thinner appearance
              },
            }}
          />
          <p style={{ fontSize: 15, fontWeight: 600 }}>Total:</p>
          <p style={{ fontSize: 15 }}>1-10 out of 26</p>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none", bgcolor: "#7a59ff" }}
          >
            <AddCircleOutlineOutlined sx={{ fontSize: 16, mr: 1 }} /> Add Room
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AboveTable;
