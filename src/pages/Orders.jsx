import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import AddOrderForm from "./AddOrderForm"; // Pastikan komponen ini ada

export default function Orders() {
    const dataDummy = [
        { id: 1, customerName: "John Doe", status: "Completed", totalPrice: "$150", orderDate: "2025-04-01" },
        { id: 2, customerName: "Jane Smith", status: "Pending", totalPrice: "$220", orderDate: "2025-04-02" },
        { id: 3, customerName: "Michael Johnson", status: "Cancelled", totalPrice: "$0", orderDate: "2025-04-03" },
        { id: 4, customerName: "Emily Davis", status: "Completed", totalPrice: "$340", orderDate: "2025-04-04" },
        { id: 5, customerName: "Daniel Lee", status: "Completed", totalPrice: "$185", orderDate: "2025-04-05" },
        { id: 6, customerName: "Olivia Martinez", status: "Pending", totalPrice: "$260", orderDate: "2025-04-06" },
        { id: 7, customerName: "William Brown", status: "Completed", totalPrice: "$305", orderDate: "2025-04-07" },
        { id: 8, customerName: "Ava Wilson", status: "Cancelled", totalPrice: "$0", orderDate: "2025-04-08" },
        { id: 9, customerName: "James Taylor", status: "Completed", totalPrice: "$90", orderDate: "2025-04-09" },
        { id: 10, customerName: "Sophia Anderson", status: "Pending", totalPrice: "$400", orderDate: "2025-04-10" },
        { id: 11, customerName: "Liam Harris", status: "Completed", totalPrice: "$210", orderDate: "2025-04-11" },
        { id: 12, customerName: "Noah Clark", status: "Pending", totalPrice: "$180", orderDate: "2025-04-12" },
        { id: 13, customerName: "Emma Lewis", status: "Cancelled", totalPrice: "$0", orderDate: "2025-04-13" },
        { id: 14, customerName: "Mason Walker", status: "Completed", totalPrice: "$360", orderDate: "2025-04-14" },
        { id: 15, customerName: "Isabella Hall", status: "Completed", totalPrice: "$275", orderDate: "2025-04-15" },
        { id: 16, customerName: "Lucas Allen", status: "Pending", totalPrice: "$310", orderDate: "2025-04-16" },
        { id: 17, customerName: "Mia Young", status: "Completed", totalPrice: "$190", orderDate: "2025-04-17" },
        { id: 18, customerName: "Ethan King", status: "Cancelled", totalPrice: "$0", orderDate: "2025-04-18" },
        { id: 19, customerName: "Harper Scott", status: "Completed", totalPrice: "$245", orderDate: "2025-04-19" },
        { id: 20, customerName: "Benjamin Green", status: "Pending", totalPrice: "$330", orderDate: "2025-04-20" },
        { id: 21, customerName: "Charlotte Adams", status: "Completed", totalPrice: "$400", orderDate: "2025-04-21" },
        { id: 22, customerName: "Henry Nelson", status: "Completed", totalPrice: "$140", orderDate: "2025-04-22" },
        { id: 23, customerName: "Amelia Baker", status: "Pending", totalPrice: "$225", orderDate: "2025-04-23" },
        { id: 24, customerName: "Sebastian Rivera", status: "Cancelled", totalPrice: "$0", orderDate: "2025-04-24" },
        { id: 25, customerName: "Evelyn Cox", status: "Completed", totalPrice: "$295", orderDate: "2025-04-25" },
        { id: 26, customerName: "Aiden Murphy", status: "Completed", totalPrice: "$320", orderDate: "2025-04-26" },
        { id: 27, customerName: "Abigail Rogers", status: "Pending", totalPrice: "$205", orderDate: "2025-04-27" },
        { id: 28, customerName: "Logan Reed", status: "Completed", totalPrice: "$350", orderDate: "2025-04-28" },
        { id: 29, customerName: "Ella Cook", status: "Cancelled", totalPrice: "$0", orderDate: "2025-04-29" },
        { id: 30, customerName: "Jack Morgan", status: "Completed", totalPrice: "$260", orderDate: "2025-04-30" }
        
        
    ];

    const [orders, setOrders] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        setOrders(dataDummy);
    }, []);

    const handleAddOrder = (newOrder) => {
        setOrders((prevOrders) => [...prevOrders, newOrder]);
        setIsFormVisible(false);
    };

    return (
        <div>
            <div id="dashboard-container">
                <PageHeader title="Orders" breadcrumb={['Dashboard', 'Order List']}>
                    <button
                        id="add-button"
                        className="bg-hijau text-white px-4 py-2 rounded-lg mr-4 text-xl"
                        onClick={() => setIsFormVisible(!isFormVisible)}
                    >
                        Add New Order
                    </button>
                </PageHeader>

                {/* Form Add Order */}
                {isFormVisible && <AddOrderForm onAddOrder={handleAddOrder} />}

                <div className="order-list px-4">
                    <h3 className="text-xl font-bold mb-2">Orders List</h3>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-green-500 text-white">
                            <th className="border border-gray-300 px-4 py-2">Order ID</th>
                            <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Total Price</th>
                            <th className="border border-gray-300 px-4 py-2">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="text-center">
                                      <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                                      <td className="border border-gray-300 px-4 py-2">{order.customerName}</td>
                                      <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                                      <td className="border border-gray-300 px-4 py-2">{order.totalPrice}</td>
                                      <td className="border border-gray-300 px-4 py-2">{order.orderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
