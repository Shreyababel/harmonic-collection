document.addEventListener('mousemove', parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 80
        const y = (window.innerWidth - e.pageY * speed) / 90
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        layer.style.left = "-10%";
    })
}