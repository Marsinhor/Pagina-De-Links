function toggleMode() {
const body = document.body
body.classList.toggle("light")

const img = document.querySelector("#profile img")
  if(body.classList.contains('light')) {img.setAttribute('src', './assets/avatar-light.png')} 
  else {img.setAttribute('src', './assets/avatar.png')}

var profile = document.querySelector(".profile")
  if(body.classList.contains('light')) {profile.alt = "Foto de Marcio Carvalho modo claro"} 
  else {profile.alt = "Foto de Marcio Carvalho modo escuro"}
  
}