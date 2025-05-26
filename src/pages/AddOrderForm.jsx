import { useState } from "react";

export default function AddOrderForm({ onAddOrder }) {
    const [orderId, setOrderId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [status, setStatus] = useState("Pending");
    const [totalPrice, setTotalPrice] = useState("");
    const [orderDate, setOrderDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!orderId || !customerName || !totalPrice || !orderDate) {
            alert("Please fill in all fields");
            return;
        }

        const newOrder = {
            id: parseInt(orderId),
            customerName,
            status,
            totalPrice: `$${totalPrice}`,
            orderDate,
        };

        onAddOrder(newOrder);

        setOrderId("");
        setCustomerName("");
        setStatus("Pending");
        setTotalPrice("");
        setOrderDate("");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mb-6 mx-4">
            <h3 className="text-xl font-semibold mb-4 text-hijau">Add New Order</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Order ID</label>
                    <input
                        type="number"
                        className="border rounded-lg p-2"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Customer Name</label>
                    <input
                        type="text"
                        className="border rounded-lg p-2"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Status</label>
                    <select
                        className="border rounded-lg p-2"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Total Price</label>
                    <input
                        type="number"
                        className="border rounded-lg p-2"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Order Date</label>
                    <input
                        type="date"
                        className="border rounded-lg p-2"
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Add Order
                </button>
            </form>
        </div>
    );
}
