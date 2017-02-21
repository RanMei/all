<template>
<div class="Items">
  <title-bar :title="'Items'"></title-bar>
  <div class="form__">
    <div class="panel panel-default">
      <div class="panel-body">
        
      </div>
    </div>
    <div class="panel panel-info">
      <div class="panel-heading">
        <li></li>
        <li>id</li>
        <li>name</li>
        <li>desc_</li>
        <li>price</li>
      </div>
      <div class="list-group">
        <div class="list-group-item" 
        :class=" current===i?'':'' "
        :style=" a.checked?'background: #fafbfc;':'background:white' " 
        v-for="(a,i) in items"
        key="a.id">
          <li>
            <input type="checkbox" 
            class="checkbox i-checks" 
            :checked="a.checked" 
            @change="CHECK_TOGGLE(i)"/>
          </li>
          <li @click="TO_ITEM(i)">{{a.id}}</li>
          <li>{{a.name}}</li>
          <li>{{a.desc_}}</li>
          <li>{{a.price}}</li>
          <li><a class="edit" @click="edit(i)">edit</a></li>
        </div>
      </div>
      <div class="panel-footer _row">
        <div class="inputs__">
          <li></li>
          <li>{{item.id}}</li>
          <li><textarea type="text" placeholder="name" class="form-control" v-model="item.name"/></li>
          <li><textarea type="text" placeholder="desc_" class="form-control" v-model="item.desc_"/></li>
          <li><textarea type="text" placeholder="price" class="form-control" v-model="item.price"/></li>
        </div>
        <div class="manipulation">
          <a class="save btn" 
          @click="SAVE_ITEM">save</a>
          <a class="delete btn" 
          @click="DELETE_ITEMS">delete</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
  .Items {
    // float: left;
    // width: 1000px;
    // padding-left: 200px;
    // margin: auto;
    margin-left: 200px;
    background: #F0F3F4;
    overflow-x: scroll;
    .header-- {
      padding: 20px;
      font-size: 24px;
      color: #58666e;
      background-color: #f6f8f8;
      border-bottom: 1px solid #dee5e7;
    }
    .form__ {
      box-sizing: border-box;
      width: 960px; 
      margin: auto;
      margin-top: 20px;
      margin-bottom: 100px;
      border: 1px solid #ddd;
      background: white;
      a {
        cursor: pointer;
      }
      .panel-heading {
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        background: #f6f8f8;
        li {
          font-weight: bold;
        }
      }
      li {
        //display: table-cell;
        vertical-align: middle;
        float: left;
        height: 20px;
        line-height: 20px;
        padding: 8px 0;
        font-size: 14px;
        list-style: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
      .list-group {
        .list-group-item {
          //display: table;
          border-bottom: 1px solid #ddd;
          overflow: hidden;
          li {
            height: 20px;
            line-height: 20px;
            padding: 8px 0;
            font-size: 14px;
          }
          input[type="checkbox"] {
            //float: left;
          }
          input[type="text"] {
            width: 80%;
          }
          .edit {
            color: #4CB7E9;
          }
        }
      }
      .panel-footer {
        padding: 8px 0;
        //border-bottom: 1px solid #ddd;
        overflow: hidden;
        .inputs__ {
          margin-bottom: 8px;
          overflow: hidden;
          li {
            height: 50px;
            padding: 0;
            textarea[type="text"] {
              box-sizing: border-box;
              resize: none;
              width: 80%; height: 50px;
              padding: 5px;
              border: 1px solid #CFDADD;
              border-radius: 2px;
              &:focus {
                border: 1px solid #4CB7E9;
              }
            }
          }
        }
        .manipulation {
          display: table;
          margin: auto;
          .btn {
            display: block;
            float: left;
            width: 90px;
            padding: 8px 0;
            margin-right: 10px;
            font-size: 14px;
            text-align: center;
            border-radius: 2px;
          }
          .save {
            color: white;
            background-color: #23ad44;
            border-color: #20a03f;
            &:hover {
              background-color: #449d44;
              border-color: #398439;
            }
          }
          .delete {
            color: white;
            background-color: #ee3939;
            border-color: #ed2a2a;
            &:hover {
              background-color: #c9302c;
              border-color: #ac2925;
            }
          }
        }
      }
    }
    td {
      height: 50px;
    }
    
    .item {
      &:hover {
        background: lightblue;
      }
      &.active {
        background: #d9edf7;
      }
    }
  }
</style>

<script type="text/javascript">
  export default {
    components: {
      TitleBar: require('../components/TitleBar.vue')
    },
    data: function(){
      return {
        item: {
          id: '',
          name: '',
          price: '',
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
    },
    methods: {
      reset: function(){
        for(var key in this.item){
          this.item[key] = '';
        }
      },
      TO_ITEM: function(i){
        this.$store.commit('SET_ITEM',this.items[i]);
        location.href = '#/item';
      },
      CHECK_TOGGLE: function(i){
        this.$store.commit('CHECK_TOGGLE',i);
      },
      edit: function(i){
        console.log(this.$store)
        this.$store.commit('FETCH_ITEM',JSON.parse(
          JSON.stringify(this.items[i])
        ));
        location.href = '#/admin/editing';
        // for(var key in this.item){
        //   this.item[key] = this.items[i][key];
        // }
        // this.current = i;
      },
      SAVE_ITEM: function(){
        if(!this.item.id){
          this.item.id = new Date().getTime()+'';
          this.$store.dispatch(
            'addItem',
            JSON.stringify(this.item)
          );
        }else{
          this.$store.dispatch(
            'saveItem',
            JSON.stringify(this.item)
          );
        };
        this.reset();
      },
      DELETE_ITEMS: function(){
        var ids = [];
        this.items.forEach(a=>{
          if(a.checked){
            ids.push(a.id)
          }
        });
        this.$store.dispatch(
          'deleteItems',ids
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