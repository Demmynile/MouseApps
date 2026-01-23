'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#D4DAFF"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.4}
          metalness={0.3}
          opacity={0.6}
          transparent={true}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedSphere2() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <Sphere args={[1, 100, 200]} scale={1.8} position={[3, -1, -2]}>
        <MeshDistortMaterial
          color="#B8C5FF"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.5}
          metalness={0.2}
          opacity={0.5}
          transparent={true}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedSphere3() {
  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
      <Sphere args={[1, 100, 200]} scale={1.5} position={[-3, 1, -1]}>
        <MeshDistortMaterial
          color="#D4DAFF"
          attach="material"
          distort={0.3}
          speed={1.8}
          roughness={0.45}
          metalness={0.25}
          opacity={0.55}
          transparent={true}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={0.6} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.4} color="#9CA3FF" />
          <pointLight position={[10, 10, 5]} intensity={0.3} color="#D4DAFF" />
          
          <AnimatedSphere />
          <AnimatedSphere2 />
          <AnimatedSphere3 />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
