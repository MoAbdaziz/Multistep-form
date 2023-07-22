import React, { useState } from 'react'
import arcade from "../assets/imgs/icon-arcade.svg"
import pro from "../assets/imgs/icon-pro.svg"
import adv from "../assets/imgs/icon-advanced.svg"
import priceSlice from '../redux/priceSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Yearlysub,Monthlysub,choosePlan,choosevalue} from '../redux/priceSlice'
import { useNavigate,Link } from 'react-router-dom'
import { useRef } from 'react'
import { toast } from 'react-toastify'



function Plan() {


  const navigate =useNavigate()
  const [plan,setPlan]=useState(useSelector((x)=>x.price.plan_1))
  

  const dispatch=useDispatch()

  const arcadeNumber=useSelector((state)=>state.price.arcade)
const proNumber=useSelector((state)=>state.price.pro)
const advancedNumber=useSelector((state)=>state.price.advanced)
const thevalue=useSelector((store)=>store.price.thevalue)
let k;


const arc_ref=useRef()
const pro_ref=useRef();
const adv_ref=useRef()
const slider=useRef()

const selectplan =(e)=>{
//   if ( e.target= arc_ref.current){
// arc_ref.current.classList.add("border-blue-900")
// adv_ref.current.classList.remove("border-blue-900")
// pro_ref.current.classList.remove("border-blue-900")

//   }

//    if (e.target=adv_ref.current){
//     arc_ref.current.classList.remove("border-blue-900")
//     adv_ref.current.classList.add("border-blue-900")
//     pro_ref.current.classList.remove("border-blue-900")
    
//   }




//   if (e.target=pro_ref.current){
//     arc_ref.current.classList.remove("border-blue-900")
//     adv_ref.current.classList.remove("border-blue-900")
//     pro_ref.current.classList.add("border-blue-900")
    
//   }

switch ( e.target){
  case arc_ref.current : arc_ref.current.classList.add("border-blue-900")
  adv_ref.current.classList.remove("border-blue-900")
  pro_ref.current.classList.remove("border-blue-900")
  dispatch(choosePlan("Arcade"))
  setPlan("Arcade")

  break;

  case adv_ref.current : arc_ref.current.classList.remove("border-blue-900")
  adv_ref.current.classList.add("border-blue-900")
  pro_ref.current.classList.remove("border-blue-900")
  dispatch(choosePlan("Advance"))
  setPlan("Advance")
  break;
  case pro_ref.current : arc_ref.current.classList.remove("border-blue-900")
  adv_ref.current.classList.remove("border-blue-900")
  pro_ref.current.classList.add("border-blue-900")
  dispatch(choosePlan("Pro"))
  setPlan("Pro")
  break;

  default :arc_ref.current.classList.remove("border-blue-900")
  adv_ref.current.classList.remove("border-blue-900")
  pro_ref.current.classList.remove("border-blue-900")
  dispatch(choosePlan(null))
  setPlan("")
  }



console.log(plan)
}




const subplan=(e)=>{
 k = e.target.value;
 if ( k == 1 ){
  dispatch(Monthlysub(10))
dispatch(choosevalue(1))

}


  if (k ==2){
    dispatch(Yearlysub(10))
dispatch(choosevalue(2))
  }




}

const navigates =()=>{
if (plan != ""){
  navigate("/Addons")
}else{
  toast.error("Please Select Payment Plan")

}

}

  return (





    <div className='h-full w-full gap-20 py-2 flex'>


<div className='side  absolute left-0 w-full md:hidden top-0 z-[0] h-[20vh]'>

<div className='flex justify-center items-center h-full gap-5   '>

<div className='border text-black  h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>1</div>
<div className='border text-black bg-[#EEF4FB] h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>2</div>
<div className='border text-black h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>3</div>
<div className='border text-black h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>4</div>



</div>


</div>

{/* left */}
<div className=' hidden gap-5 w-[30vh] p-5 rounded  flex-shrink-0 mt-5 side h-[70vh] md:flex flex-col'>

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

<div className='border bg-[#EEF4FB] h-[25px] w-[25px] flex justify-center items-center
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
<div className='flex flex-shrink gap-10 items-center justify-center  w-full  flex-col'>


        <div>
<h1 className='mt-[100px] font-bold text-2xl'>Select Your plan</h1>
<p className='text-gray-400 mt-2 font-thin text-sm'>you have the option of yearly or monthly billing</p>
        </div>
<div className='flex flex-shrink-1 mt-10 gap-[1vh] py-5 md:gap-10'> 


<div ref={arc_ref} onClick={selectplan} className={arcadeNumber==9 ? `h-[150px]   cursor-pointer w-[90px]  md:w-[120px] rounded  hover:border-[black]  border` : `h-[170px] cursor-pointer w-[90px]  md:w-[120px] rounded  hover:border-[black]  border`}>
<img className='ml-2 mt-5' src={arcade} alt="" />

<div className=' mt-10 '>
<p className='text-[#02295A] font-bold ml-2 text-sm'>Arcade</p>
<p className='text-gray-500 ml-3 text-xs'>${arcadeNumber}{arcadeNumber ==9 ? "/Month" : "/Year"}</p>
{arcadeNumber ==9 ?  "" : <div className='text-xs ml-2  font-thin'>2 Months free</div>}

</div>

</div>




<div ref={adv_ref} onClick={selectplan} className={advancedNumber==12 ?   `h-[150px]   cursor-pointer w-[90px] md:w-[120px] rounded hover:border-[black]  border` : `h-[170px]   cursor-pointer w-[90px] md:w-[120px] rounded hover:border-[black]  border`}>
<img className='ml-2 mt-5' src={adv} alt="" />

<div className='mt-10 '>
<p className='text-[#02295A] font-bold ml-2 text-sm'>Advanced</p>
<p className='text-gray-500 ml-3 text-xs'>${advancedNumber}{advancedNumber==12 ? "/Month" : "/Year"}</p>
{advancedNumber ==12 ?  "" : <div className='text-xs ml-2  font-thin'>2 Months free</div>}

</div>

</div>


<div ref={pro_ref} onClick={selectplan} className={proNumber ==15 ?    ` cursor-pointer w-[90px] md:w-[120px] rounded hover:border-[black] h-[150]   border`  : ` cursor-pointer w-[90px] md:w-[120px] rounded hover:border-[black] h-[170]   border` } >
<img className='ml-2 mt-5' src={pro} alt="" />

<div className='mt-10 '>
<p className='text-[#02295A] font-bold ml-2 text-sm'>Pro</p>
<p className='text-gray-500 ml-3 text-xs'>${proNumber}{proNumber ==15 ? "/Month" : "/Year"}</p>
{proNumber ==15 ?  "" : <div className='text-xs ml-2  font-thin'>2 Months free</div>}
</div>

</div>












</div>
<div  id='ranges' className='m-auto flex gap-5 h-10 justify-center items-center w-[400px] bg-gray-200'>
  <p>Monthly</p>
<input id='slider' ref={slider} className='w-14 rounded h-20 ' onChange={subplan} type="range" defaultValue={thevalue}  min={1} max={2} />
<p>Yearly</p>
</div>
<div className='flex w-full justify-around'>
<button  className='text-[#02295A]'><Link to="/" >Go Back</Link></button>
<button onClick={navigates}  className='rounded text-white px-4   py-2 bg-blue-800'>Next Step</button>

</div>
</div>


    </div>
    
  )
}



export default Plan