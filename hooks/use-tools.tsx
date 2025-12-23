import { CursorStateType, ToolType } from "@/types";
import React, { useMemo, useState } from "react";

type ToolHandler = {
    handleMouseDown: (e: React.MouseEvent) => void;
    handleMouseMove: (e: React.MouseEvent) => void;
    handleMouseUp: (e: React.MouseEvent) => void;
    handleResizeStart: (e: React.MouseEvent) => void;
};

export const useTools = () => {
    const [activeTool, setActiveTool] = useState<ToolType>("select");
    const [cursor, setCursor] = useState<CursorStateType>("default");

    const toolToCursorConfig: Record<ToolType, CursorStateType> = {
        select: "default",
        pan: "grab",
        text: "text",
        line: "crosshair",
        rectangle: "crosshair",
        circle: "crosshair",
        arrow: "crosshair",
        draw: "crosshair",
        erase: "not-allowed",
    };

    const selectTool = (tool: ToolType) => {
        setActiveTool(tool);
        setCursor(toolToCursorConfig[tool]);
    };

    // Placeholder handler object so downstream hooks have a stable shape even before
    // tool-specific handlers are implemented.
    const toolHandler = useMemo<ToolHandler>(
        () => ({
            handleMouseDown: () => {},
            handleMouseMove: () => {},
            handleMouseUp: () => {},
            handleResizeStart: () => {},
        }),
        []
    );

    return { activeTool, cursor, selectTool, toolHandler };
};
