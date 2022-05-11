<template>
  <div>
    <div class="calendar-box">
      <div class="day-cell" v-for="i in offset" :key="i"></div>
      <div class="day-cell" v-for="j in daysInMonth" :key="j">
        {{j}}
        <button class="day-btn"> - </button>
        <button class="day-btn"> + </button>
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
    };
  },
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
}

button{
  float: right;
  height: 20px;
  width: 20px;
  margin: 0;

  border: 1px solid white;
}
</style>