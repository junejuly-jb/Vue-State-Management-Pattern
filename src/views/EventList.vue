<template>
  <div class="about">
    <h1>Current World Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {

  created(){
    this.$store.dispatch('fetchEvents')
  },

  computed: {
    ...mapState(['events'])
  }

}
</script>