import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

const ParticleField = () => {
  const pointsRef = useRef();
  
  // Criar partículas proceduralmente
  const [positions, colors] = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Distruibuição esférica
      const r = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Cores escuras e azul-gelo profundo
      const isAccent = Math.random() > 0.85;
      const color = new THREE.Color(isAccent ? '#4f86f7' : '#1a202c');
      color.toArray(colors, i * 3);
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Rotação extremamente lenta e pesada
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.01;

    // Parallax minimalista
    const targetX = (state.pointer.x * Math.PI) / 16;
    const targetY = (state.pointer.y * Math.PI) / 16;
    
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetX, 0.01);
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, -targetY, 0.01);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const DataAtom = () => {
  return (
    <div className="absolute bottom-[-30%] left-0 right-0 h-[800px] w-full z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)' }}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }} 
        dpr={[1, 2]} 
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default DataAtom;
