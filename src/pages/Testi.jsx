import React from 'react';
import PageHeader from "../components/PageHeader";

const testimonials = [
  {
    id: 1,
    name: "Andi",
    review: "Layanan sangat memuaskan dan cepat!",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Budi",
    review: "Pengalaman yang baik, saya sangat merekomendasikan.",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Citra",
    review: "Prosesnya mudah dan hasilnya memuaskan.",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Dewi",
    review: "Sangat membantu dan responsif.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 5,
    name: "Eko",
    review: "Rekomendasi terbaik untuk yang butuh layanan ini.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'fill-current' : 'stroke-current text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10" />
        </svg>
      ))}
    </div>
  );
};

const Testi = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader title="Testimoni Pengguna" subtitle="Apa kata mereka tentang layanan kami?" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map(({ id, name, review, rating, photo }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={photo}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
                <StarRating rating={rating} />
                <p className="mt-3 text-gray-700 italic">"{review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testi;
