import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { TorusKnot, useAspect, PerspectiveCamera } from "@react-three/drei";

import Navigation from './Navigation';






import { Flex, Box } from '@react-three/flex'


let page_state = {
  top: 0,
  pages: 2,
  scroll_multiplier: 0.02
};


const Scene = () => {
  
  const group = useRef();

  // gets browser window size and top position
  // size.width, size.height, size.top, size.left
  const { size } = useThree(); 

  // returns aspect ratio
  // https://github.com/pmndrs/drei#useaspect
  const [viewport_width, viewport_height] = useAspect(size.width, size.height, 1);
 
  let vec = new THREE.Vector3();

  useFrame((state, delta) => {
    vec = new THREE.Vector3(-viewport_width / 2, page_state.top*page_state.scroll_multiplier, 0.0);
    group.current.position.lerp(vec, 3.0 * delta );
  });

  function flexBoxResized(total_width, total_height) {
    // get the box size of the entire flex box
    // you could use this to make the scrollbars smarter
    //console.log(total_width, total_height);   
  }

    return (   
          <Flex ref={group} 
            flexDirection="row"
            justify="center"
            onReflow={ (total_width, total_height) => flexBoxResized(total_width, total_height) }
            size={[viewport_width, 0, 0]}  wrap="wrap" >
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
              <Box centerAnchor margin={0.8}><TorusMesh /></Box>
            </Flex>     
    );
};

const TorusMesh = () => {
 return (
    // specifying the size/scale with this is important
    // for flexbox calculations try to remove the scale and see what happens
    <TorusKnot scale={[0.5, 0.5, 0.5]} >
      <meshLambertMaterial color="white" />
    </TorusKnot>
  )
}

export default function ExampleOne()  {

  const scrollArea = useRef();

  const onScroll = (e) => {    
    page_state.top = e.target.scrollTop;
  };

  useEffect(() => {
    void onScroll({ target: scrollArea.current }), []  
  });

    return (
      <>
       <Navigation />
        <Canvas onPointerMove={null}>

        {/* The fov attribute reduces the lens distortion at the edges of 
        screen  when it is lower */}
        <PerspectiveCamera makeDefault position={[0,0,27]} fov="20"/>
          <ambientLight intensity={0.04} />
          <directionalLight intensity={0.5} color={[0.3, 0.0, 0.0]} />
          <Scene />
        </Canvas>

        {/* Custom HTML that will simulate a scroll */}
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${page_state.pages * 100}vh` }} />
        </div>
      </>     
    )
}