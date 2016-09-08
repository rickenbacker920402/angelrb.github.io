var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var malla = new THREE.Mesh( geometry, material );
malla.rotateY(Math.PI/4);
malla.rotateZ(Math.PI/4);
malla.rotateX(Math.PI/4);
var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();

camara.position.z=10;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,
                    window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
