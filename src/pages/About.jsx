import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <PageHeader />

      <div className="px-6 md:px-10 py-10 max-w-7xl mx-auto">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Gambar kiri */}
          <div className="md:w-1/2">
            <img
              src="/img/about1.jpg"
              alt="Interior Restoran"
              className="rounded-xl shadow-lg hover:scale-105 transition duration-300 object-cover w-full h-80"
            />
          </div>

          {/* Teks kanan */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-hijau">Restoran "Sedap"</h2>
            <p className="text-gray-600 leading-relaxed">
              Kami hadir sebagai restoran terbaik di Indonesia, menyajikan pengalaman makan dengan kualitas tinggi dan cita rasa autentik.
              Hidangan kami dibuat dari bahan segar pilihan oleh koki berpengalaman.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Suasana hangat dan pelayanan ramah menjadi ciri khas kami, menjadikan Sedap pilihan tepat untuk bersantap bersama keluarga atau sahabat.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Gambar kanan */}
          <div className="md:w-1/2">
            <img
              src="/img/about2.png"
              alt="Hidangan"
              className="rounded-xl shadow-lg hover:scale-105 transition duration-300 object-cover w-full h-80"
            />
          </div>

          {/* Teks kiri */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-hijau">Rasa & Layanan Berkualitas</h2>
            <p className="text-gray-600 leading-relaxed">
              Kami menyajikan berbagai pilihan menu mulai dari masakan khas Indonesia hingga internasional.
              Setiap sajian dibuat dengan rasa yang menggugah selera.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Tim kami berkomitmen pada kebersihan, kenyamanan, dan kecepatan pelayanan demi kepuasan Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
