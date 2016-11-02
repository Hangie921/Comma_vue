<template lang="jade">
  .container-fluid
    .row
      section.header
        ul
          li
            router-link(to="/") Home
          li
            router-link(to="/about") About
          li
            router-link(to='/exhibition') Exhibition
          li
            router-link(to='/calendar') Calendar
          li
            router-link(to='/qa') Q&A
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
h1{
  color: $pri_green;
}
</style>
