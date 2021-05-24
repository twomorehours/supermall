<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll ref="scroll" class="detail_wrapper">
      <template>
        <detail-swiper :top-images="topImages"/>
        <detail-goods :goods="goods"/>
        <detail-shop-info :shop="shopInfo"/>
        <detail-goods-info :detail-info="detailInfo" @loadImgEvent="loadImageOk"/>
        <detail-params :param-info="goodsParams"/>
      </template>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue';
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoods from './childComps/DetailGoods.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParams from './childComps/DetailParams.vue';

import { getDetail, Goods, ShopInfo, GoodsParam } from 'network/detail.js';
import { debounce } from 'common/utils.js';

export default {
  name: 'Detail',
  data() {
    return {
      id: '',
      topImages: [],
      goods: [],
      shopInfo: {},
      detailInfo: {},
      refresh: null,
      goodsParams: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail();
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 1000);
  },
  components: {
    DetailGoods,
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
  },
  methods: {
    getDetail() {
      return getDetail(this.id)
        .then((res) => {
          let result = res.result;
          this.topImages = result.itemInfo.topImages;
          this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services);
          this.shopInfo = new ShopInfo(result.shopInfo);
          this.detailInfo = result.detailInfo;
          this.goodsParams = new GoodsParam(
            result.itemParams.info,
            result.itemParams.rule,
          );
        });
    },
    loadImageOk() {
      this.refresh();
    },
  },
};
</script>

<style scoped>
/*#detail {*/
/*  !* 利用z-index覆盖 tabbar，不过这样不好，想换种方法 *!*/
/*  position: relative;*/
/*  !* z-index: 10;*/
/*  background-color: #fff; *!*/
/*  height: 100vh;*/
/*}*/
.detail_wrapper {
  position: absolute;
  top: 1.9rem;
  bottom: 2.09rem;
  left: 0;
  right: 0;
  overflow: hidden;
}

/**
* 给回到顶部按钮做了一个过渡效果
*/
.back-top-enter,
.back-top-leave-to {
  transform: translateX(1rem);
  opacity: 0;
}

.back-top-enter-active {
  transition: all 1s;
}

.back-top-leave-active {
  transition: all 1s;
}
</style>
