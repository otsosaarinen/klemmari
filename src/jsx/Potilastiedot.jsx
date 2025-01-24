import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "../css/Potilastiedot.css";

function Potilastiedot({ language }) {
    const navigate = useNavigate();

    const columns = [
        { field: "id", headerName: language === "fi" ? "ID" : "ID", width: 90 },
        {
            field: "Käynti",
            headerName: language === "fi" ? "Käynti" : "Visit",
            width: 450,
        },
        {
            field: "Päivämäärä",
            headerName: language === "fi" ? "Päivämäärä" : "Date",
            type: "number",
            width: 140,
            editable: true,
        },
    ];

    const rows = [
        {
            id: 1,
            Käynti: language === "fi" ? "Vastaanotto" : "Reception",
            Päivämäärä: "10.07.2024",
        },
        {
            id: 2,
            Käynti: language === "fi" ? "Hammaslääkäri" : "Dentist",
            Päivämäärä: "10.06.2023",
        },
        {
            id: 3,
            Käynti: language === "fi" ? "Ortopedia" : "Orthopedics",
            Päivämäärä: "15.11.2024",
        },
        {
            id: 4,
            Käynti: language === "fi" ? "Ortopedia" : "Orthopedics",
            Päivämäärä: "15.11.2024",
        },
        {
            id: 5,
            Käynti: language === "fi" ? "Ortopedia" : "Orthopedics",
            Päivämäärä: "16.11.2024",
        },
        {
            id: 6,
            Käynti: language === "fi" ? "Ortopedia" : "Orthopedics",
            Päivämäärä: "17.11.2024",
        },
        {
            id: 7,
            Käynti: language === "fi" ? "Ortopedia" : "Orthopedics",
            Päivämäärä: "18.11.2024",
        },
    ];

    const handleRowClick = (rowData) => {
        // Navigate to a new page to display visit details
        navigate(`/kaynti/${rowData.id}`);
    };

    return (
        <div className="potilastiedot-container">
            <h1>
                {language === "fi" ? "Potilastiedot" : "Patient Information"}
            </h1>
            <Box className="data-grid-container">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowClick={(params) => handleRowClick(params.row)}
                />
            </Box>
        </div>
    );
}

export default Potilastiedot;
