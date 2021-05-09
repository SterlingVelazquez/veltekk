export default function particleText(isHome) {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    var adjustX, adjustY, spacing, ballSize, canvasPosition, particleArray, textCoordinates;
    var mouse = {
        x: null,
        y: null
    }

    function initializeVariables() {
        canvasPosition = canvas.getBoundingClientRect();
        if (window.innerWidth > 1400 && (typeof canvas.width === "undefined" || adjustX !== 63.5)) {
            canvas.width = 3000;
            canvas.height = 2000;
            adjustX = 63.5;
            adjustY = 45.1;
            spacing = 15;
            // maxLineDistance = 25;
            ballSize = 8;
            mouse = {
                x: null,
                y: null,
                radius: 120
            }
            initializeParticleText();
        } else if ((window.innerWidth > 1024 && window.innerWidth <= 1400) && (typeof canvas.width === "undefined" || adjustX !== 88.5)) {
            canvas.width = 3000;
            canvas.height = 2000;
            adjustX = 88.5;
            adjustY = 61.85;
            spacing = 12;
            // maxLineDistance = 20;
            ballSize = 6;
            mouse = {
                x: null,
                y: null,
                radius: 90
            }
            initializeParticleText();
        } else if ((window.innerWidth > 768 && window.innerWidth <= 1024) && (typeof canvas.width === "undefined" || adjustX !== 27.6)) {
            canvas.width = 1024;
            canvas.height = 1000;
            adjustX = 27.6;
            adjustY = 41;
            spacing = 8;
            // maxLineDistance = 20;
            ballSize = 4;
            mouse = {
                x: null,
                y: null,
                radius: 60
            }
            initializeParticleText();
        } else if ((window.innerWidth > 560 && window.innerWidth <= 768) && (typeof canvas.width === "undefined" || adjustX !== 22.6)) {
            canvas.width = 768;
            canvas.height = 1000;
            adjustX = 22.6;
            adjustY = 55.25;
            spacing = 6.5;
            // maxLineDistance = 20;
            ballSize = 3.25;
            mouse = {
                x: null,
                y: null,
                radius: 45
            }
            initializeParticleText();
        } else if ((window.innerWidth > 400 && window.innerWidth <= 560) && (typeof canvas.width === "undefined" || adjustX !== 19.6)) {
            canvas.width = 560;
            canvas.height = 1000;
            adjustX = 19.6;
            adjustY = 78.4;
            spacing = 5;
            // maxLineDistance = 20;
            ballSize = 2.5;
            mouse = {
                x: null,
                y: null,
                radius: 35
            }
            initializeParticleText();
        } else if ((window.innerWidth > 300 && window.innerWidth <= 400) && (typeof canvas.width === "undefined" || adjustX !== 16.3)) {
            canvas.width = 400;
            canvas.height = 1000;
            adjustX = 16.3;
            adjustY = 110;
            spacing = 3.8;
            // maxLineDistance = 20;
            ballSize = 1.9;
            mouse = {
                x: null,
                y: null,
                radius: 30
            }
            initializeParticleText();
        } else if (window.innerWidth <= 300 && (typeof canvas.width === "undefined" || adjustX !== 13.5)) {
            canvas.width = 300;
            canvas.height = 1000;
            adjustX = 13.5;
            adjustY = 145.2;
            spacing = 3;
            // maxLineDistance = 20;
            ballSize = 1.5;
            mouse = {
                x: null,
                y: null,
                radius: 25
            }
            initializeParticleText();
        }
    }

    function initializeParticleText() {
        particleArray = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px Verdana';
        ctx.fillText('Veltekk', 0, 30);
        textCoordinates = ctx.getImageData(0, 0, canvas.width, 100);
        init();
    }

    class Particle {
        constructor(x, y) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.initX = this.x;
            this.initY = this.y;
            this.baseX = x;
            this.baseY = y;
            this.size = ballSize;
            this.density = (Math.random() * 30) + 1;
            this.baseColor = 255;
            this.hoverColor = 255;
            this.opacity = 0;
            this.isSet = false;
        }
        draw() {
            ctx.fillStyle = "rgba(255," + this.baseColor + ",255, " + this.opacity + ")";
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

            if (!this.isSet && (Math.abs(this.x - this.baseX) < 1) && (Math.abs(this.y - this.baseY) < 1)) this.isSet = true;
            
            if (!canvas.className.includes("erase")) {
                if (this.opacity < 1) this.opacity += 0.01;
                if (distance < mouse.radius && this.isSet) {
                    this.x -= directionX;
                    this.y -= directionY;
                    // this.hoverColor = 180 * (mouse.x !== 0 ? (mouse.x / canvas.width) : 0) + 75;
                    if (this.baseColor > 7) {
                        this.baseColor -= 8;
                    }
                } else {
                    if (this.x !== this.baseX) {
                        dx = this.x - this.baseX;
                        this.x -= dx / 25;
                    }
                    if (this.y !== this.baseY) {
                        dy = this.y - this.baseY;
                        this.y -= dy / 25;
                    }
                    if (this.baseColor < 255) {
                        this.baseColor += 2;
                    }
                }
            } else {
                if (this.x !== this.initX) {
                    dx = this.x - this.initX;
                    this.x -= dx / 25;
                }
                if (this.y !== this.initY) {
                    dy = this.y - this.initY;
                    this.y -= dy / 25;
                }
                if (this.opacity > 0) this.opacity -= 0.03;
            }
        }
    }

    function init() {
        particleArray = [];
        if (isHome) {
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
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particleArray.length; i++) {
            particleArray[i].draw();
            particleArray[i].update();
        }
        // connect();
        requestAnimationFrame(animate);
    }

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

    initializeVariables();

    initializeParticleText();

    window.addEventListener('mousemove',
        function (e) {
            mouse.x = e.x - canvasPosition.left;
            mouse.y = e.y - canvasPosition.top;
        }
    );

    window.addEventListener('touchmove',
        function (e) {
            e.preventDefault();
            mouse.x = e.touches[0].clientX - canvasPosition.left;
            mouse.y = e.touches[0].clientY - canvasPosition.top;
        }
    );

    window.addEventListener('touchend',
        function(e) {
            mouse.x = 0;
            mouse.y = 0;
        }
    )
    
    animate();

    window.addEventListener('resize', function(){
        initializeVariables();
    });
}