import { createStore } from "vuex";

export default createStore({
  state: {
    schedule: { 20220532: ['test1','test2','test3'] },
  },
  mutations: {
    ADD_SCHEDULE(state,data){
      if(state.schedule[data.date]){
        state.schedule[data.date].push(data.context)
      }else{
        state.schedule[data.date] = [data.context]
      }
    },
    CLEAR_SCHEDULE(state,date){
      state.schedule[date] = [];
    },
    DELETE_SCHEDULE(state,data){
      state.schedule[data.date].splice(data.index, 1);
    },
  },
  actions: {},
  modules: {},
});
