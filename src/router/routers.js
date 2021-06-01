const routes = [
  /** **************************************** 首页home **************************************** **/
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      name: '精品课程',
      title: '精品课程',
      keepAlive: true
    }
  },
  {
    path: '/teamDetail',
    name: 'teamDetail',
    component: () => import('@/views/home/teamDetail.vue'),
    meta: {
      name: '精品课程',
      title: '精品课程',
      keepAlive: true
    }
  },

  /** **************************************** 评价evaluate **************************************** **/

  // 学生评价
  {
    path: '/student',
    name: 'student',
    component: () => import('@/views/evaluate/student/index.vue'),
    meta: {
      name: '学生评价 | 精品课程',
      title: '学生评价 | 精品课程',
      keepAlive: true
    }
  },
  // 学生评价详情
  {
    path: '/reply',
    name: 'reply',
    component: () => import('@/views/evaluate/student/reply.vue'),
    meta: {
      name: '学生评价详情 | 精品课程',
      title: '学生评价详情 | 精品课程',
      keepAlive: true
    }
  },


  /** **************************************** 师生互动interaction **************************************** **/
  {
    path: '/interaction',
    name: 'interaction',
    component: () => import('@/views/interaction/index.vue'),
    meta: {
      name: '师生互动 | 精品课程',
      title: '师生互动 | 精品课程',
      keepAlive: true
    }
  },
  {
    path: '/interactionDetails',
    name: 'interactionDetails',
    component: () => import('@/views/interaction/details.vue'),
    meta: {
      name: '师生互动详情 | 精品课程',
      title: '师生互动详情 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 作业提交homework **************************************** **/
  {
    path: '/homework',
    name: 'homework',
    component: () => import('@/views/homework/index.vue'),
    meta: {
      name: '作业提交 | 精品课程',
      title: '作业提交 | 精品课程',
      keepAlive: true
    }
  },
  {
    path: '/homeworkDetails',
    name: 'homeworkDetails',
    component: () => import('@/views/homework/details.vue'),
    meta: {
      name: '作业详情 | 精品课程',
      title: '作业详情 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 购物车模块cart **************************************** **/
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/cart.vue'),
    meta: {
      name: '购物车 | 精品课程',
      title: '购物车 | 精品课程',
      keepAlive: true
    }
  },
  {
    path: '/goodList',
    name: 'goodList',
    component: () => import('@/views/cart/goodList.vue'),
    meta: {
      name: '商品列表 | 精品课程',
      title: '商品列表 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 用户模块user **************************************** **/
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login/index.vue'),
    meta: {
      name: '用户登录 | 精品课程',
      title: '用户登录 | 精品课程',
      keepAlive: false
    }
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/register/index.vue'),
    meta: {
      name: '用户注册 | 精品课程',
      title: '用户注册 | 精品课程',
      keepAlive: false
    }
  },
  // 修改密码
  {
    path: '/password',
    name: 'password',
    component: () => import('@/views/user/password/index.vue'),
    meta: {
      name: '修改密码 | 精品课程',
      title: '修改密码 | 精品课程',
      keepAlive: false
    }
  },
  // 个人中心
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/user/personal/index.vue'),
    meta: {
      name: '个人中心 | 精品课程',
      title: '个人中心 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 处理页 **************************************** **/
  // 重定向首页
  {
    path: '/home',
    redirect: '/',
    meta: {
      name: '精品课程',
      title: '精品课程',
      keepAlive: true

    }
  },
  // 错误页
  {
    path: '/404',
    name: 'Error404',
    component: () => import('@/views/error/404/index.vue'),
    meta: {
      name: '未找到页面 | 精品课程',
      title: '未找到页面 | 精品课程',
      keepAlive: false
    }
  },
  // 重定向404
  {
    path: '*',
    redirect: '/404',
    meta: {
      name: '未找到页面 | 精品课程',
      title: '未找到页面 | 精品课程',
      keepAlive: false
    }
  }
]

export default routes
