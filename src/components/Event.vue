<template>
  <div class="list-wrapper">
    <div>{{event.title}}</div>
    <div>{{event.location}}</div>
    <div>{{event.organizer}}</div>
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
}

.list-wrapper > div {
  margin: 10px
}
</style>