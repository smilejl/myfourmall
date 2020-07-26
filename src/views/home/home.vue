<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <featurview></featurview>
    <tabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
    <goods-list :goods="goods[currentType].list"></goods-list>
    
  </div>
</template>

<script>
  //1先导入组件
  import homeSwiper from './childComps/homeSwipwer'
  import RecommendView from './childComps/RecommendView'
  import featurview from './childComps/featurview'

  import navbar from '../../components/common/navbar/navbar.vue'
  import tabControl from '../../components/content/tabControl/tabControl'
  import GoodsList from '../../components/content/goods/GoodsList'


  import {getHomeMultidata, getHomeGoods} from "../../network/home"
  

  export default {
    name: "home",
    components: {
      //2 注册组件
      navbar,
      homeSwiper,
      RecommendView,
      featurview,
      tabControl,
      GoodsList
    },
    data(){
      //数据存储位置
      return{
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0 , list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType:'pop',
      }
    },
    
    //生命周期函数创建
    created () {
      //1，请求多个数据
      this.getHomeMultidata()
      //2，请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      //事件点击相关方法
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        console.log(index);
      },

      //网络请求相关方法
      //函数具体功能实现代码，放入这里用函数包裹，进行封装
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
      })
      },
        getHomeGoods(type){
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res => {
            
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page += 1;
      })
      }
    }
  }
</script>
<style scoped>

#home{
  padding-top: 44px;
}
   .home-nav{
     background-color: pink;
     color:#fff;

     position: fixed;
     left: 0;
     right: 0;
     top: 0;
     z-index: 9;
    
   }
   .tab-control{
        position: sticky;
        top: 44px;
        z-index: 9;
    }
  
</style>