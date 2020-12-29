// Set up Vars

let container;
let camera;
let renderer;
let scene;
let man;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

  //Camera Setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0,10,45);

  //Lighting
  const ambient =  new THREE.AmbientLight(0x404040,2);
  scene.add(ambient);
  const light = new THREE.DirectionalLight(0xffffff,1);
  light.position.set(20,20,20);
  scene.add(light);

  //Renderer
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load('./3D/man.gltf', function(gltf){
    scene.add(gltf.scene);
    man = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  man.rotation.z += 0.003;
  renderer.render(scene, camera);
}

init();


