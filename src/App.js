import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

import React from 'react';
import './App.css';


function RotateBox() {
  const meshRef = useRef();

  useFrame (() =>{
    if (meshRef.current){
      meshRef.current.rotation.x += 0
      meshRef.current.rotation.y += 0
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2,2,2]}/>
      <meshStandardMaterial color = "red"/>
   </mesh>
  );
}


function App() {
  return (
    <div className="App" id= "canvas-container">
        <Canvas>
            <RotateBox />
            <ambientLight intensity={0.5}/>
            <directionalLight color={"red"} position={[0,0,20]} />
            <OrbitControls />
        </Canvas >
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />)
export default App;
