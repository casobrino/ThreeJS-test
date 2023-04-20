import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";
import Scene from "./Scene";

const Development = () => {
  return (
    <Canvas  >
      <Suspense>
        {/* <Stage environment="city" intensity={0.6}> */}
          <Scene light />
        {/* </Stage> */}
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
