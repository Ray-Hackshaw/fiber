/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useRef } from "react";
import { Group, Mesh } from "three";
import { Canvas, Vector3, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  ImageProps,
} from "@react-three/drei";
import { Cube } from "@/src/components/Cube";

// https://codesandbox.io/p/sandbox/scrollcontrols-and-lens-refraction-forked-zhnqkr?file=%2Fsrc%2Fstyles.css%3A29%2C1

interface ImageEntry {
  position?: Vector3;
  scale: number | [number, number];
  url: string;
}

const Images = () => {
  const group = useRef<Group>(null);
  const data = useScroll();
  const { width, height } = useThree((state) => state.viewport);

  const imageArray: ImageEntry[] = [
    {
      position: [-2, 0, 2],
      scale: [4, height],
      url: "/img1.jpg",
    },
    {
      position: [2, 0, 3],
      scale: 3,
      url: "/img6.jpg",
    },
    {
      position: [-2.05, -height, 6],
      scale: [1, 3],
      url: "/trip2.jpg",
    },
    {
      position: [-0.6, -height, 9],
      scale: [1, 2],
      url: "/img8.jpg",
    },
    {
      position: [0.75, -height, 10.5],
      scale: 1.5,
      url: "/trip4.jpg",
    },
    {
      position: [0, -height * 1.5, 7.5],
      scale: [1.5, 3],
      url: "/img3.jpg",
    },
    {
      position: [0, -height * 2 - height / 4, 2],
      scale: [width, height / 1.1],
      url: "/img7.jpg",
    },
  ];

  useFrame(() => {
    if (!group.current) return;

    group.current.children.forEach((child, i) => {
      if (child instanceof Mesh) {
        const castChild = child.material as ImageProps;

        switch (i) {
          case 2:
            castChild.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
            break;
          case 3:
            castChild.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
            break;
          case 4:
            castChild.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
            break;
          case 5:
            castChild.grayscale = 1 - data.range(1.6 / 3, 1 / 3);
            break;
          case 6:
            castChild.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
            break;
          default:
            castChild.zoom = 1 + data.range(0, 1 / 3) / 3;
            break;
        }
      }
    });
  });
  return (
    <group ref={group}>
      {imageArray.map((x) => (
        <Image key={x.url} position={x.position} scale={x.scale} url={x.url} />
      ))}
    </group>
  );
};

const cubesArray = [
  {
    position: [-2, 0, 0],
  },
  {
    position: [3, 0.5, 0],
  },
  {
    position: [0, 2, 0],
  },
  {
    position: [4, -3, 0],
  },
  {
    position: [1, -2, 0],
  },
  {
    position: [-4, -3, 0],
  },
];

const Home = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
      <ScrollControls damping={0.3} pages={3}>
        {/* {cubesArray.map((cube, i) => (
          <Cube key={i} inputPos={cube.position as Vector3} />
        ))} */}
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <div
            style={{ transform: "translate3d(60vw, 85vh, 5vh)" }}
            className="text-3xl"
          >
            CubDesign - Bespoke 3D Digital Design Portfolio
            <br />
          </div>
          <div style={{ transform: "translate3d(65vw, 192vh, 0)" }}>
            Taken from pmdrs example
            <br />
            bronze, 38 cm
            <br />
            CHF 59.95
            <br />
          </div>
        </Scroll>
        <Preload />
      </ScrollControls>
    </Canvas>
  );
};

export default Home;
