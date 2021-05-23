<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <detail-goods :goods="goods"/>
    <detail-shop-info :shop="shopInfo"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';

import { getDetail, Goods, ShopInfo} from 'network/detail.js';
import DetailGoods from './childComps/DetailGoods';

export default {
  name: 'Detail',
  data() {
    return {
      id: '',
      topImages: [],
      goods: [],
      shopInfo: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail();
  },
  components: {
    DetailGoods,
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
  },
  methods: {
    getDetail() {
      return getDetail(this.id)
        .then((res) => {
          let result = res.result;
          this.topImages = result.itemInfo.topImages;
          this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services);
          this.shopInfo = new ShopInfo(result.shopInfo);
        });
    },

  },
};
</script>

<style scoped>

</style>
