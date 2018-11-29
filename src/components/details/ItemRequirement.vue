<template>
  <div class="requirement">
    <span>Requires</span>
    <span v-for="(r,i) in requirements" :key="r.name">
      <span class="what" v-if="r.displayMode == 0"> {{r.name}}</span>
      <span class="value"> {{r.values[0][0]}}</span>
      <span class="what" v-if="r.displayMode == 1"> {{r.name}}</span>
      <span class="comma" v-if="i < requirements.length - 1">,</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'item-requirement',
  props: { requirements: Array }
}
</script>

<style lang="scss" scoped>
.requirement{
  width: max-content;
  margin:auto;
}
.value {
  color: white;
}
</style>
