<template lang="jade">
  .container-fluid.index_vue
    .row
      Banner
</template>

<script>
import banner from 'src/components/Banner'
export default {
  components: {
    'Banner': banner
  },
  data () {
    return {
      msg: 'Index Vue!'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
.index_vue{
  margin-top:-111px;
}
</style>
