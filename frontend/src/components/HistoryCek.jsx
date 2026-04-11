import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Key,
  Activity,
  BarChart3,
  HeartPulse,
} from "lucide-react";

const HistoryPage = () => {
  const navigate = useNavigate();

  // FIX: name belum ada → biar tidak error

  const histories = [
    {
      id: 1,
      penyakit: "Jantung",
      tanggal: "15 Februari 2026",
      status: "Selesai",
    },
    {
      id: 2,
      penyakit: "Jantung",
      tanggal: "14 Februari 2026",
      status: "Selesai",
    },
    {
      id: 3,
      penyakit: "Jantung",
      tanggal: "13 Februari 2026",
      status: "Selesai",
    },
    {
      id: 4,
      penyakit: "Jantung",
      tanggal: "12 Februari 2026",
      status: "Selesai",
    },
    {
      id: 5,
      penyakit: "Jantung",
      tanggal: "11 Februari 2026",
      status: "Selesai",
    },
    {
      id: 6,
      penyakit: "Jantung",
      tanggal: "10 Februari 2026",
      status: "Selesai",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative flex items-center justify-between px-7 py-4 bg-white shadow-sm top-0 z-50">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex gap-3 text-lg font-medium text-[#295f4e] items-center px-3 py-1 rounded-xl"
          >
            <ChevronLeft size={22} /> Kembali
          </Link>
        </div>{" "}
        <img
          src="/icons2.svg"
          alt="logo"
          className="h-7 absolute left-1/2 -translate-x-1/2"
        />{" "}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/history")}
            className="bg-[#295f4e] text-white px-5 py-2 rounded-full hover:bg-[#1f4a3c] transition"
          >
            History
          </button>
        </div>
      </div>{" "}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {" "}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl text-center font-black text-gray-800 tracking-tight">
            Riwayat Cek
          </h2>
          <p className="text-gray-400  text-center font-medium mt-1">
            Daftar pemeriksaan kesehatan terakhir Anda
          </p>
        </div>
        {/* GRID RIWAYAT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {histories.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-6 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#327E66]/20 hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mint-green/10 rounded-2xl flex items-center justify-center text-[#327E66] group-hover:bg-[#327E66] group-hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-bold text-gray-700 group-hover:text-[#327E66] transition-colors">
                    {item.penyakit}
                  </p>
                  <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                    {item.tanggal}
                  </p>
                </div>
              </div>

              <div className="text-[#327E66] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
