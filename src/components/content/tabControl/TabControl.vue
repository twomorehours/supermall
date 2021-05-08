<template>
<div class="tab-control">
  <div v-for="(title,id) in titles" :key="id" class="tab-control-item"
    :class="{active: id===currIndex}" @click="onClick(id)">
    <span>{{title}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles: {
      type: Array,
      default(){
        return [];
      }
    },
  },
  data(){
    return {
      currIndex: 0,
    };
  },
  methods: {
    onClick(id) {
      this.currIndex = id;
      this.$emit('tabClick',id);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
