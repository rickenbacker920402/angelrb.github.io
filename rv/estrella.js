var figura = new THREE.Shape();

figura.moveTo(0,240);
figura.lineTo(90,60);
figura.lineTo(300, 0);
figura.lineTo(150,-90);
figura.lineTo(180,-300);
figura.lineTo(0,-150);
figura.lineTo(-180,-300);
figura.lineTo(-150,-90);
figura.lineTo(-300,0);
figura.lineTo(-90,60);
figura.lineTo(0,240);

var forma = new THREE.ExtrudeGeometry( figura, {amount: 50});
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/4);
malla.rotateY( Math.PI/4);
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 700;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render( escena, camara);
