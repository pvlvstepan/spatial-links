import { Spinner } from "@/components/ui/spinner";

export function SceneLoader() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <Spinner className="text-xl" />
            <p className="text-lg font-semibold">Loading scene</p>
        </div>
    );
}
