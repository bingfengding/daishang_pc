
export default {
  state: {
    homeValue: {
      articles : 0,
      changeId : true
 
    
    },
   
  },
  getters:{
    doneArticles: state=>{
      return state.homeValue.articles
    },
    doneChangeId:state=>{
      return state.homeValue.changeId
    },
  },
  mutations: {
    setArticles(state,{
      art_id
    }){
     
      state.homeValue.articles = art_id
    },
    setChangeId(state){

      state.homeValue.changeId = state.homeValue.changeId?false:true
    }

  },
  actions: {
    // userLogin(context, {
    //   user_name,
    //   user_pass
    // }) {
    //   login(user_name, user_pass).then((result) => {

    //     if (result.data.code == 200) {
    //       let token = result.data.data.token;
    //       if (token != "") {
    //         context.commit("setUser", {
    //           "user_name": user_name,
    //           "user_token": token
    //         })
    //       }

    //       // this.$router.push({
    //       //   path: "/"
    //       // }); //登录成功之后重定向到首页

    //     } else {
    //       return Promise.reject(result)
    //     }

    //   })
    // }
  }
}
