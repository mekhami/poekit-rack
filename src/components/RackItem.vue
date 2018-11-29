<template>
  <div class="rack-item">
    <rack-item-icon :item="item"></rack-item-icon>
    <rack-item-popup></rack-item-popup>
  </div>
</template>

<script>
import ItemIcon from './icon/RackItemIcon'
import RackItemPopup from './RackItemPopup'

export default {
  name: 'rack-item',
  props: {
    item: Object
  },
  components: {
    RackItemPopup,
    'rack-item-icon': ItemIcon
  }
}
</script>
