<template>
  <div>
    <swiper class="detail_swiper">
      <swiper-item v-for="(image,id) in topImages" :key="id">
        <img :src="image" alt=""/>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js';

export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.detail_swiper {
  height: 12.8rem;
}
</style>
