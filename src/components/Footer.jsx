import React from 'react'

const Footer = () => {
  return (
    <div className="flex font-sans w-full h-[200px]" style={{
        background: "white"
      }}>
			<div className='max-w-screen-lg flex flex-col text-white mx-auto justify-start w-full h-full'>
				<div>
						<p className='font-normal text-center text-xl'>
								Made with ❤️ by Himanshu
						</p>
						<p className='font-normal text-center text-xxl '>
							&#169; Copyright 2023 Himanshu Agarwal 
						</p>
				</div>
			</div>
    </div>
  )
}

export default Footer