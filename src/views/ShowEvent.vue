<template>
  <div>
      <div class="text-center">
        <h2>Event Details</h2>
      </div>
      <div class="content-wrapper">
          <h4>Title</h4>
          <div>{{event.title}}</div>
          <h4>Date</h4>
          <div>{{event.date}}</div>
          <h4>Time</h4>
          <div>{{event.time}}</div>
          <h4>Location</h4>
          <div>{{event.location}}</div>
          <h4>Organizer</h4>
          <div>{{event.organizer}}</div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index'

export default {
    data: function(){
        return {
            id: this.$route.params.id
        }
    },

    beforeRouteEnter(routeTo, routeFrom, next){
        store.dispatch('fetchEvent', routeTo.params.id).then(() =>{
            next()
        })
    },

    // created(){
    //     this.$store.dispatch('fetchEvent', this.id)
    // },

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