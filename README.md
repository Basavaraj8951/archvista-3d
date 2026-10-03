# ARCHVISTA 3D
SEE YOUR HOME. EXPERIENCE THE SPACE.

Run: `npm install && npm run dev`  |  Build: `npm run build`

## Status
- Phases 1-5 done: catalog, 3D exterior, interiors, furniture and products, floor plans, favorites, compare.

## Known gaps
- Walkthrough starts in the Living Room (no outside entrance step).
- Product categories beyond sofas, beds, dining tables, wardrobes and TV units are not in the catalog yet.
- Add real .glb files and images under public/ to replace procedural models and gradient placeholders.

## Assets
Drop real files into `public/models/...` and `public/images/...` using the filenames in `src/data`. Missing files fall back to procedural 3D models, gradients and an SVG floor plan.
