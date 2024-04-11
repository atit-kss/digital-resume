document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Specify the URL of the PDF file
    const pdfUrl =
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    // Create a temporary anchor element
    const downloadLink = document.createElement("a");

    // Set the href attribute to the PDF file URL
    downloadLink.href = pdfUrl;

    // Set the download attribute to force download
    downloadLink.setAttribute(
      "download",
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    );

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Programmatically trigger the click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document body
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
