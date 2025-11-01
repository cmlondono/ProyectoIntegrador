let navBar = document.querySelector(".divmenu");

navBar.innerHTML=`
      <nav class="navmenu " style="background-color: rgba(53, 71, 172, 255)">
        <div class="logo-usuario">
          <img src="Imagenes/imagenRostroPrueba.jpg" alt="" id="imagenRostroPrueba" style="text-align: center" />
        </div>

        <h2 style="text-align: center; color: white" class="">
          Nombre ejemplo
        </h2>
        <div class="container-opciones-perfil-medio">
          <div class="opcion">
            <img src="iconos/dashBoardIcono.png" alt="" class="iconoNav" />
            <a style="text-decoration: none; color: white" href="index.html"><span>DashBoard</span></a>
          </div>
          <div class="opcion">
            <img src="iconos/perfileIcono.png" alt="" class="iconoNav" />
            <span>Perfil</span>
          </div>
          <div class="opcion">
            <a style="text-decoration: none; color: white" href="analicis.html"><img src="iconos/analiticaIcono.png"
                alt="" class="iconoNav" /></a>
            <a style="text-decoration: none; color: white" href="analicis.html"><span>Estadisticas</span></a>
          </div>
          <div class="opcion">
            <img src="iconos/notasIcono.png" alt="" class="iconoNav" />
            <a style="text-decoration: none; color: white" href="notas.html"><span>notas</span></a>
          </div>
        </div>

        <div class="container-opciones-perfil-inferior">
          <div class="opcion">
            <span><img src="iconos/ajustesIcono.png" alt="" class="iconoNav" />Ajustes</span>
          </div>
          <div class="opcion">
            <img src="iconos/salidaIcono.png" alt="" class="iconoNav" />
            <span><a href="login.html" style="color: white; text-decoration: none">Salir</a></span>
          </div>
        </div>
      </nav>    
    `;