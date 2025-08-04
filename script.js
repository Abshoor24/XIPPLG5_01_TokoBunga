document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("kontakForm");
  const nameInput = document.getElementById("nama");
  const messageInput = document.getElementById("pesan");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
      alert("Harap isi nama dan pesan.");
      return;
    }

    const waNumber = "6289670323475"; // Ganti nomor WA kamu di sini
    const text = `Halo, saya ${name}. Saya ingin bertanya: ${message}`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    // Arahkan ke WhatsApp
    window.open(waLink, "_blank");
  });
});
