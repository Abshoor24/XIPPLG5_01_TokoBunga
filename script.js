document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("waForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
      alert("Harap isi nama dan pesan.");
      return;
    }

    const phone = "6289670323475"; // GANTI dengan nomor kamu
    const text = `Halo, saya ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${phone}?text=${encodedText}`;

    alert("pesan berhasil dikirim")
    
    form.reset();
    name.value = "";
    message.value = "";

    // Buka di tab baru
    window.open(waLink, "_blank");
    
  });
});

