<template>
  <div class="rack-item-details">
    <item-header :name="name" :subtitle="subtitle" :type="type"></item-header>
    <div class="content">
      <item-property v-for="p in item.properties" :key="p.type" :name="p.name" :values="p.values" :mode="p.displayMode"/>
      <item-mod v-for="m in item.utilityMods" :key="m" :mod="m" type="utility"/>
      <separator v-if="item.requirements" :type="type"/>
      <item-requirement v-if="item.requirements" :requirements="item.requirements"/>
      <separator v-if="item.enchantMods" :type="type"/>
      <item-mod v-for="m in item.enchantMods" :key="m" :mod="m" type="crafted"/>
      <separator v-if="item.implicitMods" :type="type"/>
      <item-mod v-for="m in item.implicitMods" :key="m" :mod="m" type="implicit"/>
      <separator v-if="item.explicitMods || item.craftedMods" :type="type"/>
      <item-mod v-for="m in item.explicitMods" :key="m" :mod="m" type="explicit"/>
      <item-mod v-for="m in item.craftedMods" :key="m" :mod="m" type="crafted"/>
      <div class="description" v-if="item.descrText">
        <separator :type="type"/>
        <span>{{ item.descrText }}</span>
      </div>
      <separator :type="type" v-if="item.flavourText"/>
      <div class="flavour" v-if="item.flavourText" v-for="t in item.flavourText">{{ t }}</div>
    </div>
  </div>
</template>

<script>
import ItemHeader from './ItemHeader'
import ItemProperty from './ItemProperty'
import ItemMod from './ItemMod'
import Separator from './Separator'
import ItemRequirement from './ItemRequirement'

// TODO cards
export default {
  name: 'rack-item-details',
  props: { item: Object },
  components: { ItemRequirement, ItemHeader, ItemProperty, ItemMod, Separator },
  computed: {
    // The name and the typeLine are a bit interchangeable and sometime you have one or both
    // also, the set is in either and we need to remove that
    name: function () {
      let name = this.item.name
      if (name.length === 0 && this.item.typeLine.length > 0) {
        name = this.item.typeLine
      }
      return name.replace(/(<<[A-Za-z:]+>>)/g, '')
    },
    subtitle: function () {
      if (this.item.name.length > 0) {
        return this.item.typeLine
      }
      return ''
    },
    type: function () {
      // frameType indicates the color of the frame. the api doesn't seem to do other rarity distinction
      let types = ['white', 'magic', 'rare', 'unique', 'gem', 'currency']
      return types[this.item.frameType]
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'FontinSmallCaps';
  src: local("☺"), url('https://web.poecdn.com/font/fontin-smallcaps-webfont.woff') format("woff");
  font-weight: normal;
  font-style: normal;
}

.rack-item-details {
  font-family: 'FontinSmallCaps', Verdana, Arial, Helvetica, sans-serif;
  background: #2b2b2b;
  width: max-content;
  font-size: 14.5px;
  text-align: center;
}

.content {
  padding: 0.4em 6.1px 0.5em 6.1px;
  color: #7f7f7f;
  width: min-content;
  margin: auto;
  min-width: 243px;
}

.flavour {
  color: #af6025;
  width: max-content;
  margin:auto;
}
</style>
