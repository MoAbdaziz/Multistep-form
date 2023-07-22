import React from 'react'
import Thanks from "../assets/imgs/icon-thank-you.svg"

function Final() {
  return (
    <div className='h-full w-full gap-20 py-2 flex'>
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
        <div className='m-auto flex justify-center items-center'>
<div className='flex flex-col'>
<div className='flex m-auto justify-center'>
<img className='' src={Thanks} alt="" />
</div>
<div className='text-[#02295A]'>
    <p className='mt-5  text-center font-extrabold text-2xl'>Thank You!</p>
</div>
<div className='font-thin text-gray-500 text-sm'>
    
    <p className=' text-center w-[400px]'>
    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
    </p>
     </div>
</div>

        </div>



    </div>
  )
}

export default Final