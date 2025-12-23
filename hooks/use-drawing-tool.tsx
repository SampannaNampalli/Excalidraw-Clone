"use client";

import { DrawnElementType, ShapeType } from "@/types";
import { useCanvasState } from "./use-canvas-state";

export const useDrawingTool = (shapeType: ShapeType) => {
    const { dispatch, elements, getScaledCoordinates } = useCanvasState();

    const handleMouseDown = (e: React.MouseEvent) => {
        const { x, y } = getScaledCoordinates(e.clientX, e.clientY);
        const newElement: DrawnElementType = {
            id: elements.length,
            x1: x,
            y1: y,
            x2: x,
            y2: y,
            roughElement: undefined,
        };
        dispatch({ type: "ADD_ELEMENT", element: newElement });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const { x, y } = getScaledCoordinates(e.clientX, e.clientY);
        const lastElement = elements[elements.length - 1];
        dispatch({ type: "UPDATE_ELEMENT", id: lastElement.id, updates: { x2: x, y2: y } });
    };

    return { handleMouseDown, handleMouseMove };
};
