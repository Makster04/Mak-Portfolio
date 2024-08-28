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

    // Robot head group
    const robotHead = new THREE.Group();

    // Head (a sphere)
    const headGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      emissive: 0x333333,
      metalness: 0.6,
      roughness: 0.4
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    robotHead.add(head);

    // Eyes (small spheres)
    const eyeGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x222222,
      metalness: 0.7,
      roughness: 0.2
    });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.6, 0.5, 1.2);
    rightEye.position.set(0.6, 0.5, 1.2);
    robotHead.add(leftEye);
    robotHead.add(rightEye);

    // Antenna (a cylinder)
    const antennaGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
    const antennaMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0x880000,
      metalness: 0.8,
      roughness: 0.2
    });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.set(0, 1.6, 0);
    robotHead.add(antenna);

    scene.add(robotHead);

    // Camera position
    camera.position.z = 10;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the robot head
      robotHead.rotation.y += 0.01;

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
        right: '0',  // Position at top right
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
