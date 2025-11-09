"use client"

import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload, Bounds } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib' // ✅ impor tipe OrbitControls

function Model() {
  const { scene } = useGLTF('/3d.glb')
  return <primitive object={scene} position-y={0} rotation-y={0} />
}

function GlobeScene() {
  // ✅ beri tipe ref sesuai instance asli OrbitControls
  const controlsRef = useRef<OrbitControlsImpl | null>(null)

  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />

        <Bounds fit clip observe margin={1}>
          <Model />
        </Bounds>

        <OrbitControls
          ref={controlsRef}
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onStart={() => {
            if (controlsRef.current) controlsRef.current.autoRotate = false
          }}
          onEnd={() => {
            if (controlsRef.current) controlsRef.current.autoRotate = true
          }}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default GlobeScene
