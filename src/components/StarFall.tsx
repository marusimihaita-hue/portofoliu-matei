"use client";

import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";
import Particles from "./3D/Particles";

const StarFall = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative">
            {children}
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            >
                <Particles count={300} />
            </Canvas>
        </div>
    );
};
export default StarFall;
