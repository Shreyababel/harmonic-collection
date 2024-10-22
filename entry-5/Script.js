// for parallax effect

document.addEventListener('mousemove', parallax); 
function parallax(e)
{
    this.querySelectorAll('.layer').forEach(layer =>
        {
    const speed= layer.getAttribute('data-speed') 
    const x = (window.innerWidth - e.pageX * speed) /90
    const y = (window.innerWidth - e.pageY * speed) /90 
    layer.style.transform = `translateX($(x)px) translateY(${y}px)` ; 
    layer.style.left = "-10%";
    
    })
}

//animation fro whole page
var t1=sgsap.timeline();
t1.from('.center h1', {
    x:innerWidth * -1,
    opacity:0,
    stagger:-0.02
})
t1.from('nav > a',{
    y:-300
})
t1.from('nav ul li a',{
    y:-300,
    stagger: .2
})
t1.from('.line span',{
    height: "0px",
    stagger: .4
})
t1.from('.Slink a',1,{
    opacity:0,
    x: -300,
    stagger:.2
})
t1 .from('.img img',2,{
    opacity:0,
    x: 10,
    stagger:.2
})