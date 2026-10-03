# ARCHVISTA 3D
SEE YOUR HOME. EXPERIENCE THE SPACE.

React 18, Vite 5, Tailwind 3, Three.js, @react-three/fiber, drei, Framer Motion (installed, little used), React Router 6, Lucide.

## Run
`npm install`, then `npm run dev`. Production: `npm run build` and `npm run preview`.

## Features
20-house catalog with search, filters, sort; house details with SVG floor plans; 3D exterior and interiors (9 rooms), Enter Home camera transition, camera presets, day/night, auto rotate, fullscreen;
interior packages with paint, flooring, ceiling, lighting, curtains and accent material; furniture catalog (sofas, beds, dining tables, wardrobes, TV units), View in Room slots, Shop This Room;
favorites (houses, rooms, packages, products), compare (3 each), recently viewed, saved designs, request-design and contact forms (stored in LocalStorage), mobile bottom controls,
step-by-step walkthrough (Exterior, Entrance, rooms) with previous, next, pause and exit. Heavy pages are lazy-loaded.

## Assets and fallbacks
Optional real models: `public/models/{houses,rooms,furniture,products}/*.glb` (names in `src/data`). None are included. A missing or failing file falls back to a procedural model; the app does not crash.
Images go in `public/images/...`; missing images show a colour block. Floor plans use `public/images/floorplans/<house-id>-<floor>.png` or a generated SVG.

## Known limitations
Not verified by an automated build in the authoring environment; run `npm install && npm run build` yourself. Furniture catalog lacks chairs, coffee tables, side tables, lighting and decor products.
Rooms are separate scenes, not placed inside the house model. Floor plan has no zoom control. No keyboard camera shortcuts. No error banner for a corrupt GLB (it silently uses the preview model).
