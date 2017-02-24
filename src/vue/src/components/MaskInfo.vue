<style lang="less" scoped>
  .MaskInfo {
    position: fixed; left: 0; top: 0;
    width: 100%; height: 100%;
    overflow: hidden;
    z-index: 999;
    background: rgba(255,255,255,0.9);
    transition: transform 200ms;
    transform: translate3d(0,100%,0);
    &.active {
      transform: translate3d(0,0,0);
    }
    .content992 {
      position: relative;
      width: 100%; height: 100%;
      overflow-y: auto;
      .name {
        padding: 0.54rem 0.83rem;
        font-size: 0.36rem; color: #1d79a4;
      }
      .comments {
        padding: 0 0.83rem;
        margin-bottom: 0.3rem;
        .title__ {
          height: 0.36rem;
          margin-bottom: 0.1rem;
          overflow: hidden;
          img {
            float: left;
            height: 0.36rem;
            margin-right: 0.12rem;
          }
          p {
            float: left;
            height: 0.36rem;
            font-size: 0.26rem; line-height: 0.36rem;
          }
        }
        .text__ {
          font-size: 0.24rem; line-height: 0.46rem;
          color: #666666;
        }
      }
      .tags {
        padding: 0 0.83rem;
        margin-bottom: 0.3rem;
        .title__ {
          margin-bottom: 0.2rem;
          font-size: 0.24rem;
          // color: #404040;
        }
        .text__ {
          font-size: 0.24rem; line-height: 0.46rem;
          color: #666666;
        }
      }
      .examples {
        padding: 0 0.83rem;
        margin-bottom: 0.3rem;
        .title__ {
          margin-bottom: 0.2rem;
          font-size: 0.24rem;
          // color: #404040;
        }
        .scroller112 {
          .cover_ {
            box-sizing: border-box;
            width: 1.9rem; height: 3.06rem;
            background: grey;
          }
        }
        .text__ {
          font-size: 0.24rem; line-height: 0.46rem;
          color: #666666;
        }
      }
      .bar_shadow {
        width: 100%; height: 0.9rem;
      }
    }
    .bar__ {
      display: table;
      position: absolute; left: 0; bottom: 0;
      width: 100%; height: 0.78rem;
      background: white;
      .cell {
        display: table-cell;
        width: 100%; height: 100%;
        vertical-align: middle;
        img {
          width: 0.25rem;
          margin: auto;
        }
      }
    }
  }
</style>

<template>
  <div class="MaskInfo"
  :class=" maskInfo.show?'active':'' ">
    <div class="content992"
    ref="content">
      <div class="name">{{item.name_}}</div>

      <div class="comments" v-if="true">
        <div class="title__">
          <img :src=" img+'/cloud.png' "/>
          <p>设计说</p>
        </div>
        <div class="text__">
          {{item.comments&&item.comments.designer?item.comments.designer:'[暂无评论]'}}
        </div>
      </div>

      <div class="comments" v-if="true">
        <div class="title__">
          <img :src=" img+'/cloud.png' "/>
          <p>开发说</p>
        </div>
        <div class="text__">
          {{item.comments&&item.comments.developer?item.comments.developer:'[暂无评论]'}}
        </div>
      </div>

      <div class="tags">
        <div class="title__">
          标签
        </div>
        <div class="text__" v-if="!item.tags">
          [暂无标签]
        </div>
        <div class="text__">
          <span v-if="item.tags" v-for="(a,i) in item.tags">{{i===0?'':'、'}}{{a}}</span>
        </div>
      </div>

      <div class="examples">
        <div class="title__">
          应用示例
        </div>
        <div class="scroller112" v-if="item.examples">
          <div class="cover_" v-for="a in item.examples"
          @click="$store.commit('TO_EXAMPLE',a)">
          </div>
        </div>
        <div class="text__" v-if="!item.examples">
          [暂无示例]
        </div>
      </div>

      <div class="bar_shadow"></div>
    </div>

    <div class="bar__">
      <div class="cell">
        <img class="cross" :src="img+'/cross.png'"
        @click="$store.commit('HIDE','maskInfo')"/>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    computed: {
      img(){
        return this.$store.state.img;
      },
      maskInfo(){
        return this.$store.state.maskInfo;
      },
      item(){
        return this.$store.state.items[this.$store.state.item.current>=0?this.$store.state.item.current:0];
      }
    },
    watch: {
      'maskInfo.show': function(nv){
        if( nv===true ){
          this.$refs.content.scrollTop = 0;
        }
      }
    }
  }
</script>