<template>
<div class="COUNTDOWN">
	<span>{{days}}</span>天<span>{{hours}}</span>时<span>{{minutes}}</span>分
</div>
</template>

<script>
	module.exports = {
		props: {
			timeleft: {
				default: 0
			}
		},
		data: function(){
			return {
				days: 0,
				hours: 0,
				minutes: 0
			}
		},
		ready: function(){
			this.setNumbers(this.timeleft);
			setInterval(()=>{
				if( this.timeleft-60*1000>0 ){
					this.timeleft -= 60*1000;
				}else{
					this.timeleft = 0;
				}
				this.setNumbers(this.timeleft);
			},60000);
		},
		methods: {
			setNumbers: function(time){
				var days = Math.floor( time/1000/3600/24 );
				var hours = Math.floor( (time - days*1000*3600*24)/1000/3600 );
				var minutes = Math.floor( (time - days*1000*3600*24 - hours*1000*3600)/1000/60 );
				days = this.format(days);
				hours = this.format(hours);
				minutes = this.format(minutes);
				this.days = days;
				this.hours = hours;
				this.minutes = minutes;
				console.log(this.days)
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
		width: 2.68rem; height: 0.62rem;
		font-size: 0.4rem;
		background: #494949; color: white;
	}
</style>