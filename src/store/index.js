import {createStore} from "vuex";
import {postModule} from "@/store/postModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        post: postModule
    }
})
