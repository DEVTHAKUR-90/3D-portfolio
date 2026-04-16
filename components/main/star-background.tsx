"use client";

import {
  Points,
  PointMaterial,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, Suspense, useMemo } from "react";
import type { Points as PointsType } from "three";

// Generate sphere positions manually — avoids maath NaN bug entirely
function generateSpherePositions(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Use rejection sampling for uniform distribution in sphere
    let x: number, y: number, z: number;
    do {
      x = (Math.random() * 2 - 1) * radius;
      y = (Math.random() * 2 - 1) * radius;
      z = (Math.random() * 2 - 1) * radius;
    } while (x * x + y * y + z * z > radius * radius);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

const StarBackground = () => {
  const ref = useRef<PointsType | null>(null);
  const positions = useMemo(() => generateSpherePositions(1500, 1.2), []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={positions}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
