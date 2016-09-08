var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
