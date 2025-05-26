import { useState } from "react";

export default function AddCustomerForm({ onAddCustomer }) {
    const [customerId, setCustomerId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loyalty, setLoyalty] = useState("Bronze");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!customerId || !customerName || !email || !phone) {
            alert("Please fill in all fields");
            return;
        }

        const newCustomer = {
            id: parseInt(customerId),
            customerName,
            email,
            phone,
            loyalty
        };

        onAddCustomer(newCustomer);

        setCustomerId("");
        setCustomerName("");
        setEmail("");
        setPhone("");
        setLoyalty("Bronze");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mb-6 mx-4">
            <h3 className="text-xl font-semibold mb-4 text-hijau">Add New Customer</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Customer ID</label>
                    <input
                        type="number"
                        className="border rounded-lg p-2"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
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
                    <label className="text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="border rounded-lg p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        className="border rounded-lg p-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Loyalty</label>
                    <select
                        className="border rounded-lg p-2"
                        value={loyalty}
                        onChange={(e) => setLoyalty(e.target.value)}
                    >
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Add Customer
                </button>
            </form>
        </div>
    );
}