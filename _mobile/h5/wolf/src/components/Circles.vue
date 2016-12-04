<template>
	<div class="Circles">
		<div class="round blue" 
		:class=" active?'active':'' "></div>
		<div class="round lightblue"
		:class=" active?'active':'' "></div>
		<div class="round yellow"
		:class=" active?'active':'' "></div>
		<div class="round red"
		:class=" active?'active':'' "></div>
		<div class="round violet"
		:class=" active?'active':'' "></div>
		<div class="round green"
		:class=" active?'active':'' "></div>
		<div class="round purple"
		:class=" active?'active':'' "></div>
	</div>
</template>

<style lang="less" scoped>
	.Circles {
		position: relative;
		width: 100%; height: 1rem;
		margin: auto; margin-bottom: 0.1rem;
		.round {
			position: absolute; top: 40%;
			width: 0.2rem; height: 0.2rem;
			border-radius: 1000px;
			border: 0.02rem solid white;
			opacity: 0;
			&.active {
				opacity: 0.8;
				transition-property: transform,opacity;
				transition-duration: 1s;
			}
		}
		.blue {
			left: 10%; background: #225796;
			&.active {
				transform: translate3d(1.9rem,0,0) scale(2);
			}
		}
		.lightblue {
			left: 20%; background: #5FAFB7;
			&.active {
				transform: translate3d(1.45rem,0,0) scale(2.3);
			}
		}
		.yellow {
			left: 32%; background: #D5A02B;
			&.active {
				transform: translate3d(0.85rem,0,0) scale(2.6);
			}
		}
		.red {
			left: 48.5%; background: #C63921;
			z-index: 4;
			&.active {
				transform: scale(3);
			}
		}
		.violet {
			right: 32%; 
			background: #B92D47;
			z-index: 3;
			&.active {
				transform: translate3d(-0.85rem,0,0) scale(2.6);
			}
		}
		.green {
			right: 20%;
			background: #73AC56;
			z-index: 2;
			&.active {
				transform: translate3d(-1.45rem,0,0) scale(2.3);
			}
		}
		.purple {
			right: 10%;
			background: #463981;
			z-index: 1;
			&.active {
				transform: translate3d(-1.9rem,0,0) scale(2);
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			active: {}
		},
		data: function(){
			return {
			}
		}
	}
</script>