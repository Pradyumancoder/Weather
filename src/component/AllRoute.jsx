import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import WeatherApp from "../Pages/WeatherApp";
import SearchForm from "../Pages/SearchForm";

const AllRoute = () => {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<SearchForm />} />
                <Route path="/weatherapp" element={<WeatherApp />} />
            </Routes>
        </Box>
    );
};
export default AllRoute;
