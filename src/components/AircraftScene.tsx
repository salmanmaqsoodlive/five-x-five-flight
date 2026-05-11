'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function WireframeAircraft() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t * 0.3) * 0.4
    group.current.rotation.z = Math.sin(t * 0.2) * 0.05
    group.current.position.y = Math.sin(t * 0.5) * 0.1
  })

  return (
    <group ref={group}>
      {/* Fuselage */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.3, 2.5, 8]} />
        <meshBasicMaterial color="#00ff88" wireframe />
      </mesh>
      {/* Nose cone */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.15, 0.7, 8]} />
        <meshBasicMaterial color="#00ff88" wireframe />
      </mesh>
      {/* Main wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.08, 3.2, 0.6]} />
        <meshBasicMaterial color="#00d4ff" wireframe />
      </mesh>
      {/* Tail horizontal */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.06, 1.2, 0.35]} />
        <meshBasicMaterial color="#00ff88" wireframe />
      </mesh>
      {/* Tail vertical */}
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[0.06, 0.7, 0.5]} />
        <meshBasicMaterial color="#00ff88" wireframe />
      </mesh>
      {/* Engine nacelle left */}
      <mesh position={[-0.8, 0.1, 0.1]}>
        <cylinderGeometry args={[0.12, 0.1, 0.5, 8]} />
        <meshBasicMaterial color="#ff3333" wireframe />
      </mesh>
      {/* Engine nacelle right */}
      <mesh position={[0.8, 0.1, 0.1]}>
        <cylinderGeometry args={[0.12, 0.1, 0.5, 8]} />
        <meshBasicMaterial color="#ff3333" wireframe />
      </mesh>
    </group>
  )
}

function Grid() {
  const ref = useRef<THREE.GridHelper>(null)
  useFrame(({ clock }) => {
    if (ref.current) ref.current.position.z = (clock.getElapsedTime() * 0.3) % 1
  })
  return <gridHelper ref={ref} args={[20, 20, '#00ff8822', '#00ff8811']} position={[0, -2.5, 0]} />
}

export default function AircraftScene() {
  return (
    <Canvas camera={{ position: [3, 1.5, 5], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00ff88" intensity={0.8} />
      <pointLight position={[-5, 3, -2]} color="#0066ff" intensity={0.4} />
      <WireframeAircraft />
      <Grid />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
