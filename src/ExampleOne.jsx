import { Canvas, useFrame } from "@react-three/fiber";
import Navigation from './Navigation';
import { useRef } from "react";
import { Box, OrbitControls } from "@react-three/drei";

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

export default function ExampleOne()  {

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