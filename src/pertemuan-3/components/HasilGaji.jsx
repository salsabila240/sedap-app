export default function HasilGaji({ isValid, nilai }) {
  return (
    <div
      className={`mt-4 p-3 bg-blue-100 border-l-4 ${
        isValid ? "border-blue-500 text-blue-700" : "border-red-500 text-red-700"
      }`}
    >
      <p className="font-semibold">
        {isValid
          ? `Total Take Home Pay (THP): Rp ${nilai.toLocaleString("id-ID")}`
          : "Silakan masukkan gaji yang valid (tidak boleh kosong atau negatif)."}
      </p>
    </div>
  );
}
