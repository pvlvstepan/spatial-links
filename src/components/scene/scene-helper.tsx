import { cn } from "@/lib/utils/cn";
import { Rotate3D } from "lucide-react";

interface SceneHelperProps {
    helperVisible?: boolean;
}

export function SceneHelper({ helperVisible }: SceneHelperProps) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-x-0 top-10 flex flex-col items-center justify-start gap-3 transition-opacity duration-1000",
                !helperVisible && "opacity-0",
            )}
        >
            <Rotate3D className="text-xl" size={32} />
            <p className="text-lg font-semibold">Click and drag to orbit</p>
        </div>
    );
}
