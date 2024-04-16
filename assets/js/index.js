document.getElementById("downloadButton").addEventListener("click", function() {
  const pdfUrl = "/assets/atit-patel-resume.pdf"; // This should match the direct URL path that works

  const downloadLink = document.createElement("a");
  downloadLink.href = pdfUrl;
  downloadLink.setAttribute("download", "atit-patel-resume.pdf"); // This suggests a default filename to save as
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

// 1
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar_menu-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      if (!document.querySelector("body").classList.contains("overflow")) {
        document
          .querySelectorAll("body")
          .forEach((target) => target.classList.add("overflow"));
      } else {
        document
          .querySelectorAll("body")
          .forEach((target) => target.classList.remove("overflow"));
      }
    });
  });
  document.querySelectorAll(".nav-mobile-link").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("body")
        .forEach((target) => target.classList.remove("overflow"));
    });
  });

  $(".logo-wrapper").click(function () {
    scrollToTop();
  });
});

// Scroll To Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 2
Webflow.push(function () {
  // No autocomplete for all forms
  $("form").attr("autocomplete", "off");
});
