let navBar = document.querySelector(".divmenu");

navBar.innerHTML = `
      <nav class="navmenu " style="background-color: rgba(53, 71, 172, 255)">
        <div class="logo-usuario">
          <img src="Imagenes/imagenRostroPrueba.jpg" alt="" id="imagenRostroPrueba" style="text-align: center" />
        </div>

        <h2 style="text-align: center; color: white" class="nombre-usuario">
          Nombre ejemplo
        </h2>
        <div class="container-opciones-perfil-medio">

          <div class="opcion">
            <a style="text-decoration: none; color: white" href="perfil.html">
            <img src="iconos/perfileIcono.png" alt="" class="iconoNav" /></a>
            <a style="text-decoration: none; color: white" href="perfil.html"><span>Perfil</span></a>

          </div>

          <div class="opcion">
            <a style="text-decoration: none; color: white" href="analicis.html">
            <img src="iconos/analiticaIcono.png" alt="" class="iconoNav" /></a>
            <a style="text-decoration: none; color: white" href="analicis.html"><span>Estadisticas</span></a>
          </div>

          <div class="opcion">
            <a style="text-decoration: none; color: white" href="notas.html"><img src="iconos/notasIcono.png" 
            alt="" class="iconoNav" /></a>
            <span>Notas</span></a>
          </div>
        </div>

        <div class="container-opciones-perfil-inferior">
          <div class="opcion">
            <a style="text-decoration: none; color: white" href="ajustes.html"><img src="iconos/ajustesIcono.png" 
            alt="" class="iconoNav" /></a>
             <a style="text-decoration: none; color: white" href="ajustes.html"><span>Ajustes</span></a>
          </div>
          <div class="opcion">
            <img src="iconos/salidaIcono.png" alt="" class="iconoNav" />
            <span><a href="login.html" style="color: white; text-decoration: none">Salir</a></span>
          </div>
        </div>
      </nav>    
    `;