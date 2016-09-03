var forma=new THREE.SphereGeometry(2,32,32);
var material=new THREE.MeshBasicMaterial({color:0x0C6E15});
var copa=new THREE.Mesh(forma,material);
var forma2=new THREE.CylinderGeometry(0.5,0.5,5,64);
var material2=new THREE.MeshBasicMaterial({color:0x61380B});
var tronco=new THREE.Mesh(forma2,material2);
copa.position.set(0,1,0);
tronco.position.set(0,-1,0);

var escena = new THREE.Scene();
escena.add(copa);
escena.add(tronco);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 10;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render( escena, camara);
