<template>
  <div class="home text-center">
    <input type="number" v-model.number="value" class="input">
    <p>increment by: ( {{value}} )</p>
    <div class="counter">{{count}}</div>
    <button @click="incrementCount" class="btn">Increment</button>
    <button @click="resetCount" class="btn">Reset</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  data(){
    return {
      value: 0,
      resetValue: 0
    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {

    incrementCount(){
      this.$store.dispatch('incrementCount', this.value)
    },
    
    resetCount(){
      this.$store.commit('RESET_COUNT', this.resetValue)
    }
    
  }
}
</script>
<style scoped>
.counter{
  font-size: 100px;
  font-weight: bold;
  padding: 20px 20px;
}

.btn{
  padding: 10px 25px;
  margin: 0px 10px;
  border: 2px solid black;
  background: none;
}
</style>