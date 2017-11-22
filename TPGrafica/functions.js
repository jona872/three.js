//@mesh array
//@scene to be added
var addElementsToScene = (vMesh,scene) => {
	vMesh.forEach(mesh => {
		scene.add(mesh);
	});	
}

//@mesh array
//@scene to be added
var removeElementsFromScene = (vMesh,scene) => {
	vMesh.forEach(mesh => {
		scene.remove(mesh);
	});	
}

// //@mesh array (async problems)
// //@scene to be added
// var addTextToScene = (textWrapper,scene,text,x,y,z) => {
// 	var loader = new THREE.FontLoader();
	
// 				loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
	
// 						var textGeo = new THREE.TextGeometry( text, {
// 								font: font,
// 								size: 1,
// 								height: 0,
// 								curveSegments: 2,
// 								bevelThickness: 0,
// 								bevelSize: 0,
// 								bevelEnabled: true
// 						} );
	
// 						var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
	
// 						textWrapper = new THREE.Mesh( textGeo, textMaterial );
// 						textWrapper.position.set( x,y,z );
	
// 						scene.add( textWrapper );
// 				} );
// }

var addTextScene0 = () => {
	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
		var textToScene1Geometry,textToScene2Geometry;	
		textToScene1Geometry = new THREE.TextGeometry( "Escena 1", {
					font: font,
					size: 1,
					height: 0,
					curveSegments: 2,
					bevelThickness: 0,
					bevelSize: 0,
					bevelEnabled: true
			});

			textToScene2Geometry = new THREE.TextGeometry( "Escena 2", {
				font: font,
				size: 1,
				height: 0,
				curveSegments: 2,
				bevelThickness: 0,
				bevelSize: 0,
				bevelEnabled: true
		});

			var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
			textToScene1 = new THREE.Mesh( textToScene1Geometry, textMaterial );
			textToScene1.position.set( 3.5,3,-20 );
			textToScene1.specialType = "text";
			textToScene1.destination = "scene1";

			textToScene2 = new THREE.Mesh( textToScene2Geometry, textMaterial );
			textToScene2.position.set( -14, -1, -30 );
			textToScene2.specialType = "text";
			textToScene2.destination = "scene1";

			containerScene.add( textToScene1 );
			containerScene.add( textToScene2 );
	} );
}



var addTextScene1 = () => {
	
	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
		var textGeo;	
		textGeo = new THREE.TextGeometry( "Escena 0", {
					font: font,
					size: 1,
					height: 0,
					curveSegments: 2,
					bevelThickness: 0,
					bevelSize: 0,
					bevelEnabled: true
			});

			var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
			text = new THREE.Mesh( textGeo, textMaterial );
			text.position.set( -6,-2,-15 );
			text.specialType = "text";
			text.destination = "scene0";
			containerScene.add( text );
	} );
	
}

var addTextScene2 = () => {
	
	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
		var textGeo;	
		textGeo = new THREE.TextGeometry( "Escena 0", {
					font: font,
					size: 1,
					height: 0,
					curveSegments: 2,
					bevelThickness: 0,
					bevelSize: 0,
					bevelEnabled: true
			});

			var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
			text = new THREE.Mesh( textGeo, textMaterial );
			text.position.set( 2,2,-25 );
			text.specialType = "text";
			text.destination = "scene0";
			containerScene.add( text );
	} );
	
}




function onClicking (e) {
	
	// console.log("positivo")
				  e.preventDefault();

				  mouseVector.x = ( e.clientX / renderer.domElement.clientWidth ) * 2 - 1;
				  mouseVector.y = - ( e.clientY / renderer.domElement.clientHeight ) * 2 + 1;	
				  raycaster.setFromCamera( mouseVector, mainCamera );
  
				  var intersects = raycaster.intersectObjects( containerScene.children,true );
			

		if (intersects.length > 1){
		  for ( var i = 0; i < intersects.length; i++ ) {
			console.log(intersects[ i ].object.origin);
			console.log(intersects[ i ].object.destination);
			
			if (intersects[ i ].object.destination == "scene1" ){
			  addElementsToScene(vMesh1,containerScene);
			  removeElementsFromScene(vMesh0,containerScene);
			  removeElementsFromScene(vMesh2,containerScene);
			  skyMesh.material = equirectMaterial;
			  equirectMaterial.uniforms["tEquirect"].value = scene1Sky;

			  for ( var i = containerScene.children.length-1; i > 0  ; i-- ) {
				if (containerScene.children[i].specialType){
				  containerScene.remove(containerScene.children[i]);
				}
				if (containerScene.children[i].specialType && containerScene.children[i].origin !== "scene1"){
				  containerScene.remove(containerScene.children[i]);
				}
			  }
			  addTextScene1();
			  break;
			} else if (intersects[ i ].object.destination == "scene0" ){
			  addElementsToScene(vMesh0,containerScene);
			  removeElementsFromScene(vMesh1,containerScene);
			  removeElementsFromScene(vMesh2,containerScene);
			  skyMesh.material = cubeMaterial;
			  
			  for ( var i = containerScene.children.length-1; i > 0  ; i-- ) {
				if (containerScene.children[i].specialType){
				  containerScene.remove(containerScene.children[i] ||  containerScene.children[i].origin !== "scene0");
				}
			  }
			  addTextScene0();
			  break;
			} else if (intersects[ i ].object.destination == "scene2"){
			  addElementsToScene(vMesh2,containerScene);
			  removeElementsFromScene(vMesh0,containerScene);
			  removeElementsFromScene(vMesh1,containerScene);
			  skyMesh.material = scene2equirectMaterial;
			  equirectMaterial.uniforms["tEquirect"].value = scene2Sky;
			  
			  for ( var i = containerScene.children.length-1; i > 0  ; i-- ) {
				if (containerScene.children[i].specialType){
				  containerScene.remove(containerScene.children[i]);
				}
				if (containerScene.children[i].specialType && containerScene.children[i].origin !== "scene2"){
				  containerScene.remove(containerScene.children[i]);
				} 
			  }
			  addTextScene2();
			  break;
			}       
			
		  }//for
		}//if > 0


			  }