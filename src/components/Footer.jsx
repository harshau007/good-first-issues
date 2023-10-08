import React from 'react'

const Footer = () => {
  return (
    <div className="flex font-sans w-[100%] bottom-0 pt-[10px] fixed h-[65px]" style={{
        background: "white",
		borderTop: '1px solid black'
      }}>
			<div className='max-w-screen-lg flex flex-col text-black mx-auto justify-start w-full h-full'>
				<div>
						<p className='font-normal text-center text-md '>
								Made with ❤️ by Himanshu
						</p>
						<p className='font-normal text-center text-sm '>
							&#169; Copyright 2023 Himanshu Agarwal 
						</p>
				</div>
			</div>
    </div>
  )
}

export default Footer