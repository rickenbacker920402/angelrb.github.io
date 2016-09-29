//Camra de Perspectiva
var campoVision = 45; //Grados
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano =100;
var planoLejano = 1000;
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z = -150;
camara.position.x = 45;
camara.position.y = -50;
camara.lookAt(new THREE.Vector3(45,45,0));

//ILUMINACION
var iluminacion=new THREE.PointLight(0xFF00FF);
iluminacion.position.x = -45;
iluminacion.position.y = -45;
iluminacion.position.z = -120;

var iluminacion1=new THREE.PointLight(0x00FFFF);
iluminacion1.position.x = 145;
iluminacion1.position.y = 145;
iluminacion1.position.z = -120;

var iluminacion2=new THREE.PointLight(0xFFFF00);
iluminacion2.position.x = 145;
iluminacion2.position.y = -45;
iluminacion2.position.z = -120;

//CASILLA BLANCA
var TEXTURACB = new Object();
TEXTURACB.retrollamada = function (texturacb){
var materialcb = new THREE.MeshBasicMaterial({ map: texturacb} );
TEXTURACB.malla = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), materialcb);

}

TEXTURACB.setup = function(){
TEXTURACB.escena = new THREE.Scene();

var cargadorcb = new THREE.TextureLoader();
cargadorcb.load("earth.jpg", TEXTURACB.retrollamada);

}
if (TEXTURACB.malla !== undefined) {
TEXTURACB.malla.rotateX(0.01);
TEXTURACB.malla.rotateY(0.01);
}



TEXTURACB.setup();


//CASILLA GRIS
var formaCasillaGris=new THREE.BoxGeometry(10,10,10,10,10,10);
var mallaCasillaGris=new THREE.MeshLambertMaterial({color:0x6b6b6b});

//Torre 1
var torreMalla = new THREE.Mesh(torreForma,material);
torreMalla.rotateX(Math.PI*3/2);
torreMalla.scale.set(5,5,7);
torreMalla.position.set(10,10,-10);

//Torre 2
material2.transparent = true;
material2.opacity = 0.75;
var torreMalla1 = new THREE.Mesh(torreForma,material2);
torreMalla1.rotateX(Math.PI*3/2);
torreMalla1.scale.set(5,5,7);
torreMalla1.position.set(10,80,-10);

//Torre 3
var material3 = new THREE.MeshLambertMaterial({color : 0xfafdff});
material3.opacity = 0.5;
material3.transparent = true;
var torreMalla2 = new THREE.Mesh(torreForma,material3);
torreMalla2.rotateX(Math.PI*3/2);
torreMalla2.scale.set(5,5,7);
torreMalla2.position.set(80,10,-10);

//Torre 4
var material4 = new THREE.MeshLambertMaterial({color : 0x2c4d64});
material4.opacity = 0.25;
material4.transparent = true;
var torreMalla3 = new THREE.Mesh(torreForma,material4);
torreMalla3.rotateX(Math.PI*3/2);
torreMalla3.scale.set(5,5,7);
torreMalla3.position.set(80,80,-10);

//TABLERO
var formaTablero=new THREE.BoxGeometry(100,100,5,10,10,10);
var mallaTablero=new THREE.MeshLambertMaterial({color:0x412a09});
var Tablero=new THREE.Mesh(formaTablero,mallaTablero);
Tablero.position.set(45,45,0);

var casillaBlanca = new Array();
var casillaGris = new Array();

var gris=1;
var blanca=1;

//ESCENA
var escena = new THREE.Scene();

for(var i=1; i<=32; i++){
casillaBlanca[i] = new THREE.Mesh(TEXTURACB.malla, materialcb);
casillaGris[i] = new THREE.Mesh(formaCasillaGris, mallaCasillaGris);
casillaBlanca[i].receiveShadow = true;
casillaGris[i].receiveShadow = true;
  }

for(var f=1; f<=8; f++)
{
  for(var c=1; c<=8; c++)
  {
    
    if(f%2==0)
    {
      if(c%2==0)
      {
       casillaGris[gris].position.set((f*10),(c*10),0);
       escena.add(casillaGris[gris]);
       gris=gris+1;
      }
      else
      {
       casillaBlanca[blanca].position.set((f*10),(c*10),0);
       escena.add(casillaBlanca[blanca]);
       blanca=blanca+1;
      }
    }
    else
    {
      if(c%2==0)
      {
      casillaBlanca[blanca].position.set((f*10),(c*10),0);
      escena.add(casillaBlanca[blanca]);
      blanca=blanca+1;
      }
      else
      {
      casillaGris[gris].position.set((f*10),(c*10),0);
      escena.add(casillaGris[gris]);
      gris=gris+1;
      }
    }
  }
}

escena.add(Tablero);
escena.add(torreMalla);
escena.add(torreMalla1);
escena.add(torreMalla2);
escena.add(torreMalla3);
escena.add(iluminacion);
escena.add(iluminacion1);
escena.add(iluminacion2);
TEXTURACB.escena.add(TEXTURACB.malla);

//RENDERIZADOR
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight);
renderizador.shadowMapEnabled = true;
document.body.appendChild(renderizador.domElement);

Tablero.castShadow = true;
Tablero.receiveShadow = true;
torreMalla.castShadow = true;
torreMalla1.castShadow = true;
torreMalla2.castShadow = true;
torreMalla3.castShadow = true;
iluminacion.castShadow = true;
iluminacion1.castShadow = true;
iluminacion2.castShadow = true;
TEXTURACB.renderizador.render(escena, camara);
renderizador.render(escena, camara);
