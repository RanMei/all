;(function (window) {
    var defaults = {
            color: '#fff',
            speed: 2,
            particles: 100,
            maxRadius: 5
        },
        html = document.getElementsByTagName('html')[0];

    var Snowfall = function (el, opts) {
        this.el = typeof el == 'string' ? getElement(el) : el;
        this.opts = extend({}, defaults, opts);
        this.ctx = this.el.getContext('2d');

        this.particles = [];
        this.angle = 0;

        this.init();
    };

    Snowfall.prototype = {
        init: function () {
            this.setDimensions();
            this.createParticles();
            this.update();

            window.addEventListener('resize', this.onResize.bind(this))
        },

        setDimensions: function () {
            var width = window.innerWidth,
                height = window.innerHeight;

            this.width = width;
            this.height = height;

            this.el.setAttribute('width', width);
            this.el.setAttribute('height', height);
        },

        createParticles: function () {
            var _this = this;

            while (this.opts.particles--) {
                _this.particles.push(new Snowfall.Particle({
                    x: Math.round(Math.random() * _this.width),
                    y: Math.round(Math.random() * _this.height),
                    d: Math.random(),
                    radius: getRandomInt(2, _this.opts.maxRadius),
                    snowfall: _this,
                    ctx: _this.ctx
                }))
            }

        },

        update: function () {
            this.angle = this.angle - 0.0001;

            this.ctx.clearRect(0, 0, this.width, this.height);
            this.particles.forEach(function (particle) {
                   particle.update()
            });


            this.draw();

            requestAnimationFrame(this.update.bind(this))
        },

        draw: function () {
            var ctx = this.ctx;

            ctx.beginPath();
            this.particles.forEach(function (particle) {
                ctx.moveTo(particle.x, particle.y);
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, true);
                ctx.fillStyle = particle.color;
            });
            ctx.fill();
        },

        //  Events
        // -------------------------------------------------

        onResize: function () {
            this.setDimensions();
        }
    };

    window.Snowfall = Snowfall;

})(window);

;(function (window, Snowfall) {
    var defaults = {
            color: '#fff',
            x: Math.round(Math.random() * 500),
            y: Math.round(Math.random() * 500),
            d: 0,
            radius: 5
        };

    Snowfall.Particle = function (params) {
        this.opts = extend({}, defaults, params);

        this.color = this.opts.color;
        this.x = this.opts.x;
        this.y = this.opts.y;
        this.d = this.opts.d;

        this.radius = this.opts.radius;

    };

    Snowfall.Particle.prototype = {
        init: function () {

        },

        update: function () {
            var params = this.opts.snowfall,
                x, y;

            x = Math.cos(params.angle) * this.d * params.opts.speed + this.x;
            y = Math.sin(params.angle) + 1 + ((this.radius/3*this.d) * params.opts.speed) + this.y;

            if (x > params.width) {
                x = 0;
            }

            if (x < 0) {
                x = params.width;
            }

            if(y > params.height) {
                y = 0;
                x = getRandomInt(0, params.width)
            }

            this.x = x;
            this.y = y;
        }
    }
})(window, Snowfall);

// Utils
function getElement (query) {
    return document.querySelector(query);
}

function extend (target) {
    target = arguments[0];

    var objects = Array.prototype.splice.call(arguments,1);

    objects.forEach(function (obj) {
        for(var prop in obj) {
            target[prop] = obj[prop]
        }
    });

    return target;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}