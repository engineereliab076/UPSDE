# UPSDE website images

- `photos/` — real UPSDE photography (optimized JPEGs sourced from the
  project-root `photos/` folder). Low-resolution scans are flagged with
  `lowRes: true` in the data files so they render at a smaller size.
- `brand/` — the official UPSDE logo (square crop) and the social-sharing
  (OG) image. The favicon lives at `app/icon.png`.
- `placeholders/` — temporary branded placeholders still used where no real
  photo exists yet (e.g. leadership portraits).

To replace them with real UPSDE photography:

1. Save the real photo with the **same file name** (e.g. `child-support.jpg`).
2. Update the matching `src` path in the `data/` files (`data/programs.ts`,
   `data/projects.ts`, `data/leadership.ts`) or in the page/section component.
3. Keep the same aspect ratios where possible:
   - Hero: 16:10 (e.g. 1600×1000)
   - Program / project images: 3:2 (e.g. 1200×800)
   - Leadership portraits: 1:1 (e.g. 600×600)
   - Social sharing (OG) image: 1200×630
4. Use photos that portray people with dignity, with informed consent,
   and avoid identifying vulnerable children where consent is not documented.
