document.addEventListener("DOMContentLoaded", () => {
    const bio = document.getElementById("bio");
    bio.addEventListener("mouseover", () => {
      bio.style.backgroundColor = "#e0f7fa";
    });
    bio.addEventListener("mouseout", () => {
      bio.style.backgroundColor = "#fff";
    });
  });
  