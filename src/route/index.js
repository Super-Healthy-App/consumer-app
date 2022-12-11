import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About/index.js'
import Article from '../page/Article'
import Bmi from '../page/Bmi'
import Calorie from '../page/Calorie'
import Break from '../page/Break'



const Routes = () => useRoutes([
    {
        path: '/',
        element: (<Home />)
    },
    {
        path: '/about',
        element: ( <About />)
    },
    {
        path: '/article',
        element: (<Article />)
    },
    {
        path: '/bmi',
        element: (<Bmi />)
    },
    {
        path: '/calorie',
        element: ( <Calorie />)
    },
    {
        path: '/break',
        element: (<Break />)
    }
])

export default Routes