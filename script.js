function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a imagem
  const img = document.querySelector("#profile img")

  // subistituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-mode.png")
    img.setAttribute("alt", "Bernardo moura Sorrindo")
  } else {
    img.setAttribute("src", "./assets/avatar-dark-mode.png")
    img.setAttribute(
      "alt",
      "Bernardo Moura com barba, sério e olhando fixamente para a câmera"
    )
  }
}
