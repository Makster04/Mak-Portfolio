import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDObject = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // soft white light
    scene.add(ambientLight);

    // Create glowing digital coin object
    const coinGeometry = new THREE.Group();

    // Coin body (circular shape)
    const coinDiskGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.1, 64);
    const coinBodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x00bfff, // Light blue color
      emissive: 0x00bfff, // Light blue glow
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.1
    });
    const coinBody = new THREE.Mesh(coinDiskGeometry, coinBodyMaterial);
    coinBody.rotation.x = Math.PI / 2; // Rotate disk to horizontal
    coinGeometry.add(coinBody);

    // Coin edge (side view)
    const edgeGeometry = new THREE.CylinderGeometry(1.55, 1.55, 0.1, 64);
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00bfff, // Light blue color
      emissive: 0x00bfff, // Light blue glow
      emissiveIntensity: 0.5,
      roughness: 0.5,
      metalness: 0.5
    });
    const edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
    edge.rotation.x = Math.PI / 2;
    edge.position.z = 0.05; // Offset edge slightly
    coinGeometry.add(edge);

    // Add lines around the coin
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00bfff, linewidth: 2 });
    const lineGeometry = new THREE.BufferGeometry();
    const numLines = 25;
    const radius = 2;
    const positions = new Float32Array((numLines + 1) * 3); // +1 for closing the loop

    for (let i = 0; i <= numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = 0.1;
    }

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    coinGeometry.add(lines);

    scene.add(coinGeometry);

    // Set initial position and velocity
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05
    );
    coinGeometry.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );

    // Camera position
    camera.position.z = 10;

    // Animation function for coin spinning effect
    const animate = () => {
      requestAnimationFrame(animate);

      // Update position based on velocity
      coinGeometry.position.add(velocity);

      // Bounce off the walls
      if (coinGeometry.position.x > 5 || coinGeometry.position.x < -5) velocity.x *= -1;
      if (coinGeometry.position.y > 5 || coinGeometry.position.y < -5) velocity.y *= -1;
      if (coinGeometry.position.z > 5 || coinGeometry.position.z < -5) velocity.z *= -1;

      // Rotate coin (slowed down)
      coinGeometry.rotation.y += 0.01; // Slow down rotation speed
      coinGeometry.rotation.x += 0.01; // Slow down rotation speed
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1, // Lower zIndex to ensure it's behind text
        background: 'transparent',
      }}
    />
  );
};

export default ThreeDObject;
