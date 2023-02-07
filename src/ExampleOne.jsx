import { Canvas, useFrame } from "@react-three/fiber";
import Navigation from './Navigation';
import { useRef } from "react";

import { TorusKnot } from "@react-three/drei";

import { Flex, Box } from '@react-three/flex'

const Scene = () => {
    const scene = useRef();
    useFrame((_state, delta) => {
      scene.current.rotation.x += 0.5 * delta;
      scene.current.rotation.z += 0.5 * delta;
    });
    return (
      <group ref={scene}>
        <TorusKnot>
          <meshLambertMaterial color="white" />
        </TorusKnot>
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
        </Canvas>
      </>     
    )
}