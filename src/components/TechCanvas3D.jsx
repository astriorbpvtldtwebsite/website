import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Helper to generate crisp, syntax-highlighted code panels on CanvasTexture
function createCodePanelTexture(filename, codeLines, accentColor = '#EA9216') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 260;
  const ctx = canvas.getContext('2d');

  // Background Glass Card
  ctx.fillStyle = 'rgba(7, 22, 22, 0.92)';
  if (ctx.roundRect) {
    ctx.roundRect(0, 0, 512, 260, 16);
  } else {
    ctx.fillRect(0, 0, 512, 260);
  }
  ctx.fill();

  // Subtle Outer Border
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = accentColor;
  ctx.stroke();

  // Top Window Header Bar
  ctx.fillStyle = 'rgba(15, 38, 40, 0.9)';
  ctx.fillRect(2, 2, 508, 38);

  // 3 macOS/Terminal Window Action Dots
  const dotColors = ['#FF6E42', '#EA9216', '#10B981'];
  dotColors.forEach((color, i) => {
    ctx.beginPath();
    ctx.arc(22 + i * 16, 21, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });

  // Filename Label in Tab
  ctx.font = 'bold 14px "JetBrains Mono", "Fira Code", monospace';
  ctx.fillStyle = '#EEEEEE';
  ctx.fillText(filename, 85, 26);

  // AI Active Badge
  ctx.font = '10px monospace';
  ctx.fillStyle = accentColor;
  ctx.fillText('LIVE_AST', 430, 25);

  // Divider Line
  ctx.strokeStyle = 'rgba(58, 71, 80, 0.6)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 40);
  ctx.lineTo(512, 40);
  ctx.stroke();

  // Monospace Code Lines Rendering
  ctx.font = '13px "JetBrains Mono", "Fira Code", "Courier New", monospace';
  let y = 68;

  codeLines.forEach((tokens, idx) => {
    // Line Number gutter
    ctx.fillStyle = '#4A5B66';
    ctx.fillText(`${(idx + 1).toString().padStart(2, ' ')} `, 14, y);

    let x = 46;
    tokens.forEach(({ text, color }) => {
      ctx.fillStyle = color;
      ctx.fillText(text, x, y);
      x += ctx.measureText(text).width;
    });
    y += 24;
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

const TechCanvas3D = ({ className = '' }) => {
  const mountRef = useRef(null);
  const [telemetry, setTelemetry] = useState({
    inference: '1,420 T/s',
    latency: '12ms',
    model: 'NEURAL-7B',
    status: 'ACTIVE',
  });
  const [isPulseActive, setIsPulseActive] = useState(false);
  const isPulseActiveRef = useRef(false);
  const pulseTimeoutRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 440;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.6);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Master Assembly Group (Root for 360° Drag & Parallax)
    const masterGroup = new THREE.Group();
    masterGroup.rotation.x = 0.2;
    masterGroup.rotation.y = -0.15;
    scene.add(masterGroup);

    // -----------------------------------------------------------------
    // 3. CENTRAL AI NEURAL TRANSFORMER CORE
    // -----------------------------------------------------------------
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    // 3A. Outer Geodesic Wireframe Lattice (Citron Gold)
    const icosaGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const icosaWire = new THREE.WireframeGeometry(icosaGeo);
    const icosaMat = new THREE.LineBasicMaterial({
      color: 0xEA9216,
      transparent: true,
      opacity: 0.75,
      linewidth: 1.5,
    });
    const icosaLines = new THREE.LineSegments(icosaWire, icosaMat);
    coreGroup.add(icosaLines);

    // 3B. Mid Neural Shell (Electric Cyan)
    const octaGeo = new THREE.OctahedronGeometry(0.7, 2);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x004E72,
      emissive: 0x00A3C4,
      emissiveIntensity: 0.6,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    coreGroup.add(octaMesh);

    // 3C. Inner AI Spark Sphere (Blazing Model Tensor Core)
    const sparkGeo = new THREE.SphereGeometry(0.42, 24, 24);
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xFF6E42,
      wireframe: false,
    });
    const sparkMesh = new THREE.Mesh(sparkGeo, sparkMat);
    coreGroup.add(sparkMesh);

    // 3D. Concentric Attention Rings
    const ringGeo1 = new THREE.RingGeometry(1.2, 1.24, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xEA9216,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.6;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(1.42, 1.45, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00A3C4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    coreGroup.add(ring2);

    // -----------------------------------------------------------------
    // 4. FLOATING HOLOGRAPHIC CODE SYNTAX PANELS
    // -----------------------------------------------------------------
    const codePanelsData = [
      {
        filename: 'agent.ts // AI PIPELINE',
        accent: '#EA9216',
        position: [-2.45, 1.25, 0.4],
        rotation: [0.12, 0.4, -0.05],
        lines: [
          [
            { text: 'const ', color: '#FF6E42' },
            { text: 'agent ', color: '#00D2FF' },
            { text: '= new ', color: '#FF6E42' },
            { text: 'AstriOrbAI', color: '#EA9216' },
            { text: '({', color: '#EEEEEE' },
          ],
          [
            { text: '  model: ', color: '#EEEEEE' },
            { text: '"neural-7b-v4"', color: '#10B981' },
            { text: ',', color: '#EEEEEE' },
          ],
          [
            { text: '  stream: ', color: '#EEEEEE' },
            { text: 'true', color: '#EA9216' },
            { text: ',', color: '#EEEEEE' },
            { text: ' temp: ', color: '#EEEEEE' },
            { text: '0.2', color: '#00D2FF' },
          ],
          [
            { text: '});', color: '#EEEEEE' },
          ],
          [
            { text: 'await ', color: '#FF6E42' },
            { text: 'agent.', color: '#EEEEEE' },
            { text: 'compileAndInfer', color: '#00D2FF' },
            { text: '();', color: '#EEEEEE' },
          ],
          [
            { text: '// ✓ 1420 tokens streamed', color: '#7A8B99' },
          ],
        ],
      },
      {
        filename: 'tensor.py // ATTENTION',
        accent: '#00D2FF',
        position: [2.5, 1.35, -0.3],
        rotation: [-0.1, -0.45, 0.08],
        lines: [
          [
            { text: 'def ', color: '#FF6E42' },
            { text: 'forward', color: '#00D2FF' },
            { text: '(self, x, mask):', color: '#EEEEEE' },
          ],
          [
            { text: '    Q, K, V = ', color: '#EEEEEE' },
            { text: 'self.split_heads', color: '#00D2FF' },
            { text: '(x)', color: '#EEEEEE' },
          ],
          [
            { text: '    scores = ', color: '#EEEEEE' },
            { text: 'matmul', color: '#EA9216' },
            { text: '(Q, K.T) / ', color: '#EEEEEE' },
            { text: 'sqrt', color: '#EA9216' },
            { text: '(d)', color: '#EEEEEE' },
          ],
          [
            { text: '    weights = ', color: '#EEEEEE' },
            { text: 'softmax', color: '#00D2FF' },
            { text: '(scores + mask)', color: '#EEEEEE' },
          ],
          [
            { text: '    return ', color: '#FF6E42' },
            { text: 'weights @ V  ', color: '#10B981' },
            { text: '# Synapse', color: '#7A8B99' },
          ],
        ],
      },
      {
        filename: 'ui.tsx // REACT COMPILER',
        accent: '#10B981',
        position: [-2.35, -1.3, -0.5],
        rotation: [0.18, 0.35, 0.04],
        lines: [
          [
            { text: 'export const ', color: '#FF6E42' },
            { text: 'NeuralCanvas ', color: '#00D2FF' },
            { text: '= () => {', color: '#EEEEEE' },
          ],
          [
            { text: '  const ', color: '#FF6E42' },
            { text: 'graph ', color: '#EEEEEE' },
            { text: '= useAstEngine();', color: '#10B981' },
          ],
          [
            { text: '  return (', color: '#EEEEEE' },
          ],
          [
            { text: '    <Mesh ', color: '#EA9216' },
            { text: 'nodes', color: '#00D2FF' },
            { text: '={graph.', color: '#EEEEEE' },
            { text: 'activeNodes', color: '#EA9216' },
            { text: '} />', color: '#EA9216' },
          ],
          [
            { text: '  );', color: '#EEEEEE' },
          ],
          [
            { text: '}; // 60 FPS GPU Pipeline', color: '#7A8B99' },
          ],
        ],
      },
      {
        filename: 'engine.rs // SYSTEMS CORE',
        accent: '#FF6E42',
        position: [2.35, -1.25, 0.5],
        rotation: [-0.15, -0.38, -0.05],
        lines: [
          [
            { text: 'pub async fn ', color: '#FF6E42' },
            { text: 'process_stream', color: '#00D2FF' },
            { text: '(', color: '#EEEEEE' },
          ],
          [
            { text: '    ctx: &mut ', color: '#EEEEEE' },
            { text: 'Context,', color: '#EA9216' },
          ],
          [
            { text: ') -> ', color: '#EEEEEE' },
            { text: 'Result', color: '#00D2FF' },
            { text: '<Output, EngineErr> {', color: '#EEEEEE' },
          ],
          [
            { text: '    let ', color: '#FF6E42' },
            { text: 'tokens = ctx.alloc(512)?;', color: '#EEEEEE' },
          ],
          [
            { text: '    Ok(self.eval(tokens).await)', color: '#10B981' },
          ],
          [
            { text: '} // Zero-Cost Abstraction', color: '#7A8B99' },
          ],
        ],
      },
      {
        filename: 'deploy.sh // CI/CD PROD',
        accent: '#EA9216',
        position: [0.05, 2.3, -0.6],
        rotation: [-0.25, 0.05, 0.0],
        lines: [
          [
            { text: '$ ', color: '#10B981' },
            { text: 'git commit -m ', color: '#EEEEEE' },
            { text: '"feat: ai neural v5"', color: '#10B981' },
          ],
          [
            { text: '$ ', color: '#10B981' },
            { text: 'astriorb deploy --prod --cluster=gpu', color: '#00D2FF' },
          ],
          [
            { text: '✓ 11 unit tests passed (1.8s)', color: '#10B981' },
          ],
          [
            { text: '✓ Chunks: Three.js + Framer Motion', color: '#EA9216' },
          ],
          [
            { text: 'Status: 200 OK | Latency: 12ms', color: '#EEEEEE' },
          ],
        ],
      },
    ];

    const panelMeshes = [];
    const panelTextures = [];
    const panelGeo = new THREE.PlaneGeometry(2.35, 1.2);

    codePanelsData.forEach((panel) => {
      const texture = createCodePanelTexture(panel.filename, panel.lines, panel.accent);
      panelTextures.push(texture);

      const panelMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.94,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(panelGeo, panelMat);
      mesh.position.set(...panel.position);
      mesh.rotation.set(...panel.rotation);
      masterGroup.add(mesh);
      panelMeshes.push(mesh);
    });

    // -----------------------------------------------------------------
    // 5. SYNAPTIC NEURAL BEZIER CURVES & DATA PACKETS
    // -----------------------------------------------------------------
    const synapticCurves = [];
    const neuralLineMats = [];
    const neuralLineGroup = new THREE.Group();
    masterGroup.add(neuralLineGroup);

    codePanelsData.forEach((panel) => {
      const start = new THREE.Vector3(0, 0, 0);
      const end = new THREE.Vector3(...panel.position);
      // Mid control point arched outwards in 3D
      const mid = new THREE.Vector3(
        panel.position[0] * 0.45,
        panel.position[1] * 0.45 + 0.35,
        panel.position[2] * 0.45 + 0.5
      );

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      synapticCurves.push(curve);

      const curvePoints = curve.getPoints(36);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(panel.accent),
        transparent: true,
        opacity: 0.45,
        linewidth: 1.5,
      });
      neuralLineMats.push(curveMat);

      const curveLine = new THREE.Line(curveGeo, curveMat);
      neuralLineGroup.add(curveLine);
    });

    // Streaming Token Particles along Synapses
    const tokenCount = 75;
    const tokenPositions = new Float32Array(tokenCount * 3);
    const tokenColors = new Float32Array(tokenCount * 3);
    const tokenData = [];

    const baseColorA = new THREE.Color(0xEA9216); // Citron Gold
    const baseColorB = new THREE.Color(0x00D2FF); // Electric Cyan
    const baseColorC = new THREE.Color(0x10B981); // Emerald

    for (let i = 0; i < tokenCount; i++) {
      const curveIndex = i % synapticCurves.length;
      const progress = Math.random();
      const speed = 0.003 + Math.random() * 0.006;
      tokenData.push({ curveIndex, progress, speed });

      const p = synapticCurves[curveIndex].getPoint(progress);
      tokenPositions[i * 3] = p.x;
      tokenPositions[i * 3 + 1] = p.y;
      tokenPositions[i * 3 + 2] = p.z;

      const c = i % 3 === 0 ? baseColorA : i % 3 === 1 ? baseColorB : baseColorC;
      tokenColors[i * 3] = c.r;
      tokenColors[i * 3 + 1] = c.g;
      tokenColors[i * 3 + 2] = c.b;
    }

    const tokenGeo = new THREE.BufferGeometry();
    tokenGeo.setAttribute('position', new THREE.BufferAttribute(tokenPositions, 3));
    tokenGeo.setAttribute('color', new THREE.BufferAttribute(tokenColors, 3));

    const tokenMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });

    const tokenPoints = new THREE.Points(tokenGeo, tokenMat);
    masterGroup.add(tokenPoints);

    // -----------------------------------------------------------------
    // 6. AMBIENT CODE GLYPHS / SYNTAX DUST NEBULA
    // -----------------------------------------------------------------
    const ambientCount = 90;
    const ambientPositions = new Float32Array(ambientCount * 3);
    for (let i = 0; i < ambientCount; i++) {
      ambientPositions[i * 3] = (Math.random() - 0.5) * 8.5;
      ambientPositions[i * 3 + 1] = (Math.random() - 0.5) * 7.5;
      ambientPositions[i * 3 + 2] = (Math.random() - 0.5) * 5.5;
    }
    const ambientGeo = new THREE.BufferGeometry();
    ambientGeo.setAttribute('position', new THREE.BufferAttribute(ambientPositions, 3));
    const ambientMat = new THREE.PointsMaterial({
      color: 0x3A4750,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
    });
    const ambientPoints = new THREE.Points(ambientGeo, ambientMat);
    scene.add(ambientPoints);

    // -----------------------------------------------------------------
    // 7. INTERACTIVE INFERENCE PULSE SHOCKWAVE
    // -----------------------------------------------------------------
    const pulseRingGeo = new THREE.RingGeometry(0.1, 0.18, 48);
    const pulseRingMat = new THREE.MeshBasicMaterial({
      color: 0xEA9216,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
    });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    coreGroup.add(pulseRing);

    let pulseScale = 0.1;
    let pulseOpacity = 0.0;
    let pulseSpeed = 0.0;

    const fireInferencePulse = () => {
      pulseScale = 0.2;
      pulseOpacity = 0.9;
      pulseSpeed = 0.06;
      isPulseActiveRef.current = true;
      setIsPulseActive(true);
      if (pulseTimeoutRef.current) clearTimeout(pulseTimeoutRef.current);
      pulseTimeoutRef.current = setTimeout(() => {
        isPulseActiveRef.current = false;
        setIsPulseActive(false);
      }, 900);
    };

    // -----------------------------------------------------------------
    // 8. INTERACTION HANDLERS (DRAG 360°, TILT, CLICK PULSE)
    // -----------------------------------------------------------------
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotX = 0.2;
    let targetRotY = -0.15;
    let velX = 0;
    let velY = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        velY = deltaX * 0.008;
        velX = deltaY * 0.008;
        targetRotY += velY;
        targetRotX += velX;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        // Subtle Parallax Tilt
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotY = -0.15 + normX * 0.35;
        targetRotX = 0.2 + normY * 0.25;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleClick = () => {
      fireInferencePulse();
    };

    // Touch support
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        velY = deltaX * 0.008;
        velX = deltaY * 0.008;
        targetRotY += velY;
        targetRotX += velX;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('click', handleClick);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 440;
      const h = container.clientHeight || 440;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // -----------------------------------------------------------------
    // 9. ANIMATION LOOP
    // -----------------------------------------------------------------
    let animationFrameId;
    let clockTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clockTime += 0.016;

      // Damped Rotation
      if (!isDragging) {
        velX *= 0.94;
        velY *= 0.94;
        targetRotY += velY;
        targetRotX += velX;
        // Subtle constant background revolution
        targetRotY += 0.0018;
      }

      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.08;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.08;

      // 9A. Core Breathing & Self-Rotation
      coreGroup.rotation.y += 0.012;
      coreGroup.rotation.x += 0.007;

      const pulseFactor = 1.0 + Math.sin(clockTime * 4.5) * 0.09;
      sparkMesh.scale.set(pulseFactor, pulseFactor, pulseFactor);

      ring1.rotation.z += 0.015;
      ring2.rotation.z -= 0.018;

      // 9B. Floating Code Panels Gentle Oscillation
      panelMeshes.forEach((mesh, idx) => {
        const floatOffset = Math.sin(clockTime * 2.0 + idx * 1.2) * 0.04;
        mesh.position.y = codePanelsData[idx].position[1] + floatOffset;
      });

      // 9C. Streaming Token Particles Animation
      const posAttr = tokenGeo.attributes.position;
      const posArray = posAttr.array;

      for (let i = 0; i < tokenCount; i++) {
        const item = tokenData[i];
        // Accelerate when pulse is active
        const currentSpeed = isPulseActiveRef.current ? item.speed * 2.8 : item.speed;
        item.progress = (item.progress + currentSpeed) % 1.0;

        const curve = synapticCurves[item.curveIndex];
        const pt = curve.getPoint(item.progress);

        posArray[i * 3] = pt.x;
        posArray[i * 3 + 1] = pt.y;
        posArray[i * 3 + 2] = pt.z;
      }
      posAttr.needsUpdate = true;

      // 9D. Inference Pulse Shockwave Animation
      if (pulseOpacity > 0.01) {
        pulseScale += pulseSpeed;
        pulseOpacity *= 0.94;
        pulseRing.scale.set(pulseScale, pulseScale, pulseScale);
        pulseRingMat.opacity = pulseOpacity;
      } else {
        pulseRingMat.opacity = 0;
      }

      // 9E. Periodic Telemetry Jitter
      if (Math.random() < 0.02) {
        const jitterTokens = 1380 + Math.floor(Math.random() * 80);
        const jitterLatency = 10 + Math.floor(Math.random() * 4);
        setTelemetry((prev) => ({
          ...prev,
          inference: `${jitterTokens.toLocaleString()} T/s`,
          latency: `${jitterLatency}ms`,
        }));
      }

      renderer.render(scene, camera);
    };

    animate();

    // -----------------------------------------------------------------
    // 10. CLEANUP ON UNMOUNT
    // -----------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Geometries & Materials Disposal
      icosaGeo.dispose();
      icosaWire.dispose();
      icosaMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      panelGeo.dispose();
      panelTextures.forEach((t) => t.dispose());
      tokenGeo.dispose();
      tokenMat.dispose();
      ambientGeo.dispose();
      ambientMat.dispose();
      pulseRingGeo.dispose();
      pulseRingMat.dispose();
      neuralLineMats.forEach((m) => m.dispose());
      renderer.dispose();
      if (pulseTimeoutRef.current) clearTimeout(pulseTimeoutRef.current);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10 touch-none"
        title="Drag 360° to rotate, Click to fire AI Inference Pulse"
      />

      {/* Cybernetic Developer HUD Overlay */}
      <div className="absolute top-2 left-3 z-20 pointer-events-none flex items-center gap-2 text-[9px] font-mono dark:text-titanium-300 text-sand-charcoal/80">
        <span className="w-1.5 h-1.5 rounded-full bg-citron animate-ping" />
        <span>NEURAL_GRAPH // AST_COMPILER_V5</span>
      </div>

      <div className="absolute top-2 right-3 z-20 pointer-events-none flex items-center gap-2 text-[9px] font-mono dark:text-titanium-300 text-sand-charcoal/80">
        <span className="text-citron font-bold tabular-nums">{telemetry.inference}</span>
        <span className="text-titanium-500">|</span>
        <span className="text-emerald-400 font-bold tabular-nums">{telemetry.latency}</span>
      </div>

      <div className="absolute bottom-2 left-3 z-20 pointer-events-none text-[9px] font-mono dark:text-titanium-400 text-sand-charcoal/70">
        <span>MODEL: {telemetry.model} | STATUS: {telemetry.status}</span>
      </div>

      <div className="absolute bottom-2 right-3 z-20 pointer-events-none text-[9px] font-mono text-citron/90 font-bold">
        {isPulseActive ? '⚡ INFERENCE PULSE FIRED' : 'CLICK: FIRE INFERENCE // DRAG 360°'}
      </div>
    </div>
  );
};

export default React.memo(TechCanvas3D);
