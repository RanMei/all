;(function (window) {

    var Snowfall = function (selector, opts) {
        this.el = document.querySelector(selector);
        
        this.width = this.el.width = 1000;
        this.height = this.el.height = 1000;

        this.ctx = this.el.getContext('2d');

        this.config = {
            color: 'white',
            speed: 2,
            count: 100,
            maxRadius: 5
        }

        for(var key in opts){
            this.config[key] = opts[key];
        }

        this.particles = [];
        this.angle = 0;

        this.init();
    };

    Snowfall.prototype = {
        init: function () {
            // this.el.width = 1000;
            // this.el.height = 1000;
            // this.setDimensions();
            this.createParticles();
            this.render();
        },

        createParticles: function () {
            var self = this;

            while (this.config.count--) {
                self.particles.push(new Snowfall.Particle({
                    x: Math.round( Math.random() * self.width ),
                    y: Math.round( Math.random() * self.height ),
                    d: Math.random(),
                    radius: getRandomInt(2, self.config.maxRadius),
                    snowfall: self,
                    ctx: self.ctx
                }))
            }

        },

        render: function () {
            var self = this;
            this.angle = this.angle - 0.0001;

            this.ctx.clearRect(0, 0, this.width, this.height);
            this.particles.forEach(function (particle) {
                particle.update();
                particle.draw(self.ctx);
            });

            requestAnimationFrame( this.render.bind(this) )
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

        this.color = 'white';
        this.x = Math.round( Math.random() * 1000 );
        this.y = Math.round( Math.random() * 1000 );
        this.d = this.opts.d;

        this.radius = this.opts.radius;

    };

    Snowfall.Particle.prototype = {

        update: function () {
            var params = this.opts.snowfall,
                x, y;

            x = Math.cos(params.angle) * this.d * params.config.speed + this.x;
            y = Math.sin(params.angle) + 1 + ((this.radius/3*this.d) * params.config.speed) + this.y;

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
        },
        draw: function(ctx){
            ctx.beginPath();
            ctx.moveTo( this.x, this.y );
            ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true );
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
})(window, Snowfall);

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

window.onload = function() {
    new Snowfall('#snow')
    new Snowfall('#snow-top', {
        maxRadius: 10
    })
    new Snowfall('#snow-blur', {
        count: 10,
        maxRadius: 35
    })
}