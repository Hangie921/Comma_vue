<template lang="jade">
  section.banner
    .bg
      img.bgImg(
      v-for="(img, $index) in imgs"
      v-bind:src="img"
      v-bind:data-index="$index"
      )
    h1 {{imgs}}
</template>

<script>
import $ from 'jquery'
// import _ from 'lodash'
export default {
  components: {
  },
  data () {
    return {
      imgs: [
        require('assets/Bgs/2.jpg'),
        require('assets/Bgs/3.jpg'),
        require('assets/Bgs/4.jpg'),
        require('assets/Bgs/1.jpg')
      ],
      counter: 2
    }
  },
  asyncData () {
  },
  computed: {
  },
  methods: {
    changeBg () {
      console.log(this.counter)
      switch (this.counter) {
        case 1:
          $('.bgImg:nth-child(4)').animate({'opacity': '0'}, 6000)
          $('.bgImg:nth-child(1)').animate({'opacity': '1'}, 6000).addClass('zoom')
          $('.bgImg:nth-child(3)').removeClass('zoom')
          this.counter++
          break

        case 2:
          $('.bgImg:nth-child(1)').animate({'opacity': '0'}, 6000)
          $('.bgImg:nth-child(2)').animate({'opacity': '1'}, 6000).addClass('zoom')
          $('.bgImg:nth-child(4)').removeClass('zoom')
          this.counter++
          break

        case 3:
          $('.bgImg:nth-child(2)').animate({'opacity': '0'}, 6000)
          $('.bgImg:nth-child(3)').animate({'opacity': '1'}, 6000).addClass('zoom')
          $('.bgImg:nth-child(1)').removeClass('zoom')
          this.counter++
          break

        case 4:
          $('.bgImg:nth-child(3)').animate({'opacity': '0'}, 6000)
          $('.bgImg:nth-child(4)').animate({'opacity': '1'}, 6000).addClass('zoom')
          $('.bgImg:nth-child(2)').removeClass('zoom')
          this.counter = 1
          break
      }
    }
  }, // close methods
  mounted () {
    let vue = this
    this.changeBg()
    setInterval(function () {
      vue.changeBg()
    }, 6000)
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
h1 {
  color: $pri_dark;
}
.bg{
  overflow:hidden;
  position: relative;
  width:100vw;
  height:100vh;
  img{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width:100%;
    height:100%;
  }

}
.zoom{
  animation: zoom 14s 0s linear infinite forwards;
}

@keyframes zoom {
  0%{transition: scale(1,1)}
  100%{transition: scale(1.4,1.4)}
}
</style>
