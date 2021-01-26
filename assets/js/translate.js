lang = "English"
//Detect browser language
var browserLang = navigator.language || navigator.userLanguage;
switch (browserLang.substring(0,2)) {
  case "es":
  var lang = "Español";
  break;
  case "en":
  var lang = "English";
  break;
}
switchLanguage(lang);

function googlePlay() {
  window.location.href = "https://play.google.com/store/apps/details?id=com.giorgioproductions.youdarling";
}

function switchLanguage(lang) {

  elements = ["findcollabs","why","because","video","screenshots","get","download"]
  for (element of elements) {
    window[element] = document.getElementById(element);
  }

  switch (lang) {

    case "English":
    findcollabs.innerHTML="Find collabs!"
    why.innerHTML="WHY COLLABORATION PLUS?"
    because.innerHTML="When it comes to creating content, it can be difficult to find people who want to collaborate with you. This app is made to facilitate the process of finding collaborators for your projects."
    video.innerHTML="Watch Promo Video"
    screenshots.innerHTML="SCREENSHOTS"
    get.innerHTML="GET THE APP"
    download.innerHTML="For now, the app is only available for Android, due to the complication of uploading the app to the App Store, but if the app becomes popular, it may be considered to be launched for iOS in the future."
    break;
    case "Español":
    findcollabs.innerHTML="¡Encuentra colaboraciones!"
    why.innerHTML="¿POR QUÉ COLLABORATION PLUS?"
    because.innerHTML="A la hora de crear contenido puede ser difícil encontrar gente que quiera colaborar contigo. Esta aplicación está hecha para facilitar el proceso de encontrar colaboradores para tus proyectos."
    video.innerHTML="Mira el vídeo de presentación"
    screenshots.innerHTML="CAPTURAS DE PANTALLA"
    get.innerHTML="DESCARGA LA APLICACIÓN"
    download.innerHTML="Por ahora, la aplicación solo está disponible para Android, debido a la complicación de subir la aplicación a la App Store, pero si la aplicación se hace popular se podrá considerar lanzarla para iOS en un futuro."
    break;

  }
}
