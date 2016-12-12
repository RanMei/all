function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
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

function Particle (opts) {
    this.opts = opts;

    this.cv = opts.cv;
    this.color = this.opts.color;
    this.x = this.opts.x;
    this.y = this.opts.y;
    this.d = this.opts.d;

    this.radius = this.opts.radius;
};
Particle.prototype = {
    update: function () {
        var width = this.cv.$width;
        var height = this.cv.$height;
        var x, y;

        x = this.x + Math.cos(0) * this.d * 2;
        y = this.y + Math.sin(0) + 1 + ((this.radius/3*this.d) * 2);

        if (x > width) {
            x = 0;
        };
        if (x < 0) {
            x = width;
        };
        if(y > height) {
            y = 0;
            x = getRandomInt(0, width)
        };

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

import {Canvas} from './Canvas.js';

var Snow = Canvas.extend({
    props: function(){
        return {
            color: 'white',
            speed: 2,
            count: 100,
            maxRadius: 5
        }
    },
    data: function(){
        return {
            particles: [],
            angle: 0
        }
    },
    beforePlay: function(){
        this.createParticles();
    },
    render: function(){
        var self = this;
        this.angle = this.angle - 0.0001;

        this.$ctx.clearRect(0, 0, this.$width, this.$height);
        this.particles.forEach( function(p){
            p.update();
            p.draw(self.$ctx);
        });
    },
    methods: {
        createParticles: function(){
            var self = this;
            for( var i=0;i<this.count;i++ ){
                self.particles.push(new Particle({
                    color: self.color,
                    x: Math.round( Math.random()*self.$width ),
                    y: Math.round( Math.random()*self.$height ),
                    d: Math.random(),
                    radius: getRandomInt(2, self.maxRadius),
                    cv: self,
                    ctx: self.$ctx
                }))
            }
        }
    }
})

module.exports = {
    template: `
        <canvas ref="snowfall" width="1000" height="1000"
        style="display:block;width:100%;background:#0BA2FF;"></canvas>
    `,
    mounted: function(){
        new Snow({
            el: this.$refs.snowfall,
            props: {
                color: 'white',
                speed: 2,
                count: 100,
                maxRadius: 5
            }
        })
    }
}