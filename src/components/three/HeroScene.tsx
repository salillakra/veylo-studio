"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

type ScreenPointer = { x: number; y: number };

function Sculpture({ pointer }: { pointer: MutableRefObject<ScreenPointer> }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;

    const { x, y } = pointer.current;
    // Keep the sculpture inside its visual frame. The small range prevents
    // the object from drifting into the canvas edge on wide pointer moves.
    const targetX = THREE.MathUtils.clamp(x * 0.12, -0.12, 0.12);
    const targetY = THREE.MathUtils.clamp(y * 0.08, -0.08, 0.08);
    const targetRotationY = THREE.MathUtils.clamp(x * 0.08, -0.08, 0.08);
    const targetRotationX = THREE.MathUtils.clamp(-y * 0.06, -0.06, 0.06);

    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      targetX,
      2.4,
      delta,
    );
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      targetY,
      2.4,
      delta,
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetRotationY,
      2.4,
      delta,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetRotationX,
      2.4,
      delta,
    );
    group.current.rotation.z += delta * 0.08;
  });
  return (
    <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.12}>
      <group ref={group} scale={0.86}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusKnotGeometry args={[1.05, 0.28, 160, 24, 3, 2]} />
          <MeshTransmissionMaterial
            backside
            thickness={0.4}
            chromaticAberration={0.08}
            anisotropy={0.2}
            roughness={0.16}
            metalness={0.84}
            color="#d4e9ad"
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]} scale={0.72}>
          <torusGeometry args={[1.42, 0.025, 12, 80]} />
          <meshBasicMaterial color="#c6ff4d" transparent opacity={0.65} />
        </mesh>
        <mesh position={[0, 0, -0.7]} scale={0.08}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#c6ff4d" />
        </mesh>
      </group>
    </Float>
  );
}

function StaticFallback() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 h-[min(32vw,420px)] w-[min(32vw,420px)] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-lime/30" />
      <div className="absolute left-1/2 top-1/2 h-[min(22vw,290px)] w-[min(22vw,290px)] -translate-x-1/2 -translate-y-1/2 rotate-[22deg] border border-white/25" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_40px_12px_rgba(198,255,77,.35)]" />
    </div>
  );
}

function WebGLScene({ pointer }: { pointer: MutableRefObject<ScreenPointer> }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4.8], fov: 42 }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 2, 3]} color="#c6ff4d" intensity={5} />
      <pointLight position={[-3, -2, 1]} color="#f1f0eb" intensity={3} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Sculpture pointer={pointer} />
      </Suspense>
    </Canvas>
  );
}

export default function HeroScene() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const pointer = useRef<ScreenPointer>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    const resetPointer = () => {
      pointer.current.x = 0;
      pointer.current.y = 0;
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("blur", resetPointer);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("blur", resetPointer);
    };
  }, []);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      setSupported(
        Boolean(
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
        ),
      );
    } catch {
      setSupported(false);
    }
  }, []);
  if (supported === false) return <StaticFallback />;
  return (
    <div ref={ref} className="h-full w-full">
      {supported === null ? (
        <StaticFallback />
      ) : (
        <WebGLScene pointer={pointer} />
      )}
    </div>
  );
}
