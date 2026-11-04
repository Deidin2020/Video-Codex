# Remotion video

A TypeScript and React starter with a deterministic, animated three-second
`TestScene` composition: 1920×1080, 30 FPS, 90 frames. It uses local system fonts
and CSS shapes, so rendering needs no remote assets or API credentials.

## Develop

Use Node.js 22 or newer and npm. From this repository:

```sh
cd video
npm ci
npm start
```

Open the Studio address printed by the command and select `TestScene`. Edit
`src/Root.tsx` to change the scene or composition settings. `src/index.ts` registers
the root with Remotion.

## Validate and export

```sh
npm run typecheck
npm run build
npm run render
npm run still
```

The MP4 is written to `out/test-scene.mp4` (H.264, yuv420p); the still is
`out/test-scene.png`. Generated outputs and dependencies are ignored by Git.
Rendering defaults to two workers to limit memory use. Additional CLI flags can
be appended after `--`.

Remotion downloads Chrome Headless Shell on the first render. Linux hosts also
need Chrome's shared libraries (including NSS, ATK, X11 and ALSA); use Remotion's
documented Linux prerequisites if the renderer reports a missing library.
Keep all Remotion package versions aligned when upgrading.

This cloud environment already includes Chromium. To avoid a browser download,
use its executable explicitly:

```sh
npm run render -- --browser-executable=/usr/bin/chromium
npm run still -- --browser-executable=/usr/bin/chromium
```

Remotion's licensing terms apply: https://www.remotion.dev/license
