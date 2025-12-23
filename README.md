# Excalidraw-Style Canvas (Next.js + Recoil)

## Problem → Action → Result (student lens)
- **Problem**: I wanted to learn how tools like Excalidraw combine React, canvas rendering, and state management to build a fluid diagramming experience (freehand, shapes, text, pan/zoom, undo/redo) without getting lost in a huge codebase.
- **Action**: Built this focused clone with the modern Next.js app router, Recoil for shared UI state, Tailwind for styling, and RoughJS/perfect-freehand for sketchy strokes. I studied how how tools are wired to drawing logic in the canvas component and supporting hooks.
- **Result**: I was able to get the final product I wanted, a working whiteboard: draw rectangles/circles/lines/arrows, freehand sketch, type text, pick colors, adjust stroke width/style, pan/zoom, select/move/resize, and undo/redo changes, while also gaining practical insight into how Excalidraw-like apps are architected and built.

## Features
- Freehand drawing with smooth strokes (perfect-freehand) and sketchy shapes (RoughJS).
- Tools: select, pan, pencil, rectangle, circle, line, arrow, text, eraser.
- Styling: stroke color/width/style, fill/background for shapes, font size/family and alignment for text.
- Canvas interactions: selection box, move/resize handles, panning, zoom controls, cursor feedback per tool.
- History: undo/redo with stable element IDs; erasing by hit-testing.
- UI: floating toolbar and context menu for active tool options (color, stroke, font).

## Tech Stack
- Next.js 14 (App Router) + React 18 + TypeScript.
- Styling: Tailwind CSS, tailwind-merge, tailwindcss-animate.
- State: Recoil atoms/selectors for tool, cursor, colors, fonts, and stroke settings.
- Drawing: RoughJS for shapes, perfect-freehand for pencil strokes, native canvas for rendering.
- UI building blocks: Radix primitives and lucide-react icons.

## Project Layout (high-signal files)
- Entry & layout: [app/(main)/page.tsx](app/(main)/page.tsx), [app/layout.tsx](app/layout.tsx), [app/globals.css](app/globals.css).
- Canvas shell: [app/_components/canvas-wrapper.tsx](app/_components/canvas-wrapper.tsx) mounts the toolbar, tool menu, and canvas.
- Core rendering & interactions: [app/_components/canvas.tsx](app/_components/canvas.tsx) handles drawing, selection, resizing, panning, zooming, and text editing.
- Toolbars & menus: [components/toolbar](components/toolbar) (tool buttons) and [components/toolbar-menu](components/toolbar-menu) (color/stroke/font pickers).
- UI controls: color/background/stroke/font pickers under [components](components), plus zoom and undo/redo controls.
- State: Recoil atoms in [state.ts](state.ts); shared types in [types.ts](types.ts).
- Drawing helpers: geometry and rendering utilities in [lib/utils.ts](lib/utils.ts).
- Hooks: panning, freehand, shape drawing, tool switching, undo/redo, and selection under [hooks](hooks).

## Getting Started
1. **Install** (Node 18.17+ recommended): `npm install`
2. **Run dev server**: `npm run dev` (http://localhost:3000)
3. **Lint**: `npm run lint`

If `npm run dev` fails, ensure Node is up to date and the lockfile is consistent; reinstall deps if needed.

## How it Works (quick tour)
- The toolbar sets the active `tool` and cursor state (Recoil). Tool-specific options (colors, stroke, font) render in the floating menu.
- The canvas component listens for pointer events, converts screen coords to canvas space (considering pan/zoom), and uses helper hooks to draw shapes or freehand paths.
- Elements are stored with stable IDs; hit-testing finds the item under the cursor for selection, movement, resizing, or erasing.
- Undo/redo is implemented by pushing immutable snapshots of the element list while drawing.
- Text input is handled via an overlayed textarea positioned at the click point, then baked into the canvas elements list on blur.

## Learning Path for Students that I followed
1. **Read the canvas flow**: Start with [app/_components/canvas.tsx](app/_components/canvas.tsx) to see how mouse events map to draw/select/resize/pan actions.
2. **Study state management**: Open [state.ts](state.ts) and related hooks in [hooks](hooks) to see how tool and style choices propagate through the UI.
3. **Inspect utilities**: Review [lib/utils.ts](lib/utils.ts) for hit-testing, coordinate transforms, and resize math.
4. **Tweak tools**: Add a new shape or cursor style by extending the toolbar config and draw handlers.
5. **Style experiments**: Adjust Tailwind classes in toolbar and picker components to understand responsive UI patterns.

## What to Build Next (practice ideas)
- Add multi-select and group/ungroup.
- Export/import to JSON and PNG.
- Keyboard shortcuts for tools and undo/redo.
- Collaborative cursor ghosts using a lightweight backend.
- Snap-to-grid or alignment guides.

## License
MIT
