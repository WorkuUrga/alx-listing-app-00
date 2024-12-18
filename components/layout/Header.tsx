import React from "react";
import {PROPERTY_CATEGORIES} from '../../constants/index'
import { FiSearch } from "react-icons/fi";


const Header: React.FC = () => {
    return (
        <header className="mx-8">
            <div className="container mx-auto py-4 px-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    <img src="assets/accomodations/logo.png" alt="" />
                </div>
                <div className="flex">
                    <input 
                    type="text" 
                    placeholder="Search for destination"
                    className="w-full px-4 py-4 border rounded-lg focus:outline-none"
                    />
                    <button className="bg-yellow-500 px-4 py-2 text-white font-medium rounded-full">
                        <FiSearch />
                    </button>
                </div>
                <div className="flex gap-6">
                    <button className="text-gray-700 font medium hover:bg-green-700 hover:text-white">Sign in</button>
                    <button className="text-gray-700 font medium hover:bg-green-700 hover:text-white">Sign up</button>
                </div>
            </div>
            <div>
                <div className="container mx-auto py-4 flex justify-center items-start gap-8">
                    {PROPERTY_CATEGORIES.map((category, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <img src={category.image} alt={category.name}
                            className=""
                            />
                            <p className="text-sm text-gray-400">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}
export default Header