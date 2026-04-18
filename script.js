let scene, camera, renderer;

function init() {
  // Create the scene, camera, and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true
  });

  // Add some ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Create a 3D object
  const geometry = new THREE.TorusGeometry(1, 0.5, 16, 60);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  // Position the camera
  camera.position.z = 5;

  // Animate the scene
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  animate();
}

init();
