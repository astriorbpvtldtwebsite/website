import { LiquidMetal } from '@paper-design/shaders-react';

const LiquidMetalLogo = ({ size = 'w-16 h-16' }) => {
  return (
    <div className={`${size} rounded-lg overflow-hidden`}>
      <LiquidMetal 
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
          borderRadius: '0.5rem'
        }} 
      />
    </div>
  );
};

export default LiquidMetalLogo;
