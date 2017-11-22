console.log("Scene2 Rdy");

var scene2Sky;

//hotSpots
var scene2PlaneGeometry = new THREE.PlaneGeometry( 25 , 10, 0 );
var scene1PlaneMaterial = new THREE.MeshBasicMaterial({color: 0x274d93, transparent: true, opacity: 0.8, side: THREE.FrontSide} );
var scene2Plane0 = new THREE.Mesh( scene2PlaneGeometry, scene1PlaneMaterial );
scene2Plane0.position.set( 14, 8, -70 );
scene2Plane0.name = "scene2Plane0";
scene2Plane0.origin = "scene2";
scene2Plane0.destination = "scene0";


var scene2TextureLoader = new THREE.TextureLoader();
scene2Sky = scene2TextureLoader.load("textures/scene2.jpg");
scene2Sky.mapping = THREE.EquirectangularReflectionMapping;
scene2Sky.magFilter = THREE.LinearFilter;
scene2Sky.minFilter = THREE.LinearMipMapLinearFilter;

// material tercer sky
var scene2EquirectShader = THREE.ShaderLib["equirect"];
var scene2equirectMaterial = new THREE.ShaderMaterial({
  fragmentShader: scene2EquirectShader.fragmentShader,
  vertexShader: scene2EquirectShader.vertexShader,
  uniforms: scene2EquirectShader.uniforms,
  depthWrite: false,
  side: THREE.BackSide
});
// scene2equirectMaterial.uniforms["tEquirect"].value = scene2Sky;
// ======================================================


var vMesh2 = [scene2Plane0];