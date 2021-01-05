<template>
  <div class="about">
    <h1 class="text-center">Current World Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" :class="evt-card"/>
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
