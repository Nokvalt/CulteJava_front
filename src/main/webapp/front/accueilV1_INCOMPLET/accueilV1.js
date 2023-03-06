function changeText() {
  // Récupération des éléments HTML
  const text1 = document.getElementById("background1");
  const text2 = document.getElementById("background2");
  const text3 = document.getElementById("background3");
  const text4 = document.getElementById("background4");

  // Vérification si les deux premiers éléments sont visibles
  if (text1.classList.contains("animation1") && text2.classList.contains("animation2")) {
    // Remplacement des deux premiers éléments par les deux derniers
    text1.classList.remove("animation1");
    text2.classList.remove("animation2");
    text1.classList.remove("animation3");
    text2.classList.remove("animation4");
  } else {
    // Remplacement des deux derniers éléments par les deux premiers
    text1.classList.add("animation1");
    text2.classList.add("animation2");
    text3.classList.add("animation3");
    text4.classList.add("animation4");
  }
}

setInterval(changeText, 2000);
