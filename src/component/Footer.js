import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:'#1e2d3d' , color:'#607B96' , paddingBottom:'30px' , overflow:'hidden'}}>
        <div className="text-center">
 

    <span className="block text-sm text-center text-gray-100" style={{fontSize:'18px' , paddingTop:'20px'}}>   Made with ❤ By Abhishek Bhavnani
	</span>

    <ul className="flex justify-center mt-5 space-x-5">

        <li>
            <a href="https://www.linkedin.com/in/abhishek-bhavnani/" className="text-gray-500 hover:text-gray-900">
               <img src="https://i.pinimg.com/736x/0c/78/d0/0c78d03cbfa19d5f3d7ad1b6e49f957b.jpg" width={'20px'} height={'20px'} style={{filter:'grayscale(100%) , brightness(70%)' , background: 'transparent'}}
               alt="" />
            </a>
        </li>
        <li>
            <a href="https://github.com/AbhishekBhavnani2003" className="text-gray-500 hover:text-gray-900">
               <img src="https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg" width={'20px'} height={'20px'} alt="" />
            </a>
        </li>
        <li>
            <a href="https://wa.me/918200568656" className="text-gray-500 hover:text-gray-900">
                <img src="https://i.pinimg.com/564x/b3/57/a8/b357a82495676c6c808a7b8c818f5460.jpg"  width={'20px'} height={'20px'} alt="" />
             
            </a>
        </li>
        <li>
            <a href="mailto:abhishekbhavnani2003@gmail.com" className="text-gray-500 hover:text-gray-900">
                <img src="https://i.pinimg.com/564x/3d/33/8b/3d338bf9ed416194be345914aed14f18.jpg"  width={'20px'} height={'20px'} alt="" />
             
            </a>
        </li>
    </ul>
</div>
    </div>
  )
}

export default Footer