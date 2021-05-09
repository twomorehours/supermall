<template>
<div>
  <nav-bar class="home-nav">
    <template v-slot:center>
      <span>购物街</span>
    </template>
  </nav-bar>
  <home-swiper :banners="banners"/>
  <recommend-view :recommends="recommends"/>
  <feature-view />
  <tab-control :titles="titles" @tabClick="tabClick" />
  <goods-list :goods="selectedGoods" />

</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';


import {getHomeMultidata,getGoods} from 'network/home.js';

export default {
  name: 'Home',
  data(){
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      currentType: 'pop',
      goods:{
        pop: {
          page:0,
          list:[],
        },
        new: {
          page:0,
          list:[],
        },
        sell: {
          page:0,
          list:[],
        },
      },
    };
  },
  created() {
    this.getHomeMultidata();

    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  computed: {
    selectedGoods(){
       return this.goods[this.currentType].list;
    },
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods(type){
      let page = this.goods[type].page + 1;
        getGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    },
    tabClick(index) {
      switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
