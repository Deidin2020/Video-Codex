import {
  AbsoluteFill,
  Composition,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

/** All motion is driven by the frame so previews and renders are deterministic. */
export const TestScene = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(circle at 75% 25%, #213b68, #0b1020 65%)',
        color: '#f8fafc',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: 120,
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 180,
          top: 250,
          width: 360,
          height: 360,
          borderRadius: 72,
          background: 'linear-gradient(135deg, #67e8f9, #818cf8)',
          rotate: interpolate(frame, [0, durationInFrames - 1], ['-20deg', '70deg']),
          scale: interpolate(frame, [0, fps], [0.1, 1], {
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <div
        style={{
          opacity: interpolate(frame, [0, 0.6 * fps], [0, 1], {
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [0, 0.8 * fps], ['0px 50px', '0px 0px'], {
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div style={{fontSize: 28, letterSpacing: 8, color: '#67e8f9'}}>
          VIDEO CODEX / FIRST FRAME
        </div>
        <h1 style={{fontSize: 116, letterSpacing: -5, margin: '28px 0'}}>
          Ideas in motion.
        </h1>
        <p style={{fontSize: 36, color: '#cbd5e1', margin: 0}}>
          TypeScript + React + Remotion
        </p>
      </div>
      <div style={{position: 'absolute', left: 120, right: 120, bottom: 110}}>
        <div style={{fontSize: 24, color: '#94a3b8', marginBottom: 20}}>
          1920 × 1080 · 30 FPS · 3 SECONDS
        </div>
        <div style={{height: 6, background: '#26334d', borderRadius: 3}}>
          <div
            style={{
              height: '100%',
              borderRadius: 3,
              background: '#67e8f9',
              width: interpolate(frame, [0, durationInFrames - 1], ['0%', '100%']),
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => (
  <Composition
    id="TestScene"
    component={TestScene}
    durationInFrames={90}
    fps={30}
    width={1920}
    height={1080}
  />
);
