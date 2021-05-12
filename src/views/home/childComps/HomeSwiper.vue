<template>
<div>
  <swiper>
    <swiper-item v-for="(item,id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad"/>
      </a>
    </swiper-item>
   </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js';

export default {
  name: 'HomeSwiper',
  props:{
    banners: {
      type: Array,
      default(){
        return [];
      }
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad(){
      if(!this.loaded){
        this.$emit('imageLoad');
        this.loaded = true;
      }
    },
  }
};
</script>

<style>
</style>
