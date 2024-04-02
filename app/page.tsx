/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useRef } from "react";
import { Group, Mesh, Object3D } from "three";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import {
  useFBO,
  useGLTF,
  useScroll,
  Text,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { easing } from "maath";

function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    if (!meshRef.current.rotation) return;

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Images() {
  // this needs a type
  const group = useRef(null);
  const data = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  useFrame(() => {
    if (!group.current) return;
    group.current.children[0].material = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height]} url="/img1.jpg" />
      <Image position={[2, 0, 3]} scale={3} url="/img6.jpg" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3]} url="/trip2.jpg" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2]} url="/img8.jpg" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/trip4.jpg" />
      <Image
        position={[0, -height * 1.5, 7.5]}
        scale={[1.5, 3]}
        url="/img3.jpg"
      />
      <Image
        position={[0, -height * 2 - height / 4, 2]}
        scale={[width, height / 1.1]}
        url="/img7.jpg"
      />
    </group>
  );
}

export default function Home() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
      <Cube />

      <ScrollControls damping={0.2} pages={3} distance={0.5}>
        {/* <Lens> */}
        <Scroll>
          {/* <Typography /> */}
          <Images />
        </Scroll>
        <Scroll html>
          <div style={{ transform: "translate3d(65vw, 192vh, 0)" }}>
            Taken from pmdrs example
            <br />
            bronze, 38 cm
            <br />
            CHF 59.95
            <br />
          </div>
        </Scroll>
        {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
               to jank as you scroll down. With <Preload> that's solved.  */}
        <Preload />
        {/* </Lens> */}
      </ScrollControls>
    </Canvas>
  );
}
