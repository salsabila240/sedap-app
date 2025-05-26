import { useState } from "react";

export default function CekStok({ onAddStock }) {
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
;
}
  