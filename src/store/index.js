import { createStore } from "vuex";

export default createStore({
  state: {
    schedule: { 20220503: ['test1','test2','test3'] },
  },
  mutations: {
    ADD_SCHEDULE(state,data){
      if(state.schedule[data.date]){
        state.schedule[data.date].push(data.context)
      }else{
        state.schedule[data.date] = [data.context]
      }
    }
  },
  actions: {},
  modules: {},
});
