import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctPassword = "1234";

    if (password === correctPassword) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      setError("Wrong password");
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-5">
      <div className="bg-white/800 backdrop-blur-sm bg-opacity-90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-red-900 mt-3"></div>
            <h1 className="text-black text-3xl font-bold">Admin Sign In</h1>
          </div>
          <p className="text-gray-600 text-sm">
            Please enter your admin password to access the dashboard
          </p>
        </div>
        <div className="space-y-4">
          <input
            className="w-full p-3 rounded-lg bg-transparent border border-gray-300 
                       focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                       transition duration-300 hover:border-gray-400"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="cursor-target w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold 
                       hover:bg-indigo-700 hover:scale-105 
                       transition duration-300 shadow-md"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {error && (
          <p className="text-red-900 text-2xl text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}
