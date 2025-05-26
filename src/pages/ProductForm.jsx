import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaBoxOpen, FaTimesCircle } from "react-icons/fa";

export default function ProductForm() {
  const [kodeInput, setKodeInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const dataproduct = [
    { kode_produk: "KP01", nama_produk: "Cappucino", harga: "12.000", stok: 100 },
    { kode_produk: "KP02", nama_produk: "Ikan Bakar", harga: "55.000", stok: 0 },
    { kode_produk: "KP03", nama_produk: "Lychee Tea", harga: "25.000", stok: 170 },
    { kode_produk: "KP04", nama_produk: "Ayam Goreng", harga: "30.000", stok: 10 },
    { kode_produk: "KP05", nama_produk: "Udang Goreng", harga: "45.000", stok: 20 },
  ];

  const handleSearch = () => {
    const found = dataproduct.find((p) => p.kode_produk.toLowerCase() === kodeInput.toLowerCase());
    if (found) {
      setSelectedProduct(found);
      setNotFound(false);
    } else {
      setSelectedProduct(null);
      setNotFound(true);
    }
  };

  return (
    <>
      <PageHeader />
      <div className="bg-gray-100 min-h-screen px-6 md:px-10 py-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-hijau">Cek Ketersediaan Produk</h1>

        {/* Input Kode */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Masukkan kode produk (misal: KP01)"
            value={kodeInput}
            onChange={(e) => setKodeInput(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau"
          />
          <button
            onClick={handleSearch}
            className="bg-hijau text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Cari
          </button>
        </div>

        {/* Hasil Pencarian */}
        <div className="mt-6">
          {selectedProduct && selectedProduct.stok > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <FaShoppingCart className="text-4xl text-green-500" />
              <div>
                <p className="text-green-700 font-semibold text-lg">
                  ✅ Produk <span className="font-bold">{selectedProduct.nama_produk}</span> tersedia
                </p>
                <p className="text-gray-700">
                  Harga: <span className="font-semibold">Rp{selectedProduct.harga}</span>
                </p>
                <p className="text-gray-700">Stok tersedia: {selectedProduct.stok}</p>
              </div>
            </div>
          )}

          {selectedProduct && selectedProduct.stok === 0 && (
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <FaBoxOpen className="text-4xl text-yellow-500" />
              <div>
                <p className="text-yellow-700 font-semibold text-lg">
                  ⚠️ Produk <span className="font-bold">{selectedProduct.nama_produk}</span> saat ini sedang habis.
                </p>
                <p className="text-gray-700">Silakan cek kembali nanti.</p>
              </div>
            </div>
          )}

          {notFound && (
            <div className="bg-red-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <FaTimesCircle className="text-4xl text-red-500" />
              <div>
                <p className="text-red-700 font-semibold text-lg">❌ Kode produk tidak ditemukan.</p>
                <p className="text-gray-700">Pastikan kode yang dimasukkan benar, misalnya KP01.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
