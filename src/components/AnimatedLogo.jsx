import React, { lazy, Suspense } from 'react';

const LazyLiquidMetal = lazy(() =>
  import('@paper-design/shaders-react').then((module) => ({ default: module.LiquidMetal }))
);

const AnimatedLogo = ({ size = 'w-16 h-16' }) => {
  return (
    <div className={`${size} rounded-lg overflow-hidden flex items-center justify-center`}>
      <Suspense fallback={<img src="/logo.png" alt="AstriOrb Logo" className="w-full h-full object-contain" />}>
        <LazyLiquidMetal
          speed={1}
          colorBack="#00000000"
          colorTint="#FFFFFF"
          softness={0.1}
          repetition={2}
          shiftRed={0.3}
          shiftBlue={0.3}
          distortion={0.07}
          contour={0.4}
          scale={0.6}
          rotation={0}
          shape="diamond"
          image="/logo.png"
          angle={70}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
          }}
        />
      </Suspense>
    </div>
  );
};

export default AnimatedLogo;
