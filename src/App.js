import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import "./styles.css";
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

export default function App() {
  return (
    <>
    <Canvas>
      <ambientLight intensity={0.04} />
      <directionalLight intensity={0.5} />
      <Scene />
      <OrbitControls />
    </Canvas>
    </>
    
  );
}
