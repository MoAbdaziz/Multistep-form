import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import{Month,Year,addtoplan,removefromplan} from "../redux/addonsSlice"
import { thecheckchanger } from '../redux/priceSlice'
function Addons() {
const navigate=useNavigate()

const plan =useSelector((store)=>store.adds.planarr)
const online = useSelector((store)=>store.adds.online)
const arcade = useSelector((store)=>store.price.arcade)
const storage = useSelector((store)=>store.adds.storage)
const profile=useSelector((store)=>store.adds.profile)
const checkvalue=useSelector((store)=>store.price.thecheck)

const dispatch=useDispatch()

const online_ref=useRef();
const storage_ref=useRef();
const profile_ref=useRef()


useEffect(()=>{
if(arcade !=9){
  dispatch(Year(10))
return
}else {

  
}




},[])


const checked = (e)=>{
  if(online_ref.current.checked==true){
    dispatch((thecheckchanger(true)))
dispatch(addtoplan({
  id:1,
  name:"Online service",
  price:1
}))

console.log(plan)

  }if (online_ref.current.checked==false){
    dispatch((thecheckchanger(false)))

    dispatch(removefromplan({
      id:1,
      name:"Online service",
      price:1
    }))
    

  }

  if (storage_ref.current.checked==true){
    dispatch((thecheckchanger(true)))

    dispatch(addtoplan({
      id:2,
      name:"Larger storage",
      price:2
    }))
    console.log(plan)



  }if (storage_ref.current.checked==false){
    dispatch((thecheckchanger(false)))

    dispatch(removefromplan({
      id:2,
      name:"Larger storage",
      price:2
    }))
    

  }
  if (profile_ref.current.checked==true){
    dispatch((thecheckchanger(true)))


    dispatch(addtoplan({name:"Customizable profile",
  price:2,
  id:3,

  }))
  


  }if (profile_ref.current.checked==false){
    dispatch((thecheckchanger(false)))

    dispatch(removefromplan({name:"Customizable profile",
    price:2
    ,id:3,
    }))

  }
}


  return (
    <div className='h-full  w-full gap-20 py-2 flex'>


<div className='side  absolute left-0 w-full md:hidden top-0 z-[0] h-[20vh]'>

<div className='flex justify-center items-center h-full gap-5   '>

<div className='border text-black  h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>1</div>
<div className='border text-black  h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>2</div>
<div className='border text-black bg-[#EEF4FB] h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>3</div>
<div className='border text-black h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>4</div>



</div>


</div>



<div className=' gap-5 w-[30vh] p-5 rounded  flex-shrink-0 mt-5 side h-[70vh] hidden md:flex flex-col'>

<section className='flex'>

<div className='border   text-white  h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full   '>

1
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 1</p>
<p className='text-white'>YOUR INFO</p>

</div>

</section>

<section className='flex'>

<div className='border  h-[25px] text-white w-[25px] flex justify-center items-center
border-white rounded-full   '>

2
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 2</p>
<p className='text-white'>SELECT PLAN</p>

</div>

</section>
<section className='flex'>

<div className='border text-black bg-[#EEF4FB]  h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full   '>

3
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 3</p>
<p className='text-white'>ADD-ONS</p>

</div>

</section>
<section className='flex'>

<div className='border text-white h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full   '>

4
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 4</p>
<p className='text-white'>SUMMARY</p>

</div>

</section>






        </div>

<div className='flex flex-col flex-grow-1 m-auto gap-5'>
<div className='mt-20 ml-2'>
<p className='font-extrabold text-2xl text-[#02295A] '>Pick add-ons</p>
<p className='text-gray-500 text-sm'>Add-ons help enhance your gaming experience</p>
</div>

<div className='flex flex-col gap-5'>

  <div className='flex bg-gray-50 rounded-lg w-[450px] border-[#02295A] py-3 justify-between border'>
    <section className='flex gap-5'>
<div className='flex px-5 justify-cen
ter items-center'><input defaultChecked={checkvalue} onChange={checked}

name='service' ref={online_ref} type="checkbox" /></div>
<div>
<label className="font-bold text-sm text-[#02295A]" htmlFor="service">Online service</label>
<p className='text-gray-500 text-sm'>Access to multiplayer games </p>
</div>
</section>
<div className=' text-[#473DFF] mr-2 text-sm flex px-2  justify-center items-center' >

+${online}/{arcade ==9 ? "mo" : "year" }
</div>


  </div>

 



  <div className='flex bg-gray-50 rounded-lg w-[450px] border-[#02295A] py-3 justify-between border'>
    <section className='flex gap-5'>
<div className='flex px-5 just
ify-center items-center'><input defaultChecked={checkvalue} ref={storage_ref} onChange={checked}  name='service' type="checkbox" /></div>
<div>
<label  className="font-bold text-sm text-[#02295A]" htmlFor="service">Larger storage</label>
<p className='text-gray-500 text-sm'>Extra 1TB of cloud storage </p>
</div>
</section>
<div className=' text-[#473DFF]  mr-2 text-sm flex px-2  justify-center items-center'>
+${storage}/{arcade ==9 ? "mo" : "year" }
</div>


  </div>






  <div className='flex bg-gray-50 rounded-lg w-[450px] border-[#02295A] py-3 justify-between border'>
    <section className='flex gap-5'>
<div className='flex px-5 
justify-center items-c
enter'><input ref={profile_ref} defaultChecked={checkvalue} onChange={checked} name='service' type="checkbox" /></div>
<div>
<label   className="font-bold text-sm text-[#02295A]" htmlFor="service">Customizable Profile</label>
<p className='text-gray-500 text-sm'>
  Custom theme on your profile</p>
</div>
</section>
<div className=' text-[#473DFF]   mr-2 text-sm flex px-2  justify-center items-center'>
+${profile}/{arcade ==9 ? "mo" : "year" }
</div>

  </div>






</div>
<div className='w-full  flex mt-20 justify-between'>

  <button onClick={()=>{navigate("/plan")}} className='text-gray-500'>Go Back</button>
  <button onClick={()=>{navigate("/summary")}} className='bg-[#02295A] text-white px-4 py-2  rounded'>Next Step</button>
</div>

</div>





    </div>
  )
}

export default Addons