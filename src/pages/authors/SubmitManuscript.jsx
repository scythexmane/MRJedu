import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function MedicalLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4 text-center"
          >
            Welcome Back
          </motion.h2>
          <p className="text-lg text-center max-w-xs">
            Access your medical portal to view records, book appointments, and more.
          </p>
        </div>

        <div className="p-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Medical Portal Login</h3>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="E-Mail Address"
                className="pl-10 py-2 px-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="pl-10 py-2 px-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg">
              Sign In
            </button>

            <div className="text-sm text-center text-gray-600 space-x-4">
              <a href="#" className="hover:underline">Forgot Password?</a>
              <a href="#" className="hover:underline">Sign Up</a>
            </div>

            <div className="mt-6 text-center text-xs text-gray-400">
              By signing in, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
