"use client";

import { SplineClient } from "@/components/client/spline-client";
import { Spinner } from "@/components/ui/spinner";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { cn } from "@/lib/utils/cn";
import { Rotate3D } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [helperVisible, setHelperVisible] = useState(false);
    const [helperShown, setHelperShown] = useLocalStorage(
        "spline-helper-shown",
        false,
    );

    const [sceneLoading, setSceneLoading] = useState(true);

    const handleHelperShown = () => {
        setHelperVisible(false);
        setHelperShown(true);
    };

    const showHelper = () => {
        setHelperVisible(true);

        setTimeout(() => {
            handleHelperShown();
        }, 5000);
    };

    return (
        <div className="relative h-full w-full">
            <SplineClient
                className={cn(
                    "transition-opacity duration-1000",
                    sceneLoading && "opacity-0",
                )}
                onMouseDownCapture={() => {
                    handleHelperShown();
                }}
                onStart={() => {
                    setSceneLoading(false);

                    if (!helperShown) {
                        showHelper();
                    }
                }}
                onTouchStart={() => {
                    handleHelperShown();
                }}
                scene="https://prod.spline.design/xlETKwKKBIzdpYg7/scene.splinecode"
            />
            <div
                className={cn(
                    "pointer-events-none absolute inset-x-0 top-10 flex flex-col items-center justify-start gap-3 transition-opacity duration-1000",
                    !helperVisible && "opacity-0",
                )}
            >
                <Rotate3D className="text-xl" size={32} />
                <p className="text-lg font-semibold">Click and drag to orbit</p>
            </div>
            {sceneLoading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <Spinner className="text-xl" />
                    <p className="text-lg font-semibold">Loading scene</p>
                </div>
            ) : null}
        </div>
    );
}
