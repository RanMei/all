var container, stats;

var camera, scene, renderer;

var cube, plane;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

// function App(){

// }
// App.prototype = {

// }

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	var info = document.createElement( 'div' );
	info.style.position = 'absolute';
	info.style.top = '10px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.innerHTML = 'Drag to spin the cube';
	container.appendChild( info );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.x = 0;
  camera.position.z = 300;
  camera.position.y = 100;

	var controls = new THREE.OrbitControls( camera );
  controls.maxPolarAngle = Math.PI * 0.5;
  // controls.minDistance = 300;
  // controls.maxDistance = 600;

	scene = new THREE.Scene();
  //scene.fog = new THREE.Fog( 0x000000, 250, 1400 );
  
  var light = new THREE.PointLight( 0xff0000, 100000, 0 );
  light.position.set( 0, 400, 0 );
  light.castShadow = true;
  scene.add( light );

	cube = createCube(scene);
  plane = createPlane(scene);
	//createGround(scene);

	renderer = new THREE.CanvasRenderer();
	// renderer.setClearColor( 0xf0f0f0 ); 
  renderer.setClearColor( 'black' ); 
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	stats = new Stats();
	container.appendChild( stats.dom );

	// document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	// document.addEventListener( 'touchmove', onDocumentTouchMove, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function animate() {

  requestAnimationFrame( animate );

  stats.begin();
  render();
  stats.end();

}

function render() {

  plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
  //plane.position.y += 0.5;
  // cube.rotation.x += 0.01;
  renderer.render( scene, camera );

}

function createCube(scene){
	var geometry = new THREE.BoxGeometry( 100, 100, 100 );

	for ( var i = 0; i < geometry.faces.length; i += 2 ) {

		var hex = Math.random() * 0xffffff;
		geometry.faces[ i ].color.setHex( hex );
		geometry.faces[ i + 1 ].color.setHex( hex );

	}

	var material = new THREE.MeshBasicMaterial({
    vertexColors: THREE.FaceColors, 
    overdraw: 0.5,
    //wireframe: true 
  });

	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = 0;
	cube.position.y = 0;
  cube.castShadow = true; //default is false
  cube.receiveShadow = false; //default
	scene.add( cube );
	return cube;
}
function createPlane(scene){
  var geometry = new THREE.PlaneBufferGeometry( 400, 400 );
  geometry.rotateX( - Math.PI / 2 );

  var material = new THREE.MeshBasicMaterial({
    color: 0xe0e0e0,
    overdraw: 0.5,
    side: THREE.DoubleSide
  });
  var loader = new THREE.TextureLoader();
  var groundTexture = loader.load( 'grass.jpg' );
  groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set( 1, 1 );
  groundTexture.anisotropy = 16;
  var groundMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, 
    specular: 0x111111, 
    map: groundTexture
  });

  plane = new THREE.Mesh( geometry, material );
  plane.position.x = 0;
  plane.position.y = -250;
  plane.receiveShadow = true;
  scene.add( plane );
  return plane;
}
function createGround(scene){
  var groundMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, 
    specular: 0x111111, 
    //map: groundTexture
  });
  var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 20000, 20000 ), groundMaterial );
  mesh.position.y = - 250;
  mesh.rotation.x = - Math.PI / 2;
  mesh.receiveShadow = true;
  scene.add( mesh );
}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function onDocumentMouseDown( event ) {

	event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mouseout', onDocumentMouseOut, false );

	mouseXOnMouseDown = event.clientX - windowHalfX;
	targetRotationOnMouseDown = targetRotation;

}

function onDocumentMouseMove( event ) {

	mouseX = event.clientX - windowHalfX;

	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

}

function onDocumentMouseUp( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

	if ( event.touches.length === 1 ) {

		event.preventDefault();

		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;

	}

}

function onDocumentTouchMove( event ) {

	if ( event.touches.length === 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

	}

}
