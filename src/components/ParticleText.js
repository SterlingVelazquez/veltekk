export default function particleText() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    var adjustX, adjustY, spacing, mouse, ballSize;

    if (window.innerWidth < 1200) {
        canvas.width = 1500;
        canvas.height = 600;
        ctx.font = '15px Verdana';
        adjustX = 35.5;
        adjustY = 1.5;
        spacing = 12;
        // maxLineDistance = 20;
        ballSize = 6;
        mouse = {
            x: null,
            y: null,
            radius: 60
        }
    } else {
        canvas.width = 2000;
        canvas.height = 800;
        ctx.font = '20px Verdana';
        adjustX = 30;
        adjustY = 5;
        spacing = 15;
        // maxLineDistance = 25;
        ballSize = 8;
        mouse = {
            x: null,
            y: null,
            radius: 120
        }
    }

    var particleArray = [];

    var canvasPosition = canvas.getBoundingClientRect();
    window.addEventListener('mousemove',
        function (e) {
            mouse.x = e.x - canvasPosition.left;
            mouse.y = e.y - canvasPosition.top;
        }
    );

    ctx.fillStyle = 'white';
    ctx.fillText('Veltekk', 0, 30);
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, 100);

    class Particle {
        constructor(x, y) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = ballSize;
            this.baseX = x;
            this.baseY = y;
            this.density = (Math.random() * 30) + 1;
            this.baseColor = 255;
        }
        draw() {
            ctx.fillStyle = "rgb(255," + this.baseColor + ",255)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            var dx = mouse.x - this.x;
            var dy = mouse.y - this.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            var forceDirectionX = dx / distance;
            var forceDirectionY = dy / distance;
            var maxDistance = mouse.radius;
            var force = (maxDistance - distance) / maxDistance;
            var directionX = forceDirectionX * force * this.density;
            var directionY = forceDirectionY * force * this.density;

            if (distance < mouse.radius) {
                this.x -= directionX;
                this.y -= directionY;
                if (this.baseColor > 7) {
                    this.baseColor -= 8;
                }
            } else {
                if (this.x !== this.baseX) {
                    dx = this.x - this.baseX;
                    this.x -= dx / 50;
                }
                if (this.y !== this.baseY) {
                    dy = this.y - this.baseY;
                    this.y -= dy / 50;
                }
                if (this.baseColor < 255) {
                    this.baseColor += 1;
                }
            }
        }
    }

    function init() {
        particleArray = [];
        for (var y = 0, y2 = textCoordinates.height; y < y2; y++) {
            for (var x = 0, x2 = textCoordinates.width; x < x2; x++) {
                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                    var positionX = x + adjustX;
                    var positionY = y + adjustY;
                    particleArray.push(new Particle(positionX * spacing, positionY * spacing));
                }
            }
        }
    }
    init();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particleArray.length; i++) {
            particleArray[i].draw();
            particleArray[i].update();
        }
        // connect();
        requestAnimationFrame(animate);
    }
    animate();

    /* function connect() {
        var opacityValue = 1;
        for (var a = 0; a < particleArray.length; a++) {
            for (var b = a; b < particleArray.length; b++) {
                var dx = particleArray[a].x - particleArray[b].x;
                var dy = particleArray[a].y - particleArray[b].y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxLineDistance) {
                    opacityValue = 1 - (distance / maxLineDistance);
                    ctx.strokeStyle = 'rgba(' + particleArray[a].baseColor + ',255,255,' + opacityValue + ')';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(particleArray[a].x, particleArray[a].y);
                    ctx.lineTo(particleArray[b].x, particleArray[b].y);
                    ctx.stroke();
                }
            }
        }
    } */

    window.addEventListener('resize', function(){
        canvasPosition = canvas.getBoundingClientRect();
      });
}