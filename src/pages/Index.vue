<template lang="jade">
  .container-fluid.index_vue
    .row
      Banner
      .col-lg-12
        section.site.site_section.col-lg-10.col-centered
          header.site_header.col-lg-12.clearfix
            .border
              h2.site_en_name SITE 
              h2.site_cn_name 展覽場地
          section.site_group.col-lg-12.clearfix
            .site__single.col-lg-12.row_space--sm
              .img_group.col-lg-7
                .mask
                img(v-bind:src="imgs[0]")
              .week_group.col-lg-5
                Week
            .site__single.col-lg-12.row_space--sm
              .week_group.col-lg-5
                Week
              .img_group.col-lg-7
                .mask
                img(v-bind:src="imgs[1]")

</template>

<script>
import banner from 'src/components/Banner'
import week from 'src/components/Week'
export default {
  components: {
    'Banner': banner,
    'Week': week
  },
  data () {
    return {
      imgs: [
        require('assets/site/photo006.jpg'),
        require('assets/site/stringio5(smaill.jpg')
      ]
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
  overflow-y:hidden;
}
// Site
.site_header{
  position: relative;
  height:250px;
}
.border{
  left:60px;
  top:40px;
  width:25%;
  height:300px;
  border:5px solid #333;
  position: absolute;
  .site_en_name{
    top: 40px;
    left: 87%;
    position: absolute;
    display:block;
    color: #606060;
    font-size: 72px;
    font-family: 'Montserrat', 'sans-serif','Avenir Light','Arial';
    font-weight: bold;
  }
  .site_cn_name{
    position: absolute;
    top: 110px;
    left:140%;
    width:auto;
    display:inline-block;
    font-size: 30px;
    font-family: 'Times New Roman','arial';
    white-space: nowrap;
  }
}
.site__single{
  img{
    width:100%;
    height:auto;
  }
}

</style>
