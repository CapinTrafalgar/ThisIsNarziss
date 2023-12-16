// 1.引入路由组件
import Home from '@/pages/Home'
import AboutMe from '@/pages/AboutMe'
import Article from '@/pages/Article'

export default [
    {
        path: "*",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
        meta: {
            
        }
    },
    {
        path: "/aboutme",
        component: AboutMe,
        meta: {
            
        }
    },
    {
        path: "/article/:uniformId",
        name: "wholeArticle",
        component: Article,
        meta: {
            
        }
    },
]