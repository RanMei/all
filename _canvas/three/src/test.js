//shadows aren't working?
var renderer;
var camera;
var scene; 
var stats;
var plane;
var cube;
var sphere;
var step = 0;

var controls = new function(){
  this.rotationSpeed = 0.01;
  this.bouncingSpeed = 0.03;
}

// var gui = new dat.GUI();
// gui.add(controls, 'rotationSpeed', 0, 0.5);
// gui.add(controls, 'bouncingSpeed', 0, 0.5);


function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth /window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xEEEEEE, .8);
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
	document.body.appendChild( renderer.domElement );

  // var axes = new THREE.AxisHelper(20);
  // scene.add(axes);

  /** PLANE **/
  var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
  plane = new THREE.Mesh(planeGeometry, planeMaterial);

  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15,0,0);

  plane.receiveShadow = true;
  
  scene.add(plane);
  
  /** CUBE **/
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
  var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.position.set(-4,3,0);
  cube.castShadow = true;
  
  scene.add(cube);
  
  /** SPHERE **/
  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  var sphereMaterial = new THREE.MeshPhongMaterial({color: 0x7777ff});
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  
  sphere.position.set(20,4,2);
  sphere.castShadow = true;

  scene.add(sphere);
  
  /** CAMERA **/
  camera.position.set(-30,40,30);

  camera.lookAt(scene.position);
  
  /** LIGHTS **/
  var spotlight = new THREE.SpotLight(0xffffff);
  spotlight.position.set(-40,60,-10);
  spotlight.castShadow = true;
  scene.add(spotlight)

  /** RENDER **/
  // renderer.render(scene, camera);
};

function initDebug() {
  stats = new Stats();
  stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.getElementById('stats').appendChild(stats.domElement)
  return stats;
}

function animateScene() {
  cube.rotation.x += controls.rotationSpeed;
  cube.rotation.y += controls.rotationSpeed;
  cube.rotation.z += controls.rotationSpeed;
  
  step += controls.bouncingSpeed;
  sphere.position.x = 20+(10*(Math.cos(step)));
  sphere.position.y = 2 + (10*Math.abs(Math.sin(step)))
  
}

function renderScene() {
    //stats.begin();
    
    animateScene();

    //stats.end();
    requestAnimationFrame( renderScene );
    renderer.render(scene, camera);
}

(function() {
  init();
  //initDebug();
  requestAnimationFrame( renderScene );
})();


function handleResize() {
  camera.aspect = window.innerWidth /window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleResize, false);