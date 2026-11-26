'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

interface AbstractObjectProps {
  mouseX: number
  mouseY: number
}

export default function AbstractObject({ mouseX, mouseY }: AbstractObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const targetRotX = useRef(0)
  const targetRotY = useRef(0)

  useFrame(() => {
    if (!meshRef.current) return

    // Continuous slow Y rotation
    targetRotY.current += 0.003

    // Mouse-based subtle parallax tilt
    const parallaxX = mouseY * 0.3
    const parallaxY = mouseX * 0.3

    // Smooth lerp towards target
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotY.current + parallaxY,
      0.05
    )
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      parallaxX,
      0.05
    )
  })

  return (
    <>
      {/* Environment for PBR reflections */}
      <Environment preset="studio" />

      {/* Accent lime point light */}
      <pointLight
        position={[3, 3, 3]}
        color="#C6FF4D"
        intensity={0.5}
      />

      {/* Soft fill light */}
      <ambientLight intensity={0.15} />

      {/* Main directional light */}
      <directionalLight
        position={[-2, 4, 2]}
        intensity={0.8}
        color="#ffffff"
      />

      {/* Torus Knot — main focal object */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.1, 0.35, 256, 32, 3, 2]} />
        <meshStandardMaterial
          color="#888888"
          metalness={1.0}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
    </>
  )
}
