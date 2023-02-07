import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';

export default function App() {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/exampleOne" element={<ExampleOne />} />
        <Route path="/exampleTwo" element={<ExampleTwo />} />
        <Route path="*" element={ <Navigate to="/exampleOne" />  } />
      </Routes>
    </BrowserRouter>
  );
}
