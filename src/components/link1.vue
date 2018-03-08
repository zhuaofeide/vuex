<template>
  <div class="link1">
     <p :title="title">{{title}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
  },
   computed: {
       title() {
        return this.singer
      },
      ...mapGetters([
          'singer'
        ]
      )
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
