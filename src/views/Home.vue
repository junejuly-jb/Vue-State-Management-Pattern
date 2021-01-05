<template>
  <div class="home">
    <input type="number" v-model.number="value">
    <p>increment by: ( {{value}} )</p>
    <h1>{{count}}</h1>
    <button @click="incrementCount">Increment</button>
    <button @click="resetCount">Reset</button>
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
