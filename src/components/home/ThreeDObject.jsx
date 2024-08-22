import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDObject = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    mountRef.current.appendChild(renderer.domElement);

    // Create a funny 3D object
    const geometry = new THREE.DodecahedronGeometry(1, 0); // Dodecahedron for a quirky shape
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://i.imgur.com/CrF5OVc.png'); // Example texture: funny face
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const dodecahedron = new THREE.Mesh(geometry, material);
    scene.add(dodecahedron);

    // Add some fun effects
    const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    for (let i = 0; i < 100; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      scene.add(star);
    }

    // Camera position
    camera.position.z = 5;

    // Animation function with bouncy effect
    const animate = () => {
      requestAnimationFrame(animate);
      dodecahedron.rotation.x += 0.03;
      dodecahedron.rotation.y += 0.03;
      dodecahedron.position.y = Math.sin(Date.now() * 0.002) * 2; // Bouncing effect
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
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
        top: '20px',
        right: '20px',
        width: '300px',
        height: '300px',
        zIndex: 2,
        background: 'transparent',
        borderRadius: '20px', // More rounded corners
      }}
    />
  );
};

export default ThreeDObject;
