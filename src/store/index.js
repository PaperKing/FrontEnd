import Vue from "vue";
import Vuex from 'vuex';
import user from "./user";
import exam from "./exam";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userStore:user,
        examStore:exam
    }
})
