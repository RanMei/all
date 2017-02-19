<style lang="less" scoped>
	@import '../vars.less';
	.Projects {
		width: 100%;
		//background: @black-bg;
		.panel-- {
			.heading__ {
				padding: 10px 15px;
				background: @green-bg;
				color: @green-text;
				.title {
					font-size: 16px;
				}
			}
			.desc {
				padding: 10px 15px;
				border-bottom: 1px dashed @green-bg;
				font-size: 14px;
				color: @grey-text;
			}
			.panel-body {
				padding: 10px 15px;
				a:link {
					color: @green-text;
				}
				a:visited {
					color: @green-text;
				}
			}
			//border-bottom: 1px solid @grey-border;
			font-size: 14px;
		}
		.__block {
			margin-bottom: 15px;
			font-size: 14px;
		}
	}
</style>

<template>
	<div class="Projects">
		<div class="log">
			Ah, you finally got here! These are the projects I am maintaining currently.
		</div>
		<div class="panel--"
		v-for="a in list">
			<div class="heading__">
				<span class="title">{{a.title}}</span>
			</div>
			<div class="desc" v-if="a.desc">
				{{a.desc}}
			</div>
			<div class="panel-body"
			v-if="a.hrefs">
				<span v-for="b in a.hrefs"><a :href="b" target="_blank">{{b}}</a><br/></span>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
		},
		computed: {
			list: function(){
				return this.$store.state.projects;
			}
		}
	}
</script>