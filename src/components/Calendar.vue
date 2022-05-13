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
            <div v-for="s in this.$store.state.schedule[20220500 + date]" :key="s"> {{s}}  </div>
        </div>
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
      id: 0,
    };
  },
  methods: {
      addSchedule(newdate,newcontext){
        this.$store.commit('ADD_SCHEDULE', {date: newdate, context: newcontext});
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
</style>