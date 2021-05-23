<template>
  <div id="detail_nav_bar">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt=""/>
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(title,index) in titles"
               class="title_item"
               :class="{active: index===currIndex}"
               @click="changeIndex(index)"
               :key="index">
            {{ title }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    changeIndex(index) {
      this.currIndex = index;
    },
  },
};
</script>

<style scoped>
#detail_nav_bar {
  /* position: relative; */
  /* z-index: 9; */
  background-color: #fff;
}

.back img {
  margin-top: 0.42rem;
}

.title {
  font-size: 0.64rem;
  display: flex;
}

.title_item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
