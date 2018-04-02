/**
 * @description Script que contiene las animaciones del 
 *              formulario contenido en index.html
 * 
 * @author Ing. Moises M.G.
 * @version 1.0.0
 * @since 27/03/2018
 * @see index.html, scLogin.css
 * @see https://www.danstools.com/javascript-obfuscate/index.php
 */
$(document).ready(function () {

    /** @description Oculta el formulario de inicio de sesión
     *               y muestra el de registro*/
    $("#signup_btn").click(function () {
        $("#main").animate({ left: "22.5%" }, 400);
        $("#main").animate({ left: "30%" }, 500);
        $("#loginform").css("visibility", "hidden");
        $("#loginform").animate({ left: "25%" }, 400);

        $("#signupform").animate({ left: "17%" }, 400);
        $("#signupform").animate({ left: "30%" }, 500);
        $("#signupform").css("visibility", "visible");
    });

    /** @description Oculta el formulario de registro
     *               y muestra el de inicio de sesión*/
    $("#login_btn").click(function () {
        $("#main").animate({ left: "77.5%" }, 400);
        $("#main").animate({ left: "70%" }, 500);
        $("#signupform").css("visibility", "hidden");
        $("#signupform").animate({ left: "75%" }, 400);

        $("#loginform").animate({ left: "83.5%" }, 400);
        $("#loginform").animate({ left: "70%" }, 500);
        $("#loginform").css("visibility", "visible");
    });
});
