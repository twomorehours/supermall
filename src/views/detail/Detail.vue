<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';

import { getDetail } from 'network/detail.js';

export default {
  name: 'Detail',
  data() {
    return {
      id: '',
      topImages: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail()
      .then(res => {
        console.log(res);
        let result = res.result;
        this.topImages = result.itemInfo.topImages;
      });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  methods: {
    getDetail() {
      return getDetail(this.id);
    },
  },
};
</script>

<style scoped>

</style>
