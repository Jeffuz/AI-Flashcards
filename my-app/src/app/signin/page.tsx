"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Link from "../../../node_modules/next/link";
import Footer from "../components/footer";
import { useRouter } from 'next/navigation';
import { signInUser } from '@/app/utils/firebaseAuthUtil';
import { firebaseAuth } from '../utils/firebase';

const Signin = () => {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true)
    // API Call
    const response = await signInUser(firebaseAuth, email, password);
    if ("errorCode" in response) {
      setIsError(true)
      setError("Incorrect Email or password")
      setIsLoading(false)
      return
    }
    router.back()

  };

  return (
    <>
      <Navbar />
      {/* Page Layer */}
      <div className="h-screen flex flex-col justify-between">
        {/* Bg Layer */}
        <div className="bg-teal1 h-full flex items-center justify-center">
          {/* Box */}
          <div className="w-[500px] bg-white max-[500px]:h-full flex flex-col justify-center rounded-md shadow-lg p-10">
            {/* Title */}
            <div className="text-4xl font-bold mb-6">
              Sign In for MindMapper
            </div>
            <form onClick={handleSubmit}>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="sappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                {isError ? (
                  <p className="text-[7px] md:text-[15px] text-red-500 transition-all duration-200 animate-bounce">
                    {error}
                  </p>
                ) : null}
              </div>
              {/* Button */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-orange1 hover:bg-orange2 text-white font-bold w-full py-2 rounded-md shadow-lg transition duration-500"
                >
                  { isLoading ? (<div className="m-auto h-6 w-6 animate-spin rounded-full border-b-2 border-current" />) : (<p>Sign In</p>) }
                </button>
              </div>
              {/* Sign in */}
              <div className="text-center mt-4">
                <div className="text-sm text-gray-600">
                  Don&apos;t have an account?&nbsp;
                  <Link
                    href="/signup"
                    className="text-teal1 hover:text-teal-600"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signin;
