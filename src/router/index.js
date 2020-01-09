import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'

Vue.use(Router)

var router =  new Router({
 //mode:'history',

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      },
     
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    }
  ]
 
})
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log('++++');
  //可以判断是否登录 然后  next 传入路径
  next()
})
export default router