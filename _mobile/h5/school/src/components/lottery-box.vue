<style lang="less">
.lottery {
	position: relative;
	width: 6.6rem; margin: auto;
	margin-bottom: 0.54rem;
	overflow: hidden;
	.lottery-bg {
		width: 100%;
	}
	.content {
		box-sizing: border-box;
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		.toMine {
			position: absolute; right: 0.12rem; bottom: 0;
			width: 1.72rem; height: 0.58rem;
			display: block;
		}
		.trophy {
			position: absolute;
			width: 2.1rem; height: 2.1rem;
			border-radius: 0.1rem;
			overflow: hidden;
			//background-size: 100%;
			img {
				width: 1.98rem; height: 1.98rem;
				margin-top: 0.06rem; margin-left: 0.06rem;
			}
		}
		.trophy.active {
			//background: url(../../img/orange_bg.png) no-repeat;
			background-size: 100%;
		}
		.trophy0 {
			left: 0.08rem; top: 1.3rem;
		}
		.trophy1 {
			left: 2.24rem; top: 1.3rem;
		}
		.trophy2 {
			left: 4.4rem; top: 1.3rem;
		}

		.trophy3 {
			left: 4.4rem; top: 3.42rem;
		}

		.trophy4 {
			left: 4.4rem; top: 5.6rem;
		}
		.trophy5 {
			left: 2.24rem; top: 5.6rem;
		}
		.trophy6 {
			left: 0.08rem; top: 5.6rem;
		}

		.trophy7 {
			left: 0.08rem; top: 3.42rem;
		}
		.btn {
			position: absolute; left: 2.3rem; top: 3.5rem;
			width: 1.98rem; height: 1.98rem;
			font-size: 0.52rem;
			p {
				text-align: center; color: #ee5f47;
			}
			p:nth-child(1) {
				margin-top: 0.46rem;
				font-weight: bold;
			}
			p:nth-child(2) {
				font-size: 0.28rem;
				.span {
					font-size: 0.28rem;
				}
			}
		}
	}
}
</style>

<script>
module.exports = {
	template: `
		<div class="lottery">
			<img class="lottery-bg" src="img/lottery.png"/>
			<div class="content">
				<a class="toMine" v-on:click="toMine"></a>
				<div class="btn" 
					style="{{pressed?'background:#ffce20;border-radius: 0.1rem;':'background: url(img/btn.png) no-repeat;background-size: 100%;'}}" 
					v-on:touchstart="drawtouchstart"
					v-on:touchmove="drawtouchmove"
					v-on:touchend="drawtouchend"
					v-on:touchcancel="drawtouchcancel">
					<p>抽奖</p>
					<p>(<span class="chance">{{chance||0}}</span>)次机会</p>
				</div>
				<div v-for="(i,item) in trophies" class="trophy trophy{{i}}"
				style="{{i===current?'background: url(./img/orange_bg.png) no-repeat;':''}}">
					<img src="img/trophy{{i}}{{ios?'_ios':''}}.png"/>
				</div>
			</div>
		</div>
	`,
	props: ['ios','trophies','chance','result'],
	data: function(){
		return {
			img: {
				cloud_1: './img/face/cloud_1.png'
			},

			pressed: false,
			inDrawing: false,
			current: 0
		}
	},
	computed: {},
	created: function(){
		var self = this;
		this.$watch('result',()=>{
			console.log(this.result)
			if( this.result>-1 ){
				self.inDrawing = true;
				var result = self.result;

				var cycle = 0;
				var duration = 100;
				function move(){
					self.current++;
					if(self.current===8){
						self.current = 0;
						cycle++;
					};
					duration += 10;
					if( cycle===3&&self.current===result ){
						setTimeout(function(){
							self.$dispatch( 'SHOW_MASK','get'+result );
							self.$dispatch( 'MINUS_CHANCE' );
							self.inDrawing = false;
						},1000);
					}else{
						setTimeout(move,duration);
					}
				}
				setTimeout(move,duration);
			};
		})
	},
	methods: {
		// 添加在抽奖按钮上的事件：
		drawtouchstart: function(e){
			this.pressed = true;
		},
		drawtouchmove: function(){
			this.pressed = false;
		},
		drawtouchend: function(){
			if( this.pressed ){
				this.draw();
			};
			this.pressed = false;
		},
		drawtouchcancel: function(){
			this.pressed = false;
		},
		draw: function(){
			var self = this;
			if( !self.inDrawing ){
				//如果用户可以抽奖：
				if( self.chance>0 ){
					//启动抽奖过程。
					self.$dispatch('DRAW');
				}else{
					self.$dispatch('SHOW_MASK','none');
				}
			};
		},
		toMine: function(){
			if( this.ios ){
				Local.openInside( location.href.replace('index.html','mine.html') );
			}else{
				location.href = './mine.html';
			}
		}
	}
}
</script>