var iluminacion= new THREE.PointLight(0xFFFFFF);
iluminacion.position.x = 20;
iluminacion.position.y = 20;

var iluminacion1= new THREE.PointLight(0xFFFFFF);

iluminacion1.position.y = 20;

var forma = new THREE.SphereGeometry( 1 );
var material = new THREE.MeshLambertMaterial( {color: 0x00ff00 } );
var malla = new THREE.Mesh( forma, material );
malla.position.y = 2;

var base = new THREE.Mesh( new THREE.BoxGeometry(5,.1 ,5), new THREE.MeshLambertMaterial({color: 0xFFFFFF}));

var escena = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);
escena.add(iluminacion1);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 5;

var lienzo = document.getElementById("luzSinSombras");
var renderizador = new THREE. WebGLRenderer({canvas: lienzo, antialias: true});
renderizador.setSize(600,600);

renderizador.shadowMapEnabled = true;
malla.castShadow = true;
base.receiveShadow = true;
iluminacion.castShadow = true;
iluminacion1.castShadow = true;

renderizador.render(escena, camara);
