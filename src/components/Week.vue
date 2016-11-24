<template lang="jade">
  .week.col-xd-12
    ul
      li.week_day_li(v-for="(day, key) in week")
        .week_day
          .weekDay
            {{key}}
          .date(class="{'available': day.available}")
            {{day.date}}
</template>
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
<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
.week_day_li{
  float: left;
  width:60px;
}
</style>