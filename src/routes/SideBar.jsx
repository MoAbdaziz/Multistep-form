import React from 'react'
import { useState,useRef } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function SideBar() {

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[phone,setPhone]=useState("")
const name_ref=useRef();
const email_ref=useRef();
const mobile_ref=useRef();

const navigate=useNavigate()


const verifyit=()=>{
if(name_ref.current.value==""){
  setName("Pleas enter a valid username")
  name_ref.current.focus()
return
}else{
  setName("")
}


if(name_ref.current.value.trim().length <6){
  setName("Username shouldn't be less than 6 letters")


}


if(email_ref.current.value==""){
  setEmail("Please enter a valid email address")
email_ref.current.focus()
return

}

setEmail("")





if (mobile_ref.current.value==""||isNaN(mobile_ref.current.value)){
  setPhone("Please enter a valid phone number")
return

}
else if (mobile_ref.current.value.trim().length <11){
  setPhone("Phone number shouldn't be less than 12 numbers")
return
}
setPhone("")


  navigate('plan')




}



  return (
    <div className='h-full w-[100%] md:w-full flex-col flex flex-shrink py-2 md:flex-row '>

{/* mobile */}

<div className='side  absolute left-0 w-full md:hidden top-0 z-[0] h-[20vh]'>

<div className='flex justify-center items-center h-full gap-5   '>

<div className='border bg-[#EEF4FB] h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>1</div>
<div className='border text-black h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>2</div>
<div className='border text-black h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>3</div>
<div className='border text-black h-[25px] w-[25px] flex justify-center items-center
border-white rounded-full'>4</div>



</div>


</div>



{/* left */}
        <div className=' gap-5 w-[30vh] hidden p-5 rounded  flex-shrink-0 mt-5 side h-[70vh] md:flex flex-col'>

<section className='flex'>

<div className='border bg-[#EEF4FB] h-[25px] w-[25px] flex justify-center items-center
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


<div className='flex z-[2]  flex-grow-1 flex-col  md:px-[100px]'>

<h1 className='font-bold mt-20 text-3xl text-[#02295A]'>Personal Info</h1>
<p className='text-sm  text-[#9699AB]'>  Please provide your name, email address, and phone number.
</p>


<div className='mt-10'>

<div className='flex gap-[200px]'>
<label htmlFor="name">Name</label>
<p className=' text-xs text-red-500 font-bold'>{name}</p>

</div>
<input ref={name_ref} className='border rounded-lg flex flex-grow-1  w-[90%] mt-2 py-2' type="text" name="name" id="" />

</div>
<div className='mt-2' >
  <div className='flex gap-20'>
  <label htmlFor="email">Email Address</label>
<p className='text-red-500 text-xs font-bold'>{email}</p>
  </div>

<input ref={email_ref} className='border rounded-lg flex flex-grow-1 w-[90%] mt-2 py-2' placeholder='e.g janedoe@lorem.com' type="email" name="email" id="" />

</div>


<div className='mt-2'>

  <div className='flex gap-20'>
  <label htmlFor="mobile">Phone Number</label>
<p  className= ' text-xs text-red-500 font-bold'>{phone}</p>
  </div>

<input ref={mobile_ref} className='border mobile rounded-lg flex items-center justify-center flex-grow-1 w-[90%] mt-2 py-2' type="text" name="mobile" id="mobile" placeholder=' example: 0100000000' />

</div>
<div className='flex items-center justify-center md:items-end mt-[80px] ml-10 w-full md:justify-end'>
<button onClick={()=>verifyit()} className='rounded text-white px-4   py-2 bg-blue-800'>
  
  Next Step
  
  
  
  </button>
  </div>
</div>





    </div>
  )
}

export default SideBar