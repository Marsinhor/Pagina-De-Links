function toggleMode() {
const body = document.body
body.classList.toggle("light")


const img = document.querySelector("#profile img")
  if(body.classList.contains('light')) {img.setAttribute('src', './assets/avatar-light.png')} 
  else {img.setAttribute('src', './assets/avatar.png')}

const alt = document.querySelector("#profile img alt")  
  if (body.classList.contains('light')) {alt.setAttribute('alt', 'Foto de Marcio Carvalho Light')} 
  else {alt.setAttribute('alt', 'Foto de Marcio Carvalho Dark')}
  
  }
