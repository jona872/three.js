console.log("Scene0 Rdy");    

var textureInCube,skyMesh,text;


//First Sky (bridge)
var r = "textures/cube/Bridge2/";
var urls = [r + "posx.jpg", r + "negx.jpg",
r + "posy.jpg", r + "negy.jpg",
r + "posz.jpg", r + "negz.jpg"];

textureInCube = new THREE.CubeTextureLoader().load(urls);
textureInCube.format = THREE.RGBFormat;
textureInCube.mapping = THREE.CubeReflectionMapping;


//material first sky
var cubeShader = THREE.ShaderLib["cube"];
var cubeMaterial = new THREE.ShaderMaterial({
  fragmentShader: cubeShader.fragmentShader,
  vertexShader: cubeShader.vertexShader,
  uniforms: cubeShader.uniforms,
  depthWrite: false,
  side: THREE.BackSide
});
cubeMaterial.uniforms["tCube"].value = textureInCube;

// Skybox ============================================
skyMesh = new THREE.Mesh(new THREE.BoxBufferGeometry(500, 500, 500), cubeMaterial);
skyMesh.name="Sky";
// skyMesh = new THREE.Mesh(new THREE.SphereBufferGeometry(100, 100, 100), cubeMaterial);
//============================================

var scene0Plane1Geometry = new THREE.PlaneGeometry( 25 , 9, 0 );
var scene0PlaneMaterial = new THREE.MeshBasicMaterial( {color: 0x274d93, transparent: true, opacity: 0.8, side: THREE.FrontSide});

var scene0Plane0 = new THREE.Mesh( scene0Plane1Geometry, scene0PlaneMaterial );
scene0Plane0.position.set( 20, 10, -60 );
scene0Plane0.name = "scene0Plane0";
scene0Plane0.origin = "scene0";
scene0Plane0.destination = "scene1";

var scene0Plane2Geometry = new THREE.PlaneGeometry( 15 , 5, 0 );
var scene0Plane1 = new THREE.Mesh( scene0Plane2Geometry, scene0PlaneMaterial );
scene0Plane1.position.set( -22, -1, -60 );
scene0Plane1.name = "scene0Plane1";
scene0Plane1.origin = "scene0";
scene0Plane1.destination = "scene2";


var vMesh0 = [scene0Plane0,scene0Plane1];

// //TEXT========================================================
// var loader = new THREE.FontLoader();
// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

    
//     var textGeometry = new THREE.BufferGeometry();
//     var color = 0x006699;

//     //Text Mesh
//     var textMesh = new THREE.MeshBasicMaterial( {
//         color: color,
//         transparent: true, //transparenta la letra
//         opacity: 0.4,
//         side: THREE.FrontSide
//     } );

//     var message = "ENTRAR";
//     var shapes = font.generateShapes( message, 50, 2 );
//     var geometry = new THREE.ShapeGeometry( shapes );

    
//     geometry.computeBoundingBox();
//     textGeometry.fromGeometry( geometry );
//     text = new THREE.Mesh( textGeometry, textMesh );
//     text.position.x = 1;
//     text.position.y = 2;
//     text.position.z = -10;
//     text.name = "Text1";
//     shapes.push.apply( shapes );

// } ); 
// //========================================================
