import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import AddCustomerForm from "./AddCustForm";

export default function Customers() {
  const dataDummy = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      loyalty: "Gold",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "321-654-0987",
      loyalty: "Silver",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "456-789-0123",
      loyalty: "Platinum",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "234-567-8901",
      loyalty: "Gold",
    },
    {
      id: 5,
      name: "Daniel Lee",
      email: "daniel.lee@example.com",
      phone: "678-901-2345",
      loyalty: "Bronze",
    },
    {
      id: 6,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      phone: "789-012-3456",
      loyalty: "Silver",
    },
    {
      id: 7,
      name: "William Brown",
      email: "william.brown@example.com",
      phone: "890-123-4567",
      loyalty: "Gold",
    },
    {
      id: 8,
      name: "Ava Wilson",
      email: "ava.wilson@example.com",
      phone: "901-234-5678",
      loyalty: "Platinum",
    },
    {
      id: 9,
      name: "James Taylor",
      email: "james.taylor@example.com",
      phone: "012-345-6789",
      loyalty: "Bronze",
    },
    {
      id: 10,
      name: "Sophia Anderson",
      email: "sophia.anderson@example.com",
      phone: "132-465-7980",
      loyalty: "Silver",
    },
    {
      id: 11,
      name: "Benjamin Thomas",
      email: "benjamin.thomas@example.com",
      phone: "213-546-8790",
      loyalty: "Gold",
    },
    {
      id: 12,
      name: "Isabella Jackson",
      email: "isabella.jackson@example.com",
      phone: "324-657-9801",
      loyalty: "Platinum",
    },
    {
      id: 13,
      name: "Lucas White",
      email: "lucas.white@example.com",
      phone: "435-768-0912",
      loyalty: "Silver",
    },
    {
      id: 14,
      name: "Mia Harris",
      email: "mia.harris@example.com",
      phone: "546-879-1023",
      loyalty: "Gold",
    },
    {
      id: 15,
      name: "Logan Martin",
      email: "logan.martin@example.com",
      phone: "657-980-2134",
      loyalty: "Bronze",
    },
    {
      id: 16,
      name: "Charlotte Thompson",
      email: "charlotte.thompson@example.com",
      phone: "768-091-3245",
      loyalty: "Platinum",
    },
    {
      id: 17,
      name: "Elijah Garcia",
      email: "elijah.garcia@example.com",
      phone: "879-102-4356",
      loyalty: "Gold",
    },
    {
      id: 18,
      name: "Amelia Martinez",
      email: "amelia.martinez@example.com",
      phone: "980-213-5467",
      loyalty: "Silver",
    },
    {
      id: 19,
      name: "Alexander Robinson",
      email: "alexander.robinson@example.com",
      phone: "091-324-6578",
      loyalty: "Gold",
    },
    {
      id: 20,
      name: "Harper Clark",
      email: "harper.clark@example.com",
      phone: "102-435-7689",
      loyalty: "Platinum",
    },
    {
      id: 21,
      name: "Ethan Rodriguez",
      email: "ethan.rodriguez@example.com",
      phone: "213-546-8791",
      loyalty: "Bronze",
    },
    {
      id: 22,
      name: "Evelyn Lewis",
      email: "evelyn.lewis@example.com",
      phone: "324-657-9802",
      loyalty: "Gold",
    },
    {
      id: 23,
      name: "Henry Walker",
      email: "henry.walker@example.com",
      phone: "435-768-0913",
      loyalty: "Silver",
    },
    {
      id: 24,
      name: "Abigail Hall",
      email: "abigail.hall@example.com",
      phone: "546-879-1024",
      loyalty: "Gold",
    },
    {
      id: 25,
      name: "Sebastian Allen",
      email: "sebastian.allen@example.com",
      phone: "657-980-2135",
      loyalty: "Bronze",
    },
    {
      id: 26,
      name: "Emily Young",
      email: "emily.young@example.com",
      phone: "768-091-3246",
      loyalty: "Silver",
    },
    {
      id: 27,
      name: "Jack Hernandez",
      email: "jack.hernandez@example.com",
      phone: "879-102-4357",
      loyalty: "Platinum",
    },
    {
      id: 28,
      name: "Ella King",
      email: "ella.king@example.com",
      phone: "980-213-5468",
      loyalty: "Gold",
    },
    {
      id: 29,
      name: "Aiden Wright",
      email: "aiden.wright@example.com",
      phone: "091-324-6579",
      loyalty: "Silver",
    },
    {
      id: 30,
      name: "Luna Lopez",
      email: "luna.lopez@example.com",
      phone: "102-435-7690",
      loyalty: "Bronze",
    },
  ];

  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setCustomers(dataDummy);
  }, []);

  const handleAddCustomer = (newCustomer) => {
    const formattedCustomer = {
      id: newCustomer.id,
      name: newCustomer.customerName,
      email: newCustomer.email,
      phone: newCustomer.phone,
      loyalty: newCustomer.loyalty,
    };

    setCustomers([...customers, formattedCustomer]);

    setShowForm(false);
  };

  return (
    <div id="dashboard-container">
      <PageHeader
        title="Customers"
        breadcrumb={["Dashboard", "Customers List"]}
      >
        <button
          id="add-button"
          className="bg-hijau text-white px-4 py-2 rounded-lg mr-4 text-xl"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Hide Form" : "Add New Customer"}
        </button>
      </PageHeader>

      {showForm && (
        <div className="px-4">
          <AddCustomerForm onAddCustomer={handleAddCustomer} />
        </div>
      )}

      <div className="customer-list px-4 mt-6">
        <h3 className="text-xl font-bold mb-2">Customer List</h3>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Customer ID</th>
              <th className="border border-gray-300 px-4 py-2">
                Customer Name
              </th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {customer.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.loyalty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
