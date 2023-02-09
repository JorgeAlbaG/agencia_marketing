import {connect} from 'react-redux'
import { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import loading_dots from 'assets/img/loading-dots.gif'
import logo_PC1 from 'assets/img/PC1.png'
import DotLoader from 'react-spinners/DotLoader'
function Navbar(){

    const [loading,setLoading]=useState(true)
    return(
        <nav className='w-full py-4 top-0 fixed'>
            <div className="bg-white px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
             <Link to='/' className="ml-4 mt-2">
             <img
             src={logo_PC1}
             width={140}
             height={120}
             className=""/>
             </Link>
             <div className="ml-4 mt-2 flex-shrink-0">
             <NavLink to='/cases' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 hover:text-blue-700 border-white hover:border-paleblue-button mx-4">Cases</NavLink>
             <NavLink to='/services' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 hover:text-blue-700 border-white hover:border-paleblue-button mx-4">Services</NavLink>
             <NavLink to='/about' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 hover:text-blue-700 border-white hover:border-paleblue-button mx-4">About us</NavLink>
             <NavLink to='/careers' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 hover:text-blue-700 border-white hover:border-paleblue-button mx-4">Careers</NavLink>
             <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 hover:text-blue-700 border-white hover:border-paleblue-button mx-4">Blog</NavLink>
             <NavLink to='/contact' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 hover:text-blue-700 border-white hover:border-paleblue-button mx-4">Contact</NavLink>
             <Link
                    to="/contact"
                    className="inline-flex ml-12 items-center rounded-md border border-blue-700 bg-paleblue-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-paleblue-button focus:ring-offset-2"
                >
                    Hire Us
                    
                    <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={25} color="#f2f2f2" />
                 </Link>
                 </div>
             </div>
             </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)
