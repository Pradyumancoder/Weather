import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { WeatherContext } from "../Context/WeatherProvider"; // Import the context provider
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TfiLocationPin } from "react-icons/tfi";

const WeatherApp = () => {
    const { weather } = useContext(WeatherContext); // Access the weather data from the context provider

    return (
        <Box className="mainContainer">
            {weather.main && ( // Render the component only if weather data exists
                <Box bg="white" borderRadius="1rem">
                    <Box fontSize="25px" color="skyblue" bg="white" p="4">
                        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                            <BiArrowBack style={{ background: "white" }} />
                            <Text bg="white"> Weather App </Text>
                        </Link>
                    </Box>
                    <hr />
                    <Box className="icon" bg="white">
                        <img
                            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} // Display the weather icon from the API
                            alt={weather.weather[0].description}
                        />
                    </Box>
                    <Text className="temperature">{Math.round(weather.main.temp)}°C</Text> // Display the temperature
                    <Box bg="white" pb="10px" display="flex">
                        <TfiLocationPin style={{ background: "white" }} /> {weather.name},{" "}
                        {weather.sys.country} // Display the location name and country
                    </Box>
                    <hr />
                    <Flex bg="white" justify="space-evenly">
                        <Box className="feels_like">
                            <Flex bg="white">
                                <FaTemperatureHigh
                                    style={{ background: "white" }}
                                    fontSize="3rem"
                                />
                                <Text bg="white" fontSize="2xl">
                                    {Math.round(weather.main.feels_like)}°C{" "}
                                    <Text bg="white" fontSize="sm" display="block">
                                        Feels like
                                    </Text>
                                </Text>
                            </Flex>
                        </Box>
                        <hr style={{ border: "1px solid gray", height: "5rem" }} />
                        <Box className="humidity">
                            <Flex bg="white">
                                <WiHumidity style={{ background: "white" }} fontSize="3rem" />
                                <Text bg="white" fontSize="2xl">
                                    {weather.main.humidity}%{" "}
                                    <Text bg="white" fontSize="sm" display="block">
                                        Humidity
                                    </Text>
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            )}
        </Box>
    );
};
export default WeatherApp;
