<template>
<div class="ITEMS panel panel-default">
	<div class="panel-heading">
		<div class="_row">
			<li></li>
			<li>id</li>
			<li>name</li>
			<li>specs</li>
			<li>price</li>
		</div>
	</div>
	<div class="list-group">
		<div class="_row item list-group-item" 
		:class=" current===i?'':'' "
		:style=" a.checked?'background:#d9edf7':'background:white' " 
		v-for="(a,i) in items"
		key="a.id">
			<li>
				<input type="checkbox" 
				class="checkbox i-checks" 
				:checked="a.checked" 
				@change="CHECK_TOGGLE(i)"/>
			</li>
			<li>{{a.id}}</li>
			<li>{{a.name}}</li>
			<li>{{a.specs}}</li>
			<li>{{a.price}}</li>
			<button class="edit btn btn-primary btn-small" @click="edit(i)">edit</button>
		</div>
	</div>
	<div class="panel-footer _row">
		<li></li>
		<li>{{item.id}}</li>
		<li><input type="text" placeholder="name" class="form-control" v-model="item.name"/></li>
		<li><input type="text" placeholder="specs" class="form-control" v-model="item.specs"/></li>
		<li><input type="text" class="form-control" v-model="item.price"/></li>
		<button class="save btn btn-success m-b-xs w-xs" 
		@click="SAVE_ITEM">save</button>
		<button class="delete btn btn-danger" 
		@click="DELETE_ITEMS">delete</button>
	</div>
</div>
</template>

<style lang="less" scoped>
	.ITEMS {

	}
	._row {
		overflow: hidden;
		input[type="checkbox"] {
			//float: left;
		}
		li {
			float: left;
			height: 30px;
			line-height: 30px;
			//text-align: center;
			list-style: none;
			&:nth-child(1) {
				width: 20px;
			}
			&:nth-child(2) {
				width: 150px;
			}
			&:nth-child(3) {
				width: 200px;
			}
			&:nth-child(4) {
				width: 150px;
			}
			&:nth-child(5) {
				width: 100px;
			}
		}
		// button {
		// 	float: left;
		// 	//width: 40px; height: 30px;
		// }
		input[type="text"] {
			width: 80%;
		}
	}
	.item {
		&:hover {
			background: lightblue;
		}
		&.active {
			background: #d9edf7;
		}
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				item: {
					id: '',
					name: '',
					price: 0,
					desc_: '',
					specs: '',
					class_: '',
					sub_class: ''
				},
				current: -1
			}
		},
		computed: {
			items: function(){
				return this.$store.state.items;
			}
		},
		mounted: function(){
			this.$store.dispatch('GET_ITEMS');
		},
		methods: {
			CHECK_TOGGLE: function(i){
				this.$store.commit('CHECK_TOGGLE',i);
			},
			edit: function(i){
				for(var key in this.item){
					this.item[key] = this.items[i][key];
				}
				this.current = i;
			},
			SAVE_ITEM: function(){
				if(!this.item.id){
					this.item.id = new Date().getTime()+'';
				};
				this.$store.dispatch(
					'SAVE_ITEM',
					JSON.stringify(this.item)
				);
				this.item.id = '';
			},
			DELETE_ITEMS: function(){
				var ids = [];
				this.items.forEach(a=>{
					if(a.checked){
						ids.push(a.id)
					}
				});
				this.$store.dispatch(
					'DELETE_ITEMS',ids
				);
			},
			getTime: function(){
				var time = new Date();
				var fullYear = time.getFullYear();
				var month = time.getMonth()+1;
				time = fullYear+'-'+month;
				return time;
			}
		}
	}
</script>