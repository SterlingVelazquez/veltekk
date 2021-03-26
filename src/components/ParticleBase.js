export default function particleBase() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray = [];

    const mouse = {
        x: null,
        y: null,
        radius: 150
    }

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })

    ctx.fillStyle = 'white';
    ctx.font = '30px Verdana';
    ctx.fillText('A', 0, 30);
    const data = ctx.getImageData(0, 0, 100, 100);

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
        }
        draw() {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            var dx = mouse.x - this.x;
            var dy = mouse.y - this.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 50) {
                this.size = 50;
            } else {
                this.size = 3;
            }
        }
    }

    function init() {
        particleArray = [];
        for (var i = 0; i < 100; i++) {
            var x = Math.random() * canvas.width;
            var y = Math.random() * canvas.height;
            particleArray.push(new Particle(x, y));
        }
    }
    init();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particleArray.length; i++) {
            particleArray[i].draw();
            particleArray[i].update();
        }
        requestAnimationFrame(animate);
    }
    animate();
}