import Vue from 'vue'
import Router from 'vue-router'
const home = r =>
  require.ensure([], () => r(require("view/home.vue")), "home");

Vue.use(Router)

export const RouterMap = [
  {
    path: "/",
    redirect: "/home"
  },{
    path: '/home',
    name: 'home',
    component: home
  },
];

const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: RouterMap
});
  

router.beforeEach((to, from, next) => {

  let locationA = window.location
  let hostname = window.location.hostname
  
  let re = /^www/
  let isH5 = re.test(hostname)
  function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone",
      "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v <
      Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  if(IsPC()){
    
    next()
  }else{
    if(isH5){//手机端点击了电脑网站
  
      let newName = hostname.replace(/www/,'m')
    
      window.location.href = locationA.protocol +"//"+ newName
    }
    next()
  }
  
})

export default router;