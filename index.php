<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>VI Foro Paliativo</title>
	<link rel="icon" type="image/png" href="assets/favicon.png" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
	<!--  -->
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	<header id="encabezado" class="cell">

		<div class="grid-container">

			<div id="logo" class="titulo grid-x small-6 medium-5">
				<div id="logo-texto" class="titulo">
					<a href="index.html">VI FORO DE CUIDADOS PALIATIVOS</a>
				</div>
			</div>

			<nav id="menu" class="grid-x small-6 medium-7">

				<ul id="menu-lista" class="cell hide-for-small-only">


					<li id="inicio_menu" class="menus">Inicio</li>
					<li id="registro_menu" class="menus">Registro</li>
					<li id="programa_menu" class="menus">Programa</li>
					<li id="contacto_menu" class="menus">Contacto</li>

				</ul>

				<div class="cell boton-menu-movil show-for-small-only">
					<div class="row align-middle">
						<a class="columns barras ha end">
							<i class="fa fa-bars"></i>
						</a>
					</div>

				</nav>

			</div>

		</header>
		<!-- fondo degradado -->
		<div id="fondo-degradado" class="grid-x"></div>
		<!-- menu movil -->
		<div id="menu-movil" class="grid-x">

			<ul id="menu-lista-movil" class="row align-center show-for-small-only">

				<li id="inicio_menu-movil" class="columns small-3 menus">Inicio</li>
				<li id="registro_menu-movil" class="columns small-3 menus">Registro</li>
				<li id="programa_menu-movil" class="columns small-3 menus">Programa</li>
				<li id="contacto_menu-movil" class="columns small-3 menus">Contacto</li>

			</ul>

		</div>
		<!-- heroscreen  -->
		<section id="inicio_screen" class="grid-container grid-padding-x screens ha">

			<div id="cartel" class="grid-x h-seccion imgLiquid imgLiquidNoFill">
				<img src="assets/heroscreen.png" alt="Foros Paliativos home page">
			</div>

			<div id="logos-cartel" class="grid-x">

				<div class="cell small-12 medium-6 h-logos">
					<div class="grid-x imgLiquid imgLiquidNoFill">
						<img src="assets/gea-logo.png" alt="Hospital GEA">
					</div>
				</div>
				<!--  
				<div class="cell small-12 medium-4 h-logos">
					<div class="grid-x imgLiquid imgLiquidNoFill">
						<img src="assets/ALC-logo.png" alt="ALC">
					</div>
				</div>
			 -->
				<div class="cell small-12 medium-6 h-logos">
					<div class="grid-x imgLiquid imgLiquidNoFill">
						<img src="assets/facu-psci-logo.png" alt="">
					</div>
				</div>

			</div>

		</section>

		<!--  -->
		<section id="programa" class="grid-container screens">

			<div class="grid-x pdf">
				<center>
					<object data="assets/vi.foro.de.cuidados.paliativos.pdf" type="application/pdf">
						alt : <a href="assets/vi.foro.de.cuidados.paliativos.pdf">Cuidados Paliativos</a>
					</object>
				</center>
			</div>

		</section>
		<!--  -->
		<section id="contacto_screen" class="grid-container screens h-contacto">

			<div class="grid-x padding-x">

				<div id="contacto_info" class="cell small-12 medium-7">
					<h2>CONTÁCTANOS</h2><br>
					<div id="division" class="ha"><strong>División de Clínica del Dolor y Cuidados Paliativos<br> Hospital Dr Manuel Gea González</strong></div><!--//division--><br>
					<p id="info-contacto">
						<i class="fas fa-map-marker-alt"></i><span> Calzada de Tlalpan 4800, col. Sección XVI,<br>Tlalpan, Ciudad de México, 14080</span><br><br>
						<i class="fas fa-phone"></i><span> Tel. 4000-3000 ext 8010 y 8017</span><br><br>
						<i class="fas fa-envelope"></i><span> nombre@gmail.com</span><br><br>
					</p>
				</div>

				<div id="contacto_form" class="cell small-12 medium-5">
					<br>
					<br>
					<br>
					<form id="formulario" action="form/response.php">
						<input type="text" id="correo" name="correo" placeholder="Correo Electrónico">
						<br><br>
						<textarea id="mensaje" name="mensaje" rows="7" placeholder="Mensaje"></textarea>
						<br><br>
						<input id="enviar" type="submit" value="Enviar">
						<!-- respuesta -->
						<p id="formResponse"><?php //if($error) { echo($error); } ?></p>
						<p id="mensaje_res" class="success"><i class="fa fa-success"></i></p>
						<div data-abide-error class="alert callout" style="display: none;">
							<p class="warning small_font"><i class="fa fa-alert"></i> Hay algunos errores, faltan campos obligatorios.</p>
						</div>
					</form>

				</div>

			</div>
		</section>

		<footer id="footer" class="cell">
			<div class="grid-container">

				<div id="titulo_footer" class="small-12 medium-3 grid-x footer-item">
					<div class="cell ha footer-item-center">

						VI FORO DE CUIDADOS PALIATIVOS

					</div>
				</div>

				<div id="derechos" class="small-12 medium-5 grid-x footer-item align-center">
					<small>Todos los derechos reservados | 2018.</small>
				</div>

				<div id="redes" class="small-12 medium-4 grid-x footer-item">
					<a href="https://www.facebook.com/Paliativos-Gea-287755225035641/" target="_blank"><div id="facebook" class="footer-item"><i class="fab fa-facebook fa-lg"></i></div></a>
					<a href="https://twitter.com/PaliativosGea" target="_blank"><div id="twitter" class="footer-item"><i class="fab fa-twitter fa-lg"></i></div></a>
				</div>

			</div>
		</footer>

		<!--  -->
		<script src="node_modules/jquery/dist/jquery.js"></script>
		<script src="node_modules/what-input/dist/what-input.js"></script>
		<script src="node_modules/foundation-sites/dist/js/foundation.js"></script>
		<script src="bower_components/imgLiquid/js/imgLiquid-min.js"></script>
		<script src="js/app.js"></script>
	</body>
	</html>
