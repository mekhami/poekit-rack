<template>
  <div class="rack">
    <rack-item :item="i" v-for="i in testData.items" v-bind:key="i.id"/>
  </div>
</template>

<script>
import testData from './test_data.json'

export default {
  name: 'app',
  data: function () {
    return {
      testData
    }
  }
}
</script>
<style>
body,html{
    height: 100%;
    min-height: 100%;
    background:#111;
}
</style>
<style lang="scss" scoped>
#app{
  display: grid;
  grid-template-columns: 1fr  auto  1fr;
  grid-template-rows: 1fr  auto  1fr;
  height:90%;
}
.rack{
  display: grid;
  grid-template-columns: repeat(6,auto);
  grid-column:2;
  grid-row:2;
}
</style>
