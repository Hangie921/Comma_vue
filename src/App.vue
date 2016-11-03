<template lang="jade">
  .container-fluid.app
    .row
      app-header
      router-view
      app-footer
</template>

<script>
import header from 'src/components/Header'
import footer from 'src/components/Footer'
export default {
  components: {
    'appHeader': header,
    'appFooter': footer
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
// @import "~weather-icons/css/weather-icons.min.css";
@import "~font-awesome/css/font-awesome.min.css";
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
@import "./main.scss";
.header_vue, .index_vue{
  position: relative;
}
.header_vue{
  z-index: $zindex_header;
}
</style>
