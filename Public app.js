
document.addEventListener("DOMContentLoaded", function () {
  console.log("AB DUOOL DATA LINK is ready!");

  const services = document.querySelectorAll(".service");

  services.forEach(function (service) {
    service.style.cursor = "pointer";
  });
});
