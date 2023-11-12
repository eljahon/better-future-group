import {Fragment} from "react";
import Image from 'next/image'
import logo from '../assets/images/logo.png'
export default  function Navbar () {
    const list = [{name: 'Home', id: 1,},{name: 'Our products', id: 2},{name: 'Our projects', id: 3},{name: 'About us', id: 4},{name: 'Our team', id: 5},{name: 'Contact us', id: 5}]
    return<div>
    <div className='flex justify-between py-5'>
        <div><Image src={logo}/></div>
        <nav>
       <ul className='flex'>
           {list.map((el) => (<li className='ml-8 lg:text-base md:text-sm font-medium' key={el.id}><a href='#'>{el.name}</a></li>))}
       </ul>
        </nav>
    </div>
    </div>
}
