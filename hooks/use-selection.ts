"use client";

import { useCanvasState } from "./use-canvas-state";

export const useSelectionTool = () => {
    const { dispatch, getScaledCoordinates } = useCanvasState();

    const handleMouseDown = (e: React.MouseEvent) => {
        const { x, y } = getScaledCoordinates(e.clientX, e.clientY);
        // TODO: implement hit detection; currently clear selection
        dispatch({ type: "SELECT_ELEMENT", id: null });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        // Placeholder: selection move not implemented yet
        return;
    };

    return { handleMouseDown, handleMouseMove };
};
