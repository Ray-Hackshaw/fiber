/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useRef } from "react";
import { Mesh } from "three";
import { Vector3, useFrame } from "@react-three/fiber";
import { useScroll, GradientTexture } from "@react-three/drei";

export const Cube = ({ inputPos }: { inputPos?: Vector3 }) => {
  const meshRef = useRef<Mesh>(null);
  const data = useScroll();

  useFrame(() => {
    if (!meshRef.current) return;
    if (!meshRef.current.rotation) return;
    meshRef.current.rotation.x = 1 + data.range(0, 1);
    meshRef.current.rotation.y = 1 + data.range(0, 1);
  });

  return (
    <mesh ref={meshRef} position={inputPos ?? [2, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={["white", "black"]}
          size={1024}
        />
      </meshBasicMaterial>
    </mesh>
  );
};
