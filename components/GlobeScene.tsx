"use client"

import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
// 1. Impor <Bounds>
import { OrbitControls, useGLTF, Preload, Bounds } from '@react-three/drei'

// Ini adalah komponen Model yang akan me-load file .glb Anda
function Model() {
  const { scene } = useGLTF('/3d.glb')
  
  // 4. Hapus 'scale' manual. Biarkan <Bounds> yang mengatur.
  return <primitive object={scene} position-y={0} rotation-y={0} />
}

// Ini adalah Komponen Scene utama
function GlobeScene() {
  const controlsRef = useRef<any>(null);
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      // 2. Hapus prop 'camera' manual. Biarkan <Bounds> yang mengontrol.
      style={{ width: '100%', height: '100%' }}
    >
      {/* Suspense adalah "Loading..." dari React untuk model 3D */}
      <Suspense fallback={null}>
        {/* Lampu dasar agar model tidak gelap total */}
        <ambientLight intensity={1.5} />

        {/* 3. Bungkus Model dengan <Bounds> */}
        {/* Ini akan secara otomatis memusatkan dan menyesuaikan zoom kamera */}
        <Bounds fit clip observe>
          <Model />
        </Bounds>
        
        {/* Kontrol untuk memutar model dengan mouse */}
        <OrbitControls
          ref={controlsRef}
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onStart={() => { if (controlsRef.current) (controlsRef.current as any).autoRotate = false; }}
          onEnd={() => { if (controlsRef.current) (controlsRef.current as any).autoRotate = true; }}
        />
        
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default GlobeScene