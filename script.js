window.onload = function()
{
	inicia(1);
	nom_div("texturas").addEventListener('change', function(event)
	{
    inicia(this.value);
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}

function inicia(num)
{
	var canvas = document.getElementsByTagName("canvas")[0];
	var w = window.innerWidth - 50;
	var h = window.innerHeight - 100;
  	var lienzo = new THREE.WebGLRenderer({canvas:canvas});
  	lienzo.setSize(w, h);
  	//limpia el color del render...
  	lienzo.setClearColor(new THREE.Color(0xeeeeee), 1);
  	//Creando la escena...
  	var escena = new THREE.Scene();
  	//Creando la cámara...
  	var camara = new THREE.PerspectiveCamera(80,  w / h, 0.1, 100);
  	camara.position.set( 5, 5, 100 );
  	var esfera = new THREE.SphereGeometry(50, 64, 64);
  	var texturaUno = THREE.ImageUtils.loadTexture("planeta_"+num+".jpg");
    texturaUno.anisotropy = lienzo.getMaxAnisotropy();
    var materialUno = new THREE.MeshBasicMaterial( { map: texturaUno } );
  	var esfera1 = new THREE.Mesh(esfera, materialUno);
  	escena.add( esfera1 );
  	
  	var luz = new THREE.PointLight( 0xFFFFFF );
  	luz.position.set( 10, 0, 10 );
  	escena.add( luz );
  	
  	var reloj = new THREE.Clock();
  	var renderizar = function()
  	{
      esfera1.rotation.y += 0.01;
  		lienzo.render(escena, camara);
      requestAnimationFrame(renderizar);
   	}	
  	requestAnimationFrame(renderizar);
}