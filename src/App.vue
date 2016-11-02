<template lang="jade">
  .app
    app-header
    h1.title_bar hahahah
    h2 hohohoh
    h3 This is a vuejs app
    router-view
</template>

<script>
import header from 'src/components/Header'
export default {
  components: {
    'appHeader': header
  }
}
</script>

<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
@import "./main.scss";
h1{
  color: $pri_green;
}
</style>
