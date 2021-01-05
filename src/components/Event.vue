<template>
  <div>
    <router-link :to="'/showevent/' + event.id">
      <div class="list-wrapper">
        <div>{{event.title}}</div>
        <div>{{event.location}}</div>
        <div>{{event.organizer}}</div>
      </div>
    </router-link>
  </div>
  
</template>

<script>
export default {
  props: ['event']
}
</script>

<style scoped>
.list-wrapper{
  padding: 10px 10px;
  width: 30%;
  margin: 30px auto 30px auto;
  border: 1px solid gray;
  border-radius: 5px;
}
.list-wrapper:hover{
  border: 1px solid dodgerblue;
}
.list-wrapper > div {
  margin: 10px
}

a{
  text-decoration: none;
  color: gray;
}
</style>