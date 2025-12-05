// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// FORM HANDLING
document.getElementById("formKontak").addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    document.getElementById("hasilForm").innerHTML = `
        <div style="
            padding: 15px;
            background: #e6f3ff;
            border-left: 4px solid #007bff;
            margin-top: 10px;
        ">
            Terima kasih <b>${nama}</b>! Pesan kamu sudah diterima.<br>
            Kami akan membalas melalui email: <b>${email}</b>
        </div>
    `;
});