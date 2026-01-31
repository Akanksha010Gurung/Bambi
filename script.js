/* scroll reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.hidden').forEach(sec => observer.observe(sec));

/* floating stickers */
const stickers = ["❤️", "✨", "💗", "💖"];
const stickerBox = document.getElementById("stickers");

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = stickers[Math.floor(Math.random() * stickers.length)];
  span.style.position = "fixed";
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = "100vh";
  span.style.fontSize = "24px";
  span.style.animation = "floatUp 5s linear";
  stickerBox.appendChild(span);

  setTimeout(() => span.remove(), 5000);
}, 800);

/* no button dodge */
const noBtn = document.querySelector(".no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* yes button */
document.querySelector(".yes").addEventListener("click", () => {
  document.querySelector(".final-text").innerText =
    "You’ve always been my Valentine ❤️";
});

/* floating animation */
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-120vh); opacity: 0; }
}`;
document.head.appendChild(style);
