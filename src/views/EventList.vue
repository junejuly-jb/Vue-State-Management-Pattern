<template>
  <div class="about">
    <h1 class="text-center">Current World Events</h1>
    <div class="text-center">
      <router-link class="btn" tag="button" to="/createEvent">Add Event</router-link>
    </div>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../store/index'

export default {

  beforeRouteEnter(routeTo, routeFrom, next){
    store.dispatch('event/fetchEvents').then(() => {
      next()
    })
  },

  computed: {
    ...mapState(['event'])
  }

}
</script>
<style scoped>
.btn{
  padding: 10px 50px;
  border: 2px solid gray;
  background: none;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover{
  border: 2px solid lightgreen;
}
</style>