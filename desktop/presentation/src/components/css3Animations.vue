<template>
<li class="item">
	<h2>
		CSS3 Animations
	</h2>
	<div class="two">
		<div class="col small">
			@keyframes rubberBand {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;0% {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;}<br/>

			&nbsp;&nbsp;&nbsp;&nbsp;30% {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.25, 0.75, 1);<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;}<br/>

			&nbsp;&nbsp;&nbsp;&nbsp;40% {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(0.75, 1.25, 1);<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;}<br/>

			&nbsp;&nbsp;&nbsp;&nbsp;50% {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.15, 0.85, 1);<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;}<br/>

			&nbsp;&nbsp;&nbsp;&nbsp;65% {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(.95, 1.05, 1);<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;}<br/>

			&nbsp;&nbsp;&nbsp;&nbsp;75% {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.05, .95, 1);<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;}<br/>

			&nbsp;&nbsp;&nbsp;&nbsp;100% {<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
			}
		</div>
		<div class="col">
			<img class="yoda" :src="img.yoda"/>
		</div>
	</div>
</li>	
</template>

<style lang="less" scoped>
.yoda {
	width: 50%;
	margin: auto;
	margin-top: 10vw;
}
.yoda:hover {
	animation: 2s rubberBand forwards;
}
@keyframes rubberBand {
	from {
		transform: scale3d(1, 1, 1);
	}

	30% {
		transform: scale3d(1.25, 0.75, 1);
	}

	40% {
		transform: scale3d(0.75, 1.25, 1);
	}

	50% {
		transform: scale3d(1.15, 0.85, 1);
	}

	65% {
		transform: scale3d(.95, 1.05, 1);
	}

	75% {
		transform: scale3d(1.05, .95, 1);
	}

	to {
		transform: scale3d(1, 1, 1);
	}
}
</style>

<script>
module.exports = {
	data: function(){
		return {
			img: {
				yoda: 'img/yoda.png'
			}
		}
	}
}
</script>