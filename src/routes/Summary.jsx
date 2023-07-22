import React from 'react'
import { useState,useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'


function Summary() {

  const [one,setOne]=useState(0)
  const [two,setTwo]=useState(0)
  const [three,setThree]=useState(0)

  const [plans,setPlans]=useState("")

const plan=useSelector((store)=>store.price.plan_1)
const arcade=useSelector((store)=>store.price.arcade)
const pro=useSelector((store)=>store.price.pro)
const adv=useSelector((store)=>store.price.advanced)

const x = useSelector((store)=>store.adds.planarr)

const Navigate=useNavigate()

useEffect(()=>{


if (x.length==0){
  return

}else {



  for (let i =0; i<x.length;i++){



    if (x[i].id==1 && arcade==9){
      setOne(1)
  

    }if (x[i].id==1 && arcade!=9){
  setOne(10)
    }
  if (x[i].id==2 && arcade==9){
  setTwo(2)
  }
  
  if (x[i].id==2 && arcade!=9){
    setTwo(20)
    }
  
  
  
  
    if (x[i].id==3 && arcade==9){
      setThree(2)
      }
  
  
  
  
  
  
      if (x[i].id==3 && arcade!=9){
        setThree(20)
        
  
  
  
      }else {
       
      }
      }
  }
},[x])


// useEffect(()=>{
//   checkingvalues()
// },[])


const theplan=()=>{

if(plan==="Arcade"  && arcade==9){
  setPlans(9)
  return

}if (plan==="Arcade"  && arcade!=9){
  setPlans(90)
  return

}if (plan==="Advance"  && adv==12){
  setPlans(12)
  return

}if (plan==="Advance" && adv!=12){
  setPlans(120)
  return

}if (plan==="Pro" && pro==15){
  setPlans(15)
  return

}if (plan==="Pro"  && pro!=15){
  setPlans(150)
  return

}else {
  setPlans(0)
}
}

useEffect(()=>{
  theplan()

},[])
console.log(one)
        console.log(two)
        console.log(three)
console.log(x.length)
  
console.log(x)

return (
    <div className='h-full w-full gap-20 py-2 flex'>


<div className='side  absolute left-0 w-full md:hidden top-0 z-[0] h-[20vh]'>

<div className='flex justify-center items-center h-full gap-5   '>

<div className='border text-black  h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>1</div>
<div className='border text-black  h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>2</div>
<div className='border text-black h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>3</div>
<div className='border text-black bg-[#EEF4FB] h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>4</div>



</div>


</div>

   <div className=' gap-5 w-[30vh] p-5 rounded  flex-shrink-0 mt-5 side h-[70vh] hidden md:flex flex-col'>

<section className='flex'>

<div className='border  text-white h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full   '>

1
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 1</p>
<p className='text-white'>YOUR INFO</p>

</div>

</section>

<section className='flex'>

<div className='border text-white h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full   '>

2
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 2</p>
<p className='text-white'>SELECT PLAN</p>

</div>

</section>
<section className='flex'>

<div className='border text-white h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full   '>

3
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 3</p>
<p className='text-white'>ADD-ONS</p>

</div>

</section>
<section className='flex'>

<div className='border text-black bg-[#EEF4FB] h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full   '>

4
</div>


<div className='pl-4 flex flex-col'>

<p className='text-gray-700 text-[12px]'>STEP 4</p>
<p className='text-white'>SUMMARY</p>

</div>

</section>






        </div>
<div className='flex  m-auto w-[40%] flex-col'>
<div className='mt-20'>
<h1 className='text-[#02295A] font-bold text-2xl'> Finishing up</h1>
<p className='text-gray-500 text-sm'>Double-check everything looks OK before confirming</p>
</div>

<div>
  <div className='flex mt-5 justify-between'>
<div className='text-[#02295A] ml-2'>{plan}{arcade == 9 ? "(Monthly)"  :"(Yearly)"}</div>
<div className=' text-sm text-[#02295A]'>${plans}/{arcade==9 ?"mo" : "yr"}
</div>
</div>
<hr className='mt-5' />
<div className='mt-3'>
{
  x ==[]  ?  <div className='font-bold flex justify-center item-center py-5'>No Addons</div>:
    x.map((item,i)=>(
<div key={i} className='flex justify-between'>
<div className=' text-xs text-gray-500 '>{item.name}</div>
<div className='text-xs font-thin' >{arcade==9 ? `+$${item.price}/mo` : `+$${item.price*10}/yr`}</div>
</div>
    ))
   
}

</div>
<hr className='mt-10' />
<div className='mt-10 flex items-center justify-between'>

  <div className='text-gray-500 text-xs font-bold'>Total{arcade==9 ?   "(per month)" : "(per year)"}</div>
  <div>${parseFloat(plans+one+two+three)}{arcade==9 ?  "/mo"   :"/yr"}</div>
</div>
</div>
<div className='flex justify-between gap-10 mt-[130px]'>
<button className='text-gray-500 text-sm font-bold' onClick={()=>{Navigate("/Addons")}}>Go Back</button>
<button onClick={()=>Navigate("/final")} className='text-white bg-blue-700 rounded-lg px-4 py-2'>Confirm</button>

</div>
</div>
    </div>
  )
}

export default Summary