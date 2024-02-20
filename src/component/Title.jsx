import React from 'react'
import leet from "../assets/leet.png"
import Link from "../assets/link.svg"

function Title() {
  return (
      <div className=' mx-[116px] my-[22px]'>
          <h1 className=" font-montserrat font-bold tracking-wide text-2xl" >Code Streaks!</h1>
          <div className='py-5 my-[10px] '>
          <p className=' font-montserrat font-semibold '>Problem(29/01/2023)</p>
              <div className='flex'>
                  <span className=' font-montserrat  font-bold text-[#0386FF]'>Leetcode</span>
                  <img src={Link} className="w-4 ml-1" />
              </div>
          </div>
     </div>
  )
}

export default Title
