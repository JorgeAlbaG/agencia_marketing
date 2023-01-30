import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logo_PC from 'assets/img/PC.png'
import logo_PC1 from 'assets/img/PC1.png'
function Navbar(){
    return(
        <nav className='w-full py-4 shadow-md fixed'>
            <div className="bg-white px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
             <div className="ml-4 mt-2">
             <img
             src={logo_PC1}
             width={300}
             height={290}
             className=""/>
             </div>
             <div className="ml-4 mt-2 flex-shrink-0">
             <Link to='cases' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Cases</Link>
             <Link to='services' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Services</Link>
             <Link to='about us' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">About us</Link>
             <Link to='careers' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Careers</Link>
             <Link to='blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Blog</Link>
             <Link to='contact us' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Contact us</Link>
             <button
                  type="button"
                  className="ml-6 relative inline-flex items-center rounded-md border border-transparent bg-paleblue-button px-6 py-2.5 text-l font-bold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Hire us
                 </button>
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
