import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import WeatherProvider from './Context/WeatherProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </BrowserRouter>
    </ChakraProvider>
      </React.StrictMode>
);


reportWebVitals();
