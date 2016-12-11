<template>
	<div class="Item">
		<div class="panel panel-default">
			<div class="panel-heading">
				{{item.id}}
			</div>
			<div class="panel-body">
				<div class="row_">
					<li class="label_">name</li>
					<li>
						<input type="text" placeholder="name" class="form-control" v-model="item.name"/>
					</li>
				</div>
				<div class="row_">
					<li class="label_">desc</li>
					<li>
						<input type="text" placeholder="desc" class="form-control" v-model="item.desc_"/>
					</li>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Item {
		.row_ {
			padding: 4px 0;
			overflow: hidden;
			li {
				float: left;
			}
			.label_ {
				padding: 7px;
				width: 100px;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		computed: {
			item: function(){
				return this.$store.state.item;
			}
		}
	}
</script>