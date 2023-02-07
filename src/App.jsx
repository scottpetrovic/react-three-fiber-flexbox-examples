import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const Scene = () => {
  const scene = useRef();
  useFrame((_state, delta) => {
    scene.current.rotation.x += 0.5 * delta;
    scene.current.rotation.z += 0.5 * delta;
  });
  return (
    <group ref={scene}>
      <Box>
        <meshLambertMaterial color="white" />
      </Box>
    </group>
  );
};

const ExampleOne = () => {
  return (
    <>
     <Navigation />
      <Canvas>
        <ambientLight intensity={0.04} />
        <directionalLight intensity={0.5} color={[0.3, 0.0, 0.0]} />
        <Scene />
        <OrbitControls />
      </Canvas>
    </>
   
  )
}

const ExampleTwo = () => {
  return (
    <>
      <Navigation />
      <Canvas>
        <ambientLight intensity={0.04} />
        <directionalLight intensity={1.5} />
        <Scene />
        <OrbitControls />
      </Canvas>
    </>    
  )
}

const Navigation = () => {
  return (
    <div className="nav-header">
      <a href="/exampleOne" >Example one</a>
      <a href="/exampleTwo" >Example two</a>
    </div>

  )
}


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
