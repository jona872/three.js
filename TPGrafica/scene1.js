console.log("Scene1 Rdy");

var scene1Sky;

//hotSpots
var scene1PlaneGeometry = new THREE.PlaneGeometry( 25 , 10, 0 );
var scene1PlaneMaterial = new THREE.MeshBasicMaterial({color: 0x274d93, transparent: true, opacity: 0.8, side: THREE.FrontSide} );
var scene1Plane0 = new THREE.Mesh( scene1PlaneGeometry, scene1PlaneMaterial );
scene1Plane0.position.set( 20, 10, -49.5 );
scene1Plane0.name = "scene1Plane0";
scene1Plane0.origin = "scene1";
scene1Plane0.destination = "scene0";


var scene1Plane1 = new THREE.Mesh( scene1PlaneGeometry, scene1PlaneMaterial );
scene1Plane1.position.set( -10, -5, -49.5 );
scene1Plane1.name = "scene1Plane1";
scene1Plane1.origin = "scene1";
scene1Plane1.destination = "scene0";


//Second Sky (house)
var textureLoader = new THREE.TextureLoader();
scene1Sky = textureLoader.load("textures/2294472375_24a3b8ef46_o.jpg");
scene1Sky.mapping = THREE.EquirectangularReflectionMapping;
scene1Sky.magFilter = THREE.LinearFilter;
scene1Sky.minFilter = THREE.LinearMipMapLinearFilter;

// material second sky
var equirectShader = THREE.ShaderLib["equirect"];
var equirectMaterial = new THREE.ShaderMaterial({
  fragmentShader: equirectShader.fragmentShader,
  vertexShader: equirectShader.vertexShader,
  uniforms: equirectShader.uniforms,  
  depthWrite: false,
  side: THREE.BackSide
});
equirectMaterial.uniforms["tEquirect"].value = scene1Sky;
// ======================================================


var vMesh1 = [scene1Plane1];