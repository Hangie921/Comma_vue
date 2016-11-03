<template lang="jade">
  .hello
    h1 {{msg}}
    h2 {{msg}}
    h3 {{msg}}
    h4 hahahah
    h3 hahahah
</template>

<script>
export default {
  data () {
    return {
      msg: 'Index Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>
