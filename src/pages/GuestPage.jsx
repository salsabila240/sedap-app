import { IoIosContact } from "react-icons/io"; 
import { BsInstagram } from "react-icons/bs"; 
import { MdOutlinePayments } from "react-icons/md"; 
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { FcAbout, FcContacts } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";
import { IoArrowBackOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { PiArrowCounterClockwiseThin } from "react-icons/pi";
import { MdEmail } from "react-icons/md";


export default function GuestDashboard() {
    return (
        <div id="dashboard-container">
            <PageHeader
                title="Dashboard"
                breadcrumb={['Dashboard', 'Welcome To Sedap ']}
            >
                <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg mr-4 text-xl">
                    Add Guest
                </button>
                <button id="export-button" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 text-xl">
                    Export
                </button>
                <button id="back-button" className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-4 text-xl">
                    Back
                </button>
            </PageHeader>
            <div id="dashboard-grid" className="p- grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-kuning rounded-full p-4">
                        <MdOutlinePayments  className=" text-3xl text-white" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold">Rp.128</span>
                        <span id="revenue-text" className="text-gray-400">Total Revenue</span>
                    </div>
                </div>
                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="bg-kuning rounded-full p-4" >
                        <BsInstagram  className=" text-3xl text-white" />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold">Instagram</span>
                        <span id="canceled-text" className="text-gray-400">SedapFoodie</span>
                    </div>
                </div>
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-kuning rounded-full p-4">
                        <IoIosContact className=" text-3xl text-white" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold">Our Contact</span>
                        <span id="revenue-text" className="text-gray-400">+62 8888 8888</span>
                    </div>
                </div>
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-kuning rounded-full p-4">
                        <PiArrowCounterClockwiseThin className=" text-3xl text-white" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold">Trusted Partner</span>
                        <span id="revenue-text" className="text-gray-400">FoodieForEat</span>
                    </div>
                </div>
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-kuning rounded-full p-4">
                        <MdEmail className=" text-3xl text-white" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold">Email</span>
                        <span id="revenue-text" className="text-gray-400">sedap@gmail.com</span>
                    </div>
                </div>
            </div>
            <br></br>

            <footer>
                
            </footer>
        </div>
    );
}


