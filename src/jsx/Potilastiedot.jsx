import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "../css/Potilastiedot.css";

function Potilastiedot({ language }) {
    const navigate = useNavigate();

    // Function to handle language translation for certain fields
    const translate = (text, lang) => {
        const translations = {
            reception: { fi: "Vastaanotto", en: "Reception" },
            dentist: { fi: "Hammaslääkäri", en: "Dentist" },
            orthopedics: { fi: "Ortopedia", en: "Orthopedics" },
        };

        return translations[text]?.[lang] || text;
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
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
            Käynti: translate("reception", language),
            Päivämäärä: "10.07.2024",
        },
        {
            id: 2,
            Käynti: translate("dentist", language),
            Päivämäärä: "10.06.2023",
        },
        {
            id: 3,
            Käynti: translate("orthopedics", language),
            Päivämäärä: "15.11.2024",
        },
        {
            id: 4,
            Käynti: translate("orthopedics", language),
            Päivämäärä: "15.11.2024",
        },
        {
            id: 5,
            Käynti: translate("orthopedics", language),
            Päivämäärä: "16.11.2024",
        },
        {
            id: 6,
            Käynti: translate("orthopedics", language),
            Päivämäärä: "17.11.2024",
        },
        {
            id: 7,
            Käynti: translate("orthopedics", language),
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
                            paginationModel: { pageSize: 10 },
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
