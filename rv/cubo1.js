var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var cube = new THREE.Mesh( geometry, material );
var escena = new THREE.Scene();
escena.add( cube );
