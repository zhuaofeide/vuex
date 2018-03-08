<template>
  <div class="hello">
    <h1>test</h1>
    <h2>Essential Links</h2>
    <ul>
     <p @click='select(msg)' >{{msg}}</p>
     <router-link to='link2'>link2</router-link>
    </ul>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      msg: '点击我'
    }
  },
  methods: {
    select(msg) {
      this.$router.push('/link1')
       this.setSinger(this.msg)
    },
    ...mapMutations({
        setSinger: 'SET_SINGER'       // 映射为方法名，对应突变方法
      })
  }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
