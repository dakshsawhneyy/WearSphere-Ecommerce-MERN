        import React, { useContext, useState } from "react";
        import { assets } from "../assets/frontend_assets/assets";
        import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

        const Navbar = ({darkMode,setDarkMode}) => {
            const navigate = useNavigate();
            const [visible, setVisible] = useState(false)

            const { showSearch,setShowSearch } = useContext(ShopContext);
            return (
                <div className="flex items-center bg-white dark:bg-[red] text-black dark:text-white">
                    <div className="flex items-center">
                        <img onClick={()=>navigate('/')} src={assets.logo} className=" w-28 sm:w-40 cursor-pointer" alt="" />
                    </div>
                    <div className="m-auto flex gap-5 font-semibold">
                        <NavLink to="/" className="sm:flex flex-col items-center hidden" >
                            <p>HOME</p>
                            <hr className="w-2/4 h-[2px] bg-gray-700 hidden dark:bg-white" />
                        </NavLink>
                        <NavLink to="/collection" className="sm:flex flex-col items-center hidden" >
                            <p>COLLECTION</p>
                            <hr className="w-2/4 h-[2px] bg-gray-700 hidden dark:bg-white" />
                        </NavLink>
                        <NavLink to="/about" className="sm:flex flex-col items-center hidden" >
                            <p>ABOUT</p>
                            <hr className="w-2/4 h-[2px] bg-gray-700 hidden dark:bg-white" />
                        </NavLink>
                        <NavLink  to="/contact" className="sm:flex flex-col items-center hidden">
                            <p>CONTACT</p>
                            <hr className="w-2/4 h-[2px] bg-gray-700 hidden dark:bg-white" />
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-5">
                        {/* Making dark mode button */}
                        <button onClick={()=>setDarkMode(!darkMode)} className="hidden sm:block border rounded p-2 bg-white dark:bg-black text-black dark:text-white">{darkMode ? 'Enable Light Mode' : 'Enable Red Mode'}</button>
                        <img src={assets.search_icon} onClick={() => setShowSearch(!showSearch)} className="w-6 h-6 cursor-pointer" alt="" />
                        {/* DropDown on profile icon */}
                        <div className="relative group">
                            <img src={assets.profile_icon} className="w-6 h-6 cursor-pointer" alt="" />
                            <div className="hidden group-hover:block absolute dropdown-menu right-0 mt-2 p-2 bg-white shadow-lg rounded-lg">
                                <div className="flex flex-col gap-2 w-28">
                                    <p className="cursor-pointer p-2 text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 rounded-md">My Profile</p>
                                    <p className="cursor-pointer p-2 text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 rounded-md">Orders</p>
                                    <p className="cursor-pointer p-2 text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 rounded-md">Logout</p>
                                </div>
                            </div>
                        </div>
                        
                        <Link to='/cart' className="relative"> 
                            <img src={assets.cart_icon} className="w-6 h-6" alt="" />
                            <p className="absolute bg-black right-[-5px] bottom-[-5px] aspect-square rounded w-4 h-4 text-[9px] text-white leading-4 text-center">10</p>
                        </Link>

                        {/* Making Menu icon for mobile screen */}
                        <img src={assets.menu_icon} onClick={()=> setVisible(true)} className="w-5 cursor-pointer sm:hidden block" alt="" />
                    </div>

                    {/*Sidebar for small screens*/}
                    <div className={`bg-white transition-all absolute top-0 left-0 overflow-hidden ${visible ? 'w-full h-full' : 'w-0'}`}>
                        <div className="flex flex-col text-gray-600">
                            <div onClick={()=>setVisible(false)} className="flex cursor-pointer gap-3 p-5">
                                <img src={assets.dropdown_icon} className="w-3 rotate-180" alt="" />
                                <p>Back</p>
                            </div>
                            <div className="flex flex-col gap-2 mt-10">
                                <NavLink to='/' className="py-2 pl-6 border" onClick={()=>setVisible(false)} >HOME</NavLink>
                                <NavLink to='/collection' className="py-2 pl-6 border" onClick={()=>setVisible(false)} >COLLECTION</NavLink>
                                <NavLink to='/about' className="py-2 pl-6 border" onClick={()=>setVisible(false)} >ABOUT</NavLink>
                                <NavLink to='/contact' className="py-2 pl-6 border" onClick={()=>setVisible(false)} >CONTACT</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        export default Navbar;
