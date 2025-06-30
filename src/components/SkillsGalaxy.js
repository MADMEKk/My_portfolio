import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Loading component for the 3D canvas
const CanvasLoader = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="w-12 h-12 border-4 border-t-secondary rounded-full animate-spin"></div>
    <p className="text-secondary mt-4">Loading Galaxy...</p>
  </div>
);

// Skill node component with enhanced visuals
const SkillNode = ({ position, name, color, size = 1, index, onHover, onLeave }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Create a pulsing animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      
      // Add subtle pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 1;
      meshRef.current.scale.setScalar(hovered ? size * 1.2 : size * pulse);
    }
  });
  
  // Create a geometry with more detail for better visual appeal
  const geometry = useMemo(() => new THREE.DodecahedronGeometry(1, 1), []);
  
  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(index);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          onLeave();
        }}
        onClick={(e) => {
          e.stopPropagation();
          setClicked(!clicked);
        }}
      >
        <primitive object={geometry} />
        <meshPhysicalMaterial 
          color={hovered ? "#64ffda" : color}
          wireframe={clicked}
          emissive={hovered ? "#64ffda" : color}
          emissiveIntensity={hovered ? 0.6 : 0.2}
          roughness={0.5}
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>
      <Text
        position={[0, -1.8, 0]}
        color="white"
        fontSize={0.5}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#0a192f"
      >
        {name}
      </Text>
    </group>
  );
};

// Connection lines between skills with improved visuals
const SkillConnections = ({ points, hoveredSkill }) => {
  const lineRef = useRef();
  
  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.rotation.y += 0.001;
    }
  });
  
  // Create line geometries with correct buffer attributes
  const lines = useMemo(() => {
    const lineSegments = [];
    
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        // Only connect if points are within a reasonable distance
        const distance = Math.sqrt(
          Math.pow(points[i][0] - points[j][0], 2) + 
          Math.pow(points[i][1] - points[j][1], 2) + 
          Math.pow(points[i][2] - points[j][2], 2)
        );
        
        // Adjust the distance threshold to control line density
        if (distance < 12) {
          const geometry = new THREE.BufferGeometry();
          const vertices = new Float32Array([
            points[i][0], points[i][1], points[i][2],
            points[j][0], points[j][1], points[j][2]
          ]);
          
          geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
          
          // Make closer nodes have more visible connections
          const opacity = Math.max(0.1, 1 - distance / 6);
          
          lineSegments.push({ 
            geometry, 
            key: `${i}-${j}`,
            opacity,
            lineType: Math.random() > 0.7 ? 'dashed' : 'solid'
          });
        }
      }
    }
    
    return lineSegments;
  }, [points]);
  
  return (
    <group ref={lineRef}>
      {lines.map(({ geometry, key, opacity, lineType }) => (
        <line key={key}>
          <primitive object={geometry} />
          <lineBasicMaterial 
            color="#64ffda" 
            opacity={opacity} 
            transparent 
            linewidth={1}
          />
        </line>
      ))}
    </group>
  );
};

// Background particles for added depth
const ParticleBackground = () => {
  return (
    <Stars 
      radius={50} 
      depth={50} 
      count={1000} 
      factor={4} 
      saturation={0}
      fade
      speed={1}
    />
  );
};

// Main Skills Galaxy component
const SkillsGalaxy = () => {
  // Define skill categories and their skills
  const skillCategories = useMemo(() => [
    {
      name: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'TailwindCSS', 'Flutter'],
      color: '#61dafb'
    },
    {
      name: 'Backend',
      skills: ['Django', 'Python', 'Node.js', 'SQL', 'REST API'],
      color: '#4caf50'
    },
    {
      name: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'NVIDIA DL Certified'],
      color: '#ff9800'
    },
    {
      name: 'DevOps',
      skills: ['Docker', 'Git', 'CI/CD', 'Linux'],
      color: '#e91e63'
    }
  ], []);
  
  // Generate positions for each skill in a 3D space with improved distribution
  const { positions, points } = useMemo(() => {
    const positions = [];
    const points = [];
    
    skillCategories.forEach((category, catIndex) => {
      // Increase the radius to add more spacing between category clusters
      const categoryAngle = (catIndex / skillCategories.length) * Math.PI * 2;
      const categoryRadius = 8; // Increased from 5 to 8
      const categoryX = Math.cos(categoryAngle) * categoryRadius;
      const categoryZ = Math.sin(categoryAngle) * categoryRadius;
      
      category.skills.forEach((skill, skillIndex) => {
        // Distribute skills more evenly within their category
        const skillAngle = (skillIndex / category.skills.length) * Math.PI * 2;
        const skillRadius = 3; // Increased from 2 to 3
        
        // Add some randomness to y position but keep it in a narrower range
        const y = (Math.random() - 0.5) * 3;
        
        // Calculate x and z with slight randomness for more natural distribution
        const x = categoryX + Math.cos(skillAngle) * skillRadius + (Math.random() - 0.5) * 0.5;
        const z = categoryZ + Math.sin(skillAngle) * skillRadius + (Math.random() - 0.5) * 0.5;
        
        positions.push({
          name: skill,
          position: [x, y, z],
          color: category.color,
          size: 0.6 + Math.random() * 0.4 // More consistent sizing
        });
        
        points.push([x, y, z]);
      });
    });
    
    return { positions, points };
  }, [skillCategories]);
  
  // Add a state to track the hovered skill
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  return (
    <section id="skills-galaxy" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-light mb-4">Skills Galaxy</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-tertiary mt-6 max-w-2xl mx-auto">
            Explore my technical skills in this interactive 3D visualization. 
            Click and drag to rotate, scroll to zoom, and click on skills for more details.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[600px] w-full rounded-lg overflow-hidden border border-secondary border-opacity-20 bg-dark"
        >
          <Canvas 
            camera={{ position: [0, 0, 20], fov: 60 }}
            dpr={[1, 1.5]} // Reduced for better performance
            gl={{ 
              antialias: true,
              powerPreference: "default",
              alpha: false
            }}
            style={{ background: '#0a192f' }}
          >
            <Suspense fallback={null}>
              <color attach="background" args={['#0a192f']} />
              <fog attach="fog" args={['#0a192f', 15, 30]} />
              
              {/* Lighting for better visuals */}
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#64ffda" />
              
              {/* Background particles */}
              <ParticleBackground />
              
              {/* Render skill nodes */}
              {positions.map((skill, index) => (
                <SkillNode
                  key={index}
                  name={skill.name}
                  position={skill.position}
                  color={skill.color}
                  size={skill.size}
                  index={index}
                  onHover={(index) => setHoveredSkill(index)}
                  onLeave={() => setHoveredSkill(null)}
                />
              ))}
              
              {/* Render connections between skills */}
              <SkillConnections points={points} hoveredSkill={hoveredSkill} />
              
              {/* Controls with improved settings */}
              <OrbitControls 
                enableZoom={true} 
                enablePan={false} 
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                maxDistance={30}
                minDistance={10}
                dampingFactor={0.05}
              />
            </Suspense>
          </Canvas>
        </motion.div>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card bg-dark bg-opacity-50 backdrop-blur-sm border-l-2 p-4 rounded-md shadow-lg"
              style={{ borderColor: category.color }}
            >
              <h3 className="text-xl font-bold text-light mb-2">{category.name}</h3>
              <ul className="text-tertiary text-sm">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="mb-1 flex items-center">
                    <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: category.color }}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGalaxy; 