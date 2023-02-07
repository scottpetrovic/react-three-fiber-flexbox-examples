import React, { StrictMode } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';

export default function App() {
  return (  
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/exampleOne" element={<ExampleOne />} />
          <Route path="/exampleTwo" element={<ExampleTwo />} />
          <Route path="*" element={ <Navigate to="/exampleOne" />  } />
        </Routes>
      </BrowserRouter>
    </StrictMode> 
  );
}
