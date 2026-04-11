import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Key,
  Activity,
  BarChart3,
  HeartPulse,
} from "lucide-react";

export default function ProfilePage() {
  const location = useLocation();
  const user = location.state || {};
  const navigate = useNavigate();

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [medicalHistory, setMedicalHistory] = useState(
    user.medicalHistory || "",
  );
  const [statusKesehatan, setStatusKesehatan] = useState(
    user.statusKesehatan || "",
  );
  const [jumlahPengecekan, setJumlahPengecekan] = useState(
    user.jumlahPengecekan || "",
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <div className="relative flex items-center justify-between px-7 py-4 bg-white shadow-sm  top-0 z-50">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex gap-3 text-lg font-medium text-[#295f4e] items-center px-3 py-1 rounded-xl"
          >
            <ChevronLeft size={22} /> Kembali
          </Link>
        </div>

        {/* LOGO */}
        <img
          src="/icons2.svg"
          alt="logo"
          className="h-7 absolute left-1/2 -translate-x-1/2"
        />

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>

          <button
            onClick={() => navigate("/history")}
            className="bg-[#295f4e] text-white px-5 py-2 rounded-full hover:bg-[#1f4a3c] transition"
          >
            History
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex justify-center p-7 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-7xl items-stretch">
          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl shadow p-7 text-center flex flex-col min-h-500px">
            {/* Avatar */}
            <div className="w-20 h-20 mx-auto rounded-xl bg-[#295f4e] text-white flex items-center justify-center text-3xl font-bold">
              {name ? name.charAt(0).toUpperCase() : "U"}
            </div>

            <h2 className="mt-4 text-lg font-semibold">{name || "User"}</h2>
            <p className="text-sm text-gray-500">{email}</p>

            <hr className="my-10" />

            <div className="space-y-5 text-left">
              {/* Riwayat Penyakit */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                  <HeartPulse size={18} className="text-[#295f4e]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Riwayat Penyakit</p>
                  <p className="font-medium">{medicalHistory || "-"}</p>
                </div>
              </div>

              {/* Status Kesehatan */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                  <Activity size={18} className="text-[#295f4e]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status Kesehatan</p>
                  <p className="font-medium">{statusKesehatan || ""}</p>
                </div>
              </div>

              {/* Jumlah Pengecekan */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                  <BarChart3 size={18} className="text-[#295f4e]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Jumlah Pengecekan</p>
                  <p className="font-medium">{jumlahPengecekan || "0"}x</p>
                </div>
              </div>
            </div>
            {/* BUTTON */}
            <button className="w-full mt-auto bg-[#295f4e] text-white py-3 rounded-xl hover:bg-[#1f4a3c] transition flex items-center justify-center gap-2">
              <Key size={18} />
              <span>Ganti Password</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Informasi Profil</h2>

            <div className="space-y-4">
              {/* Nama */}
              <div>
                <label className="text-sm text-gray-600">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
                />
              </div>

              {/* Riwayat Penyakit */}
              <div>
                <label className="text-sm text-gray-600">
                  Riwayat Penyakit
                </label>
                <input
                  type="text"
                  value={medicalHistory}
                  onChange={(e) => setMedicalHistory(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
                />
              </div>

              {/* Status */}
              <div>
                <label className="text-sm text-gray-600">
                  Status Kesehatan
                </label>
                <input
                  type="text"
                  value={statusKesehatan}
                  onChange={(e) => setStatusKesehatan(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
                />
              </div>

              {/* Jumlah */}
              <div>
                <label className="text-sm text-gray-600">
                  Jumlah Pengecekan
                </label>
                <input
                  type="number"
                  value={jumlahPengecekan}
                  onChange={(e) => setJumlahPengecekan(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
                />
              </div>

              {/* SAVE */}
              <button
                onClick={() => alert("Data berhasil disimpan")}
                className="w-full mt-4 bg-[#295f4e] text-white py-3 rounded-xl hover:bg-[#1f4a3c] transition"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
