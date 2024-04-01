"use client";
import { Canvas } from "@react-three/fiber";

export default function MyCanvas({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

// is this working
