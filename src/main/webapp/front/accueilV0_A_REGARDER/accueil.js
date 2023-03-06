function changeText() {
  // Récupération des éléments HTML
  const text1 = document.getElementById("background1");
  const text2 = document.getElementById("background2");
  const text3 = document.getElementById("background3");
  const text4 = document.getElementById("background4");

  // Vérification si les deux premiers éléments sont visibles
  if (text1.style.display === "flex" && text2.style.display === "flex") {
    // Remplacement des deux premiers éléments par les deux derniers
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "flex";
    text4.style.display = "flex";
  } else {
    // Remplacement des deux derniers éléments par les deux premiers
    text1.style.display = "flex";
    text2.style.display = "flex";
    text3.style.display = "none";
    text4.style.display = "none";
  }
}

setInterval(changeText, 5000);
