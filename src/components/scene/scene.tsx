"use client";

import { SceneHelper } from "./scene-helper";
import { SceneLoader } from "./scene-loader";
import { SplineClient } from "@/components/client/spline-client";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

export function Scene() {
    const [helperVisible, setHelperVisible] = useState(false);
    const [helperShown, setHelperShown] = useLocalStorage(
        "scene-helper-shown",
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
        <>
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
            <SceneHelper helperVisible={helperVisible} />
            {sceneLoading ? <SceneLoader /> : null}
        </>
    );
}