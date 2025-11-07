import React, { useState } from "react";
import { COLORS } from "../constants";
import giftImage from "../assets/images/tiffany-box.jpg";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const UserPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signup");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid md:grid-cols-2 h-screen">
      {/* 左侧图片 */}
      <div className="hidden md:flex items-center justify-center h-full w-full">
        <img
          src={giftImage}
          alt="Tiffany Gift"
          className="w-3/4 max-w-md object-contain"
        />
      </div>

      {/* 右侧表单 */}
      <div className="flex flex-col justify-center px-8 md:px-16 bg-white">
        {/* 登录 / 注册切换标签 */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("signin")}
            className={`pb-2 ${
              activeTab === "signin"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`pb-2 ${
              activeTab === "signup"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Create an Account
          </button>
        </div>

        {/* Sign In 表单 */}
        {activeTab === "signin" && (
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email*
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:border-black outline-none pb-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-b border-gray-400 focus:border-black outline-none pb-1 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 mt-1"
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a
                href="#"
                className={`text-sm text-${COLORS.brandDark} hover:underline`}
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full bg-black text-white py-3 uppercase tracking-widest font-medium hover:bg-${COLORS.brandGreen} transition-all duration-300`}
            >
              Sign In
            </button>
          </form>
        )}

        {/* Create Account 表单 */}
        {activeTab === "signup" && (
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First Name*
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-black outline-none pb-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last Name*
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-black outline-none pb-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email*
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:border-black outline-none pb-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-b border-gray-400 focus:border-black outline-none pb-1 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 mt-1"
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border-gray-400"
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 select-none"
              >
                I agree to Tiffany & Co.’s{" "}
                <a
                  href="#"
                  className={`text-${COLORS.brandGreen} underline hover:text-${COLORS.brandDark}`}
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className={`w-full bg-black text-white py-3 uppercase tracking-widest font-medium hover:bg-${COLORS.brandGreen} transition-all duration-300`}
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserPage;
