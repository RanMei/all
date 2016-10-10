<template>
<div class="COUNTDOWN" :style="style">
	<img class="timeImg" :src="img.time">
	<span class="days">{{days}}</span>
	<span class="hours">{{hours}}</span>
	<span class="minutes">{{minutes}}</span>
</div>
</template>

<script>
	module.exports = {
		props: ['timeleft','act','style'],
		data: function(){
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				img: {
					time: 'img/time.png'
				}
			}
		},
		watch: {
			timeleft: function(){
				this.setNumbers(this.timeleft);
			}
		},
		mounted: function(){
			this.setNumbers(this.timeleft);
			setInterval(()=>{
				this.act({
					type: 'MINUS',
					value: 60000
				})
			},60000);
		},
		methods: {
			setNumbers: function(time){
				var days = Math.floor( time/1000/3600/24 );
				var hours = Math.floor( (time - days*1000*3600*24)/1000/3600 );
				var minutes = Math.floor( (time - days*1000*3600*24 - hours*1000*3600)/1000/60 );
				//days = this.format(days);
				hours = this.format(hours);
				minutes = this.format(minutes);
				this.days = days;
				this.hours = hours;
				this.minutes = minutes;
				//console.log(this.days)
			},
			format: function(num){
				if(num<10){
					num = '0'+num;
				};
				return num;
			}
		}
	}
</script>

<style lang="less" scoped>
	.COUNTDOWN {
		position: absolute; left: 0.62rem; top: 0.48rem;
		width: 2.40rem; height: 0.48rem;
		font-size: 0.48rem; line-height: 0.48rem;
		color: #e2b65c;
		.days {
			margin-right: 0.22rem;
		}
		.hours {
			margin-right: 0.22rem;
		}
		.timeImg {
			position: absolute; right: 0; bottom: 0;
			width: 2.11rem;
		}
	}
</style>