<template>
  <div>
      <div class="text-center">
        <h2>Event Details</h2>
      </div>
      <div class="content-wrapper">
          <h4>Title</h4>
          <div>{{event.event.title}}</div>
          <h4>Date</h4>
          <div>{{event.event.date}}</div>
          <h4>Time</h4>
          <div>{{event.event.time}}</div>
          <h4>Location</h4>
          <div>{{event.event.location}}</div>
          <h4>Organizer</h4>
          <div>{{event.event.organizer}}</div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index'

export default {

    beforeRouteEnter(routeTo, routeFrom, next){
        store.dispatch('event/fetchEvent', routeTo.params.id).then(() =>{
            next()
        })
    },

    computed: {
        ...mapState(['event'])
    }
}
</script>

<style>
.content-wrapper{
    width: 35%;
    margin: auto;
    padding: 20px 0px;
}
</style>