// Minimal three.js slider: plane with texture swap and simple animation
(() => {
  const images = [
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop'
  ];

  const root = document.getElementById('slider-root');
  const width = root.clientWidth;
  const height = root.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  root.appendChild(renderer.domElement);

  let textures = [];
  const loader = new THREE.TextureLoader();

  let current = 0;
  let next = 1;

  const geometry = new THREE.PlaneGeometry(3.2, 1.8, 32, 32);

  const matA = new THREE.MeshBasicMaterial({map: null, transparent: true});
  const meshA = new THREE.Mesh(geometry, matA);
  scene.add(meshA);

  const matB = new THREE.MeshBasicMaterial({map: null, transparent: true, opacity: 0});
  const meshB = new THREE.Mesh(geometry, matB);
  scene.add(meshB);

  function onWindowResize(){
    const w = root.clientWidth;
    const h = root.clientHeight;
    renderer.setSize(w,h);
    camera.aspect = w/h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onWindowResize);

  // preload textures
  let loaded = 0;
  images.forEach((src, i) => {
    loader.load(src, tex => {
      textures[i] = tex;
      loaded++;
      if(loaded === images.length) init();
    });
  });

  function init(){
    matA.map = textures[current];
    matB.map = textures[next];
    animate();
  }

  let animStart = null;
  let transitioning = false;
  const duration = 700; // ms

  function startTransition(direction=1){
    if(transitioning) return;
    transitioning = true;
    animStart = performance.now();
    next = (current + direction + images.length) % images.length;
    matB.map = textures[next];
    matB.opacity = 0;
    requestAnimationFrame(step);
  }

  function step(t){
    if(!animStart) animStart = t;
    const p = Math.min(1,(t - animStart)/duration);
    // ease
    const e = p<.5 ? 2*p*p : -1 + (4 - 2*p)*p;
    matB.opacity = e;
    meshB.position.x = (1 - e) * 0.3;
    meshA.position.x = -e * 0.3;

    renderer.render(scene, camera);

    if(p < 1) requestAnimationFrame(step);
    else {
      // swap
      current = next;
      matA.map = textures[current];
      matA.opacity = 1;
      matB.opacity = 0;
      meshA.position.x = 0;
      meshB.position.x = 0;
      transitioning = false;
    }
  }

  function animate(){
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  document.getElementById('next').addEventListener('click', () => startTransition(1));
  document.getElementById('prev').addEventListener('click', () => startTransition(-1));
})();
