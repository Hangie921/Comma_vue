<template lang="jade">
  .week.clearfix
    ul
      li.week_day_li(v-for="(day, key) in week")
        .week_day
          .weekDay
            {{key}}
          .date(v-bind:class="{'delete': !day.available}")
            {{day.date}}
</template>
<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
.week{
  width:auto;
  min-width:480px;
  border:4px solid #333;
  padding:20px 40px;
  font-size: 40px;
  font-weight: bold;
}
.week_day_li{
  float: left;
  width:55px;
}
.weekDay{
  text-transform:capitalize;
  font-size: 20px;
  text-align:center;
}
.date{
  text-align:center;
  color: #FF9100;
  font-family:'Avenir Black', 'Arial';
  font-weight: 600;
  line-height:40px;
}
.date.delete{
  text-decoration:line-through;
  color: #a3a3a3;
}

</style>


<script>
export default {
  components: {
  },
  props: {

  },
  data () {
    return {
      week: {
        sun: {
          date: 13,
          available: true
        },
        mon: {
          date: 14,
          available: false
        },
        tue: {
          date: 15,
          available: false
        },
        wed: {
          date: 16,
          available: true
        },
        thr: {
          date: 17,
          available: false
        },
        fri: {
          date: 18,
          available: true
        },
        sat: {
          date: 19,
          available: false
        }

      }
    }
  },
  asyncData () {
  },
  computed: {
  },
  methods: {

  }, // close methods
  mounted () {
  },
  watch: {
  }
}
</script>
