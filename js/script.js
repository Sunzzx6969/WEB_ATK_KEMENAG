// Fungsi toggle untuk sidebar
function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("hide");
  document.querySelector(".main-content").classList.toggle("full");
}

// Auto include sidebar dan topbar modular
window.addEventListener("DOMContentLoaded", () => {
  // Load sidebar
  fetch("components/sidebar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("sidebar-container").innerHTML = data;

    // Setelah sidebar dimuat, aktifkan tombol toggle
    const toggleBtn = document.querySelector(".toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleSidebar);
    }
  });

  // Load topbar
  fetch("components/topbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("topbar-container").innerHTML = data;

      // Setelah topbar dimuat, pastikan tombol toggle aktif
      const toggleBtn = document.querySelector(".hamburger");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleSidebar);
      }
    });
});
