<template>
<div id="home" class="wrapper">
  <nav-bar class="home-nav">
    <template v-slot:center>
      <span>购物街</span>
    </template>
  </nav-bar>
  <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl1" v-show="tabFixed"/>
  <scroll class="content" :probe-type="3"  :pull-up-load="true"
    ref="scroll" @onScroll="scrollPos" @onPullUp="pullUp" >
    <template>
      <home-swiper :banners="banners" @imageLoad="swiperLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view />
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl"/>
      <goods-list :goods="selectedGoods" />
    </template>
  </scroll>

  <back-top @click.native="backTop" v-show="showBackTop" />
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import BackTop from 'components/content/backTop/BackTop.vue';

import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';


import {getHomeMultidata,getGoods} from 'network/home.js';
import {debounce} from 'common/utils.js';

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
      showBackTop: false,
      tabControlOffsetTop: 0,
      tabFixed: 0,
    };
  },
  created() {
    this.getHomeMultidata();

    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },

  mounted() {

    let refresh = debounce(this.$refs.scroll.refresh,1000);

    this.$bus.$on('imageLoad', () => {
      refresh();
    });
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

        this.$refs.scroll.finishPullUp();
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
        this.$refs.tabControl.currIndex = index;
        this.$refs.tabControl1.currIndex = index;
    },
    scrollPos(pos) {
      this.showBackTop = -pos.y > 1000;
      this.tabFixed = -pos.y > this.tabControlOffsetTop;

    },
    pullUp() {
      this.getGoods(this.currentType);
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
    swiperLoad(){
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
};
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>
