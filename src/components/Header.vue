<template lang="jade">
  .container-fluid.header_vue
    .row
      section.header.col-md-12
        ul
          li.logo.col-md-3
            router-link(to="/")
              img.img-responsive(v-bind:src="logo")
          li.menu.col-md-6.row_space--sm
            ul
              li.col-md-3
                .menu_item
                  router-link(to="/about") About
              li.col-md-3
                .menu_item
                  router-link(to='/exhibition') Exhibition
              li.col-md-3
                .menu_item
                  router-link(to='/calendar') Calendar
              li.col-md-3
                .menu_item
                  router-link(to='/qa') Q&A
          li.login.col-md-3
            //- button.btn Login
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      logo: require('../assets/logo_white.png')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
h1{
  color: $pri_green;
}
.header{
  padding-top:$space_xs;
  height:110px;
  background-color: rgba(0,0,0,.7);
  color:$base_white;
  a{
    display:block;
    width: 100%;
    height: 100%;
    color:$base_white;
  }
  .logo{
    img{
      height:75px;
      width:90px;
    }
  }
}
ul{
  width:100%;
}
.menu .menu_item{
  text-align:center;
  border-bottom:1px solid $base_white;
  font-weight: bold;
  font-size: 20px;
  height: 35px;
  line-height:35px;
  transition: all .7s;
  &:after, &:before{
    content: '';
    display:block;
    width: 5px;
    height: 5px;
    background-color: $base_white;
    border-radius:50%;
    position: absolute;
    bottom: -2px;
  }
  &:after{
    right:10px;
  }
  &:before{
    left:10px;
  }
  &:hover{
    background-color: $base_white;
    a{
      color: $pri_dark;  
    }
    &:after, &:before{
      display:none;
    }
  }
}

.login{
  text-align:right;
}
</style>
