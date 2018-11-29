<template>
  <div class="mod" :class="type" v-html="html"></div>
</template>

<script>
export default {
  name: 'item-mod',
  props: {
    mod: String,
    type: String
  },
  computed: {
    html: function () {
      return this.mod.replace('\n', '<br />')
    }
  }
}
</script>

<style lang="scss" scoped>
.mod {
  width:max-content;
  color: #8888FF;
  margin:auto;
}
.crafted {
  color: #b4b4ff;
}
</style>
