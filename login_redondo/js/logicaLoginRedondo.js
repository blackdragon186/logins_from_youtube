/**
 *      ¤¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¤_
 * ___¤¶¶¶¶¶¶¶¶¤¤¤¤¤¶¶¶¶¶¶¶¶¤ _
 * __¤¶¶¶¶¶¶¶¤¤¤¤¤¤¤¤¤¶¶¶¶¶¶¶¤ _
 * _¤¶¶¶¶¤¶¶¶¶¶¤¤¤¤¤¶¶¶¶¶¤¶¶¶¶¤ _
 * _¤¶¶¶¶¶¤¶¶¶¶¶¤¤¤¶¶¶¶¶¤¶¶¶¶¶¤ _
 * _¤¶ __¤¶¶¶¶¶¶¶¶¤¶¶¶¶¶¶¶¶¤ __¶¤ _
 * _¤¶ _____¤¶¶¶¶¶¶¶¶¶¶¶¤ _____¶¤ _
 * _¤¶ _______¤¶¶¶¶¶¶¶¤ _______¶¤ _
 * __¤¶ __________¶¶ _________¶¤ _
 * ___¤¶¶ ________¶¶ ________¶¶¤ _
 * ____¤¶¶¶¶¶¶¤ ______¤¶¶¶¶¶¶¤ _
 * _¤¶¶¤¤¶¶¶¤ _________¤¶¶¶¶¤¤¶¶¤ _
 * ___¤¶¶¶¶ __¶¶¶ * ¶ * ¶¶¶__¶¶¶¶¤ _
 * __________¤¶¶¶¶¶¶¶¤ _
 * ___________¤¶¶¤¶¶¤ _
 * ___________¤¶¤¤¤¶¤ _
 * ___________¤¶¶¤¶¶¤ _
 * ___________¤¶¶¤¶¶¤ __
 * ___________¤¶¶¶¶¶¤ _
 * ___________¤¶¶¶¶¶¤ _
 * 
 * NOTE: Función anónima que se carga desde el inicio de la página web.
 * @description <p/>Script por medio del cual se otorga una animación a la
 *              página web de inicio de sesión. Su función es la intercambiar
 *              el formulario  de inicio de sesión con el formulario de registro
 *              y viceversa.
 * 
 * @author <p>Ing. Moises Morales Guzmán.</p>
 * @param none.
 * @version 1.0.0
 * @since 26/03/2018.
 * @see <p> css/stylesLoginRedondos.css<br/> index.html</p>.
 * @see http: //www.patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
 * @see https://www.danstools.com/javascript-obfuscate/index.php
 */
$(document).ready(function () {

    $("#flipToSignUp").click(function () {
        //
        $("#main").css("animation-name", "showSignUp");
        $("#main").css("transform", "translate(-50%, -50%) rotateY(180deg)");

        $("#signUpForm").css("animation-name", "hideSignIn");
        $("#signUpForm").css("transform", "translate(-50%, -50%) rotateY(0deg)");
    });

    $("#flipToSignIn").click(function () {
        //
        $("#main").css("animation-name", "hideSignUp");
        $("#main").css("transform", "translate(-50%, -50%) rotateY(0deg)");

        $("#signUpForm").css("animation-name", "showSignIn");
        $("#signUpForm").css("transform", "translate(-50%, -50%) rotateY(180deg)");
    });

});
