<template>
  <div>
      <div class="content-wrapper">
          <div class="text-center"><h1>Create Event</h1></div>
          <div class="form">
              <form @submit.prevent="onClickAddEvent">
                  <div>
                    <label>Organizer</label><br>
                    <input type="text" readonly v-model="form.organizer">
                  </div>
                  <div>
                    <label>Title</label><br>
                    <input type="text" v-model="form.title">
                  </div>
                  <div>
                    <label>Date</label><br>
                    <input type="date" v-model="form.date">
                  </div>
                  <div>
                    <label>Time</label><br>
                    <input type="time" v-model="form.time">
                  </div>
                  <div>
                    <label>Location</label><br>
                    <input type="text" v-model="form.location">
                  </div>
                  <div>
                      <button class="btnSubmit">Submit</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return{
            form: this.generateCredentials()
        }
    },

    methods: {
        onClickAddEvent(){
            this.$store.dispatch('event/createEvents', this.form)
            // console.log(this.form)
            .then( () => {
                console.log('success hehe')
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                this.form = this.generateCredentials();
            })
        },

        generateCredentials(){
            const id = Math.floor(Math.random() * 10000000)

            return {
                 id: id,
                 organizer: 'June Brianne',
                 title: '',
                 date: '',
                 time: '',
                 location: ''
            }
        }
    }
}
</script>

<style scoped>
.form{
    width: 30%;
    margin: auto;
}
input{
    width: 100%;
    padding: 10px 5px;
    margin-bottom: 20px;
    font-size: 22px;
}
label{
    font-size: 20px;
}
.btnSubmit{
    padding: 15px 35px;
    background: none;
    border: 1px solid black;
    float: right;
    cursor: pointer;
}
</style>