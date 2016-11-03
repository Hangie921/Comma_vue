<template lang="jade">
  .container-fluid.footer
    .row
      section.col-lg-4.col-md-6.col-sm-8.col-xs-12.col-centered
        .col-md-12
          h1 Contact Information
        .col-md-12.footer_group
          ul
            li.footer__single.clearfix
              .col-lg-5.clearfix
                span Telephone
              .col-lg-3.clearfix
                span 
                  hr
              .col-lg-4.clearfix
                span (03) 3478-189
            li.footer__single.clearfix
              .col-lg-5.clearfix
                span Fax
              .col-lg-3.clearfix
                span 
                  hr
              .col-lg-4.clearfix
                span (03) 3478-189
            li.footer__single.clearfix
              .col-lg-5.clearfix
                span Email
              .col-lg-3.clearfix
                span 
                  hr
              .col-lg-4.clearfix
                span couldbedon@gmail.com
            li.footer__single.clearfix
              .col-lg-5.clearfix
                span Business hour
              .col-lg-3.clearfix
                span 
                  hr
              .col-lg-4.clearfix
                span 09:00-17:00 Daily
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
.footer{
  h1{
    text-align:center;
  }
  color: #fff;
  background-color: rgba(0,0,0,.7);
  height: 250px;
}
.footer__single{
  padding:5px;
  & span{
    height:20px;
    font-size: 20px;
    line-height:20px;
    white-space:nowrap;
  }
  hr{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  position: relative;
  &:before{
    position: absolute;
    display:block;
    content:'';
    width: 10px;
    height: 10px;
    background-color: $base_white;
    border-radius:50%;
    left:-10px;
    top:10px;
  }
}

</style>