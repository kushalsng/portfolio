import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Preload, Sphere, TorusKnot } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Shapes = () => {
    return (
        <>
            {/* Main floating sphere with distortion */}
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                <ambientLight intensity={0.25} />
                <directionalLight position={[0, 0, 0.05]} />
                <mesh position={[0, 0, 0]} scale={2.5}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        color="#5e5eff"
                        attach="material"
                        distort={0.5}
                        speed={2}
                    />
                </mesh>
            </Float>

            {/* Floating Torus Knot in background */}
            <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[3, -1, -2]} scale={0.8}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshStandardMaterial color="#915eff" roughness={0.5} />
                </mesh>
            </Float>

            {/* Small floating sphere */}
            <Float speed={3} rotationIntensity={1.5} floatIntensity={2.5}>
                <mesh position={[-3, 2, -3]} scale={0.5}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
                </mesh>
            </Float>
        </>
    );
};

const ShapesCanvas = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 10], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full h-full"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Shapes />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default ShapesCanvas;
