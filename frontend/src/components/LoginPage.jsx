import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Doctor2 from "../assets/doctor2.png";
import { ChevronLeft } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const backendUrl = "http://localhost:3000/api";

  const handleGoogleLogin = async (res) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${backendUrl}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credential: res.credential,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      // simpan token
      localStorage.setItem("token", result.data.token);

      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError("Login Google gagal");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${backendUrl}/auth/dev-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: email.split("@")[0] || "User",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      localStorage.setItem("token", result.data.token);

      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError("Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg grid grid-cols-2 p-4 ">
      <div className="relative bg-pure-green/30 rounded-3xl">
        <img src={Doctor2} className="max-h-[calc(100vh-32px)]" alt="" />
        <div className="absolute inset-0 p-10 flex justify-between flex-col">
          <a
            href="/"
            className="flex gap-3 text-lg items-center hover:bg-black/10 max-w-max py-1.5 px-3 rounded-xl duration-300 transition-all"
          >
            <ChevronLeft /> Kembali
          </a>
          <div className="w-full  rounded-2xl flex flex-col bg-black/20 gap-5 p-5 backdrop-blur-xs">
            <h1 className="font-semibold text-3xl w-80 text-white">
              Kenali Tubuhmu, Kendalikan Risikonya
            </h1>
            <p className="w-130 text-white">
              Dapatkan analisis menyeluruh tentang jantung, kolesterol, dan
              risiko diabetesmu. Ambil kendali kesehatan sebelum terlambat.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-10">
        <div className="flex items-center">
          <img src="/icons2.svg" className="w-70" alt="" />
        </div>
        <div className="flex flex-col items-center mt-20 gap-5">
          <h1 className="text-3xl font-semibold">Selamat Datang</h1>
          <p>Untuk mengakses akun anda, masukan email dan kata sandi anda</p>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form onSubmit={handleFormSubmit} className="mt-5 flex flex-col w-full gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-black/80">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Masukan Email"
                className="border-2 border-[#327E66] py-3 px-5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-black/80">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukan Password"
                className="border-2 border-[#327E66] p-3 px-5 rounded-md"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className=" border py-3 bg-[#327E66] text-white text-lg rounded-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
            <div className="relative grid place-items-center">
              <span className="absolute h-0.5 w-full top-1/2 -translate-y-1/2 bg-[#327E66]/60"></span>
              <p className="relative z-10 text-center text-[#327E66]  font-medium max-w-max bg-bg px-2">
                Or
              </p>
            </div>
            <div className="grid place-items-center">
              <button
                onClick={handleGoogleLogin}
                className="size-13 border-2 border-gray-200 rounded-full bg-white flex items-center justify-center "
              >
                <img src="/google-icon.svg" alt="G" className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
