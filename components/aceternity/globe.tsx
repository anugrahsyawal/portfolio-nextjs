"use client";
import React, { useEffect, useState } from "react";
import { Color, Vector3 } from "three";
import { useThree, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// Note: three-globe is dynamically imported below to prevent SSR issues.

const GlobeComponent = () => {
  // State to hold the globe instance once it's created on the client.
  const [globeInstance, setGlobeInstance] = useState<any | null>(null);

  useEffect(() => {
    // This effect runs only on the client side.
    import("three-globe").then((threeGlobeModule) => {
      const ThreeGlobe = threeGlobeModule.default;

      // Create and configure the globe instance.
      const globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
      })
        .hexPolygonsData([])
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(true)
        .atmosphereColor("#3b82f6") // Electric Blue
        .atmosphereAltitude(0.25);

      // Configure globe material for the 'Cyber Glow Dark Mode' aesthetic.
      const globeMaterial = globe.globeMaterial();
      globeMaterial.color = new Color(0x1e293b); // Dark Navy Base
      globeMaterial.emissive = new Color(0x101827);
      globeMaterial.emissiveIntensity = 0.1;
      globeMaterial.shininess = 0.9;

      globe.rotation.y = -Math.PI * 0.5;

      // Configure arcs.
      const arcsData = [
        { startLat: 23.8103, startLng: 90.4125, endLat: 34.0522, endLng: -118.2437, color: "rgba(59, 130, 246, 0.5)" },
      ];
      globe.arcsData(arcsData)
        .arcColor("color")
        .arcDashLength(0.4)
        .arcDashGap(0.6)
        .arcDashAnimateTime(2000)
        .arcAltitude(0.5)
        .arcStroke(0.5);

      // Configure points.
      const pointsData = [
          { lat: 23.8103, lng: 90.4125, size: 0.1, color: "#3b82f6" },
          { lat: 34.0522, lng: -118.2437, size: 0.1, color: "#3b82f6" },
      ];
      globe.pointsData(pointsData)
        .pointColor("color")
        .pointAltitude(0)
        .pointRadius(0.25);

      // Set the fully configured globe instance into state to trigger a re-render.
      setGlobeInstance(globe);
    });
  }, []); // Empty dependency array ensures this runs only once.

  const { camera } = useThree();
  useEffect(() => {
    // Set the initial camera position to ensure the globe is visible.
    camera.position.z = 400;
  }, [camera]);

  // Render the globe instance declaratively using <primitive> only when it exists.
  return globeInstance ? (
    <>
      <primitive object={globeInstance} />
      <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} enableRotate={false} />
    </>
  ) : null;
};

// Main export that sets up the React Three Fiber Canvas.
export const Globe = ({ className }: { className?: string }) => (
  <Canvas className={className}>
    <ambientLight color="#ffffff" intensity={0.5} />
    <directionalLight color="#ffffff" position={new Vector3(1, 1, 1)} intensity={0.8} />
    <GlobeComponent />
  </Canvas>
);
