"use client";
import React, { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import { useThree, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import threeGlobe from "three-globe";

const GlobeComponent = () => {
  const { scene } = useThree();

  useEffect(() => {
    const globe = new threeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    })
      .hexPolygonsData([])
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(true)
      .atmosphereColor("#3b82f6")
      .atmosphereAltitude(0.25);

    globe.rotation.y = -Math.PI * 0.5;

    const globeMaterial = globe.globeMaterial();
    globeMaterial.color = new Color(0x1e293b);
    globeMaterial.emissive = new Color(0x1e293b);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.9;

    scene.add(globe);

    const arcsData = [
      {
        startLat: 23.8103,
        startLng: 90.4125,
        endLat: 34.0522,
        endLng: -118.2437,
        color: "rgba(59, 130, 246, 0.5)",
      },
      // ... more arcs
    ];

    const pointsData = [
        { lat: 23.8103, lng: 90.4125, size: 0.1, color: "#3b82f6" },
        { lat: 34.0522, lng: -118.2437, size: 0.1, color: "#3b82f6" },
    ]

    globe
      .arcsData(arcsData)
      .arcColor("color")
      .arcDashLength(0.4)
      .arcDashGap(0.6)
      .arcDashAnimateTime(2000)
      .arcAltitude(0.5)
      .arcStroke(0.5)
      .pointsData(pointsData)
      .pointColor("color")
      .pointAltitude(0)
      .pointRadius(0.25);

    return () => {
      scene.remove(globe);
    };
  }, [scene]);

  return <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} enableRotate={false} />;
};

export const Globe = () => (
  <Canvas>
    <ambientLight color="#ffffff" intensity={0.5} />
    <directionalLight color="#ffffff" position={new Vector3(1, 1, 1)} intensity={0.8} />
    <GlobeComponent />
  </Canvas>
);
