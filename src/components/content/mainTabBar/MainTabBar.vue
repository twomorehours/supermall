<template>
  <div>
    <tab-bar>
      <template>
        <tab-bar-item path="/home">
          <template v-slot:text>
            首页
          </template>
          <template v-slot:icon>
            <img src="～assets/img/tabbar/home.svg" />
          </template>
          <template v-slot:icon-active>
            <img src="～assets/img/tabbar/home_active.svg" />
          </template>
        </tab-bar-item>
        <tab-bar-item path="/category">
          <template v-slot:text>
            分类
          </template>
          <template v-slot:icon>
            <img src="～assets/img/tabbar/category.svg" />
          </template>
          <template v-slot:icon-active>
            <img src="～assets/img/tabbar/category_active.svg" />
          </template>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <template v-slot:text>
            购物车
          </template>
          <template v-slot:icon>
            <img src="～assets/img/tabbar/shopcart.svg" />
          </template>
          <template v-slot:icon-active>
            <img src="～assets/img/tabbar/shopcart_active.svg" />
          </template>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <template v-slot:text>
            我的
          </template>
          <template v-slot:icon>
            <img src="～assets/img/tabbar/profile.svg" />
          </template>
          <template v-slot:icon-active>
            <img src="～assets/img/tabbar/profile_active.svg" />
          </template>
        </tab-bar-item>
      </template>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>
