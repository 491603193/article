<template>
  <div>
    <tab :line-width="2" class="tab">
      <tab-item :selected="isActive === index"
                v-for="(item, index) in itemList"
                :class="{'vux-1px-r': index===0}"
                @on-item-click="checkItem" :key="index">{{item}}
      </tab-item>
    </tab>
    <panel :list="list" :type="type"
           v-bind:class="{ 'current-left-out': isActive === 0 }"
           v-show="isActive === 0" style="width: 100%">

    </panel>
    <panel :list="list" :type="type" @on-img-error="onImgError"
           v-bind:class="{ 'current-right-in': isActive === 1 }"
           v-show="isActive === 1" style="width: 100%"></panel>
    <div class="add-article" @click="goEditArticle">
      <x-icon type="ios-plus-empty" size="45"></x-icon>
    </div>
  </div>
</template>
<script>
  import {Tab, TabItem, Panel} from 'vux'

  export default {
    name: 'HelloWorld',
    components: {
      Tab, TabItem, Panel
    },
    props: {
      msg: String
    },
    data () {
      return {
        isActive: 0,
        isTransition: 1,
        itemList: ['个人', '全部'],
        type: '4',
        list: [{
          fallbackSrc: 'http://www.baidu.com',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: 'http://www.baidu.com',
            replace: false
          },
          meta: {
            source: '永康',
            date: '2019/02/01 12：12',
            other: '个人'
          }
        }],
      }
    },
    methods: {
      goEditArticle () {
        this.$router.push({ name: 'editArticle', params: { serviceTypeId: "", name: "" } })
      },
      onImgError (item, $event) {
        console.log(item, $event)
      },
      checkItem (index) {
        console.log(index)
        this.isActive = index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .add-article {
    text-align: center;
    bottom: 60px;
    right: 20px;
    position: absolute;
    width:50px;
    height:50px;
    border-radius:25px;
    border:solid #02bb1c 1px;
    background-color: #02bb1c;
  }
  .tab {
    top: 0;
    position: sticky;
    z-index: 99;
  }
</style>
