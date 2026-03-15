// Animated Dots Background
const canvas = document.getElementById('dots-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dotsArray = [];
for(let i=0;i<150;i++){
    dotsArray.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2+1, dx:(Math.random()-0.5)*0.5, dy:(Math.random()-0.5)*0.5});
}
function animateDots(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dotsArray.forEach(dot=>{
        ctx.beginPath();
        ctx.arc(dot.x,dot.y,dot.r,0,Math.PI*2);
        ctx.fillStyle='rgba(0,255,255,0.5)';
        ctx.fill();
        dot.x+=dot.dx; dot.y+=dot.dy;
        if(dot.x<0||dot.x>canvas.width) dot.dx*=-1;
        if(dot.y<0||dot.y>canvas.height) dot.dy*=-1;
    });
    requestAnimationFrame(animateDots);
}
animateDots();

// Contact form sending via email (using mailto)
document.getElementById('contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    const name=this.name.value;
    const email=this.email.value;
    const msg=this.message.value;
    window.location.href=`mailto:your-email@example.com?subject=Contact from ${name}&body=${msg}%0A%0AFrom: ${email}`;
});

// Animated hero quotes
const quotes=["Cloud is the limit – deploy with confidence.","Automate, Monitor, Scale – DevOps Way","Code, Build, Ship, Repeat"];
let index=0;
setInterval(()=>{
    document.getElementById('quote-hero').textContent=quotes[index];
    index=(index+1)%quotes.length;
},6000);
