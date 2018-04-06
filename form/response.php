<?php


if($_SERVER["REQUEST_METHOD"] === "POST") {

	if(isset($_POST['contactFormSubmitted'])) {
    $email = $_POST['correo'];
			$mensaje = $_POST['mensaje'];

			$formcontent="Registro desde sitio \n\nCorreo: $email\n\nMensaje: $mensaje";
			$message = wordwrap($formcontent, 35, "\r\n");
			$recipient = "";//recipiente
			$subject = "Contacto desde foropaliativosgea.com";
			$mailheader = "De: $email \r\n";
			mail($recipient, $subject, $message, $mailheader) or die("Algo ha salido mal, intente nuevamente.");
			echo "<script>$('#formResponse').html('Gracias! tu correo se ha enviado exitosamente.'); </script>";
		}

}
