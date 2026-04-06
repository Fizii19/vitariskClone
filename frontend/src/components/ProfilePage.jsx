import icon from "../assets/icon.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state || {};

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <nav className="p-5 bg-white border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
        <img
          src={icon}
          className="h-10 cursor-pointer"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="p-8 md:p-12 to-transparent">
            <div className="flex flex-col md:flex-row items-center gap-9">
              <div className="w-24 h-24 bg-[#327E66] rounded-full flex items-center justify-center text-3xl font-regular text-white shadow-lg">
                {name.charAt(0)?.toUpperCase() || "User"}
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-3xl font-regular text-black">
                  {name || "Hai, User"}
                </h4>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="w-full bg-gray-50 border-2 border-[#BAD8B6] rounded-2xl p-3.5"
                />
              </div>

              {/* Field No Telp */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 0812xxxx"
                  className="w-full bg-gray-50 border-2 border-[#BAD8B6] rounded-2xl p-3.5"
                />
              </div>

              {/* Field Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Alamat Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-[#BAD8B6] rounded-2xl p-3.5"
                />
              </div>

              {/* Field Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Kata Sandi Baru
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border-2 border-[#BAD8B6] rounded-2xl p-3.5"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <span className="text-xs font-bold">SEMBUNYI</span>
                    ) : (
                      <span className="text-xs font-bold">LIHAT</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-16 border-t border-gray-50 pt-10">
              <button
                onClick={() => navigate("/history")}
                className="border-2 bg-[#327E66]  text-white px-10 py-4 rounded-2xl flex-1"
              >
                Riwayat Cek Kesehatan
              </button>

              <button
                onClick={() => navigate("/", { replace: true })}
                className="border-2 border-red-100 text-red-500 px-10 py-4 rounded-2xl font-bold flex-1"
              >
                Keluar Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
