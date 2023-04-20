import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import Scene from "./Scene";
const WebDesign = () => {
  return (
    <Canvas >
      <Suspense>
        <Scene />
      </Suspense>
      <Environment preset="sunset" background insensity={0.6}/>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  );
};

export default WebDesign;
