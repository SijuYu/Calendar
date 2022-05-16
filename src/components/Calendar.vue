<template>
  <div>
    <div class="calendar-box">
        <div class="day-cell" v-for="i in offset" :key="i"></div>
        <div class="day-cell" v-for="date in daysInMonth" :key="date">
            <div class="day-head">
                {{date}}
                <button class="day-btn" @click="this.$store.commit('CLEAR_SCHEDULE',20220500 + date)"> X </button>
                <button class="day-btn" @click="addSchedule(20220500 + date,'inputtest')"> + </button>
            </div>
            <div v-for="(s,id) in this.$store.state.schedule[20220500 + date]" :key="id">
              <div v-if="cursor.date == 20220500 + date && cursor.index == id">
                <input @keydown.enter="updateSchedule(20220500 + date, id, $event.target.value)"
                  id="input-cell" type="text">
              </div>
              <div v-else>
                {{s}}
                <button @click="deleteSchedule(20220500+date, id)"> x </button>
                <button @click="setCursor(20220500+date, id)"> i </button>
              </div>
            </div>
        </div>
        <div class="day-cell" v-for="k in (7-(daysInMonth + offset)%7)" :key="k"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      offset: 3, //1일이 무슨 요일인지에 따라 비워지는 day-cell을 지정해 준 것(이후 월마다의 정보에 따라 변경가능케 하기)
      daysInMonth: 31,
      index: 0,
      cursor:{
        date: 0,
        index: 0,
      }
    };
  },
  methods: {
      addSchedule(newdate,newcontext){
        this.$store.commit('ADD_SCHEDULE', {date: newdate, context: newcontext});
      },
      deleteSchedule(deletedate, id){
        this.$store.commit('DELETE_SCHEDULE', {date: deletedate, index: id});        
      },
      setCursor(d,i){
        this.cursor.date = d;
        this.cursor.index = i;
      },
      updateSchedule(updatedate, updateid, updateContext){
        this.$store.commit('UPDATE_SCHEDULE', {date: updatedate, index: updateid, context: updateContext});
        this.setCursor(0, 0);
      },
  }
};
</script>

<style>
.calendar-box {
  margin-left: 15vw;
  width: 70vw;
  border: 2px solid black;

  display: flex;
  flex-wrap: wrap;
}

.day-cell {
  border: 1px solid gray;
  width: calc(10vw - 2px);
  height: 160px;

  flex-basis: calc(10vw - 2px);
  flex-shrink: 1;
}

.day-head{
    width: calc(10vw - 2px);
    height: 20px;
    
    background-color: antiquewhite;
}

button{
  float: right;
  height: 20px;
  width: 20px;
  margin: 0;

  background-color: bisque;
  border: 1px solid wheat;
}

button:hover{
    cursor: pointer;
}

#input-cell{
  width: calc(10vw - 6px);
  padding: 0px;
  
}

</style>