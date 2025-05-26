import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                
                {/* Orders Section */}
                <div id="dashboard-orders" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <div id="orders-icon" className="bg-hijau rounded-full p-4">
                        <FaShoppingCart size={30} />
                    </div>
                    <div id="orders-info" className="flex flex-col items-center mt-3">
                        <span id="orders-count" className="text-2xl font-bold">75</span>
                        <span id="orders-text" className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                {/* Delivered Section */}
                <div id="dashboard-delivered" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <div id="delivered-icon" className="bg-biru rounded-full p-4">
                        <FaTruck size={30} />
                    </div>
                    <div id="delivered-info" className="flex flex-col items-center mt-3">
                        <span id="delivered-count" className="text-2xl font-bold">175</span>
                        <span id="delivered-text" className="text-gray-400">Total Delivered</span>
                    </div>
                </div>

                {/* Canceled Section */}
                <div id="dashboard-canceled" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <div id="canceled-icon" className="bg-red-500 rounded-full p-4">
                        <FaBan size={30} />
                    </div>
                    <div id="canceled-info" className="flex flex-col items-center mt-3">
                        <span id="canceled-count" className="text-2xl font-bold">40</span>
                        <span id="canceled-text" className="text-gray-400">Total Canceled</span>
                    </div>
                </div>

                {/* Revenue Section */}
                <div id="dashboard-revenue" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <div id="revenue-icon" className="bg-yellow-500 rounded-full p-4">
                        <FaDollarSign size={30} />
                    </div>
                    <div id="revenue-info" className="flex flex-col items-center mt-3">
                        <span id="revenue-amount" className="text-2xl font-bold">Rp.128</span>
                        <span id="revenue-text" className="text-gray-400">Total Revenue</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
