import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SideBar from './SideBar'
import Plan from './Plan'
import Addons from './Addons'
import Summary from './Summary'
import Final from './Final'

function index() {
  return (
    <div>
<Routes>
<Route path='Multistep-form'   element={<SideBar />} />
<Route path='/plan'   element={<Plan />} />
<Route path='/addons'   element={<Addons />} />
<Route path='/summary'   element={<Summary />} />
<Route path='/final'  element={<Final />} />



</Routes>



    </div>
  )
}

export default index