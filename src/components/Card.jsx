import { FaStar } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { MdMail } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";

export default function ProfileCard() {
  return (
    <div className=" flex items-center flex-col mx-auto mt-30 w-[330px] rounded-3xl bg-white shadow-xl overflow-hidden p-3">
      {/* Image Container */}
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
        <img
          src="/headshot1.jpg" // replace with actual image path
          alt="Wakanesa Dorothy"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute bottom-4 left-4 right-4">
          {/* Name */}
          <div className="flex items-center gap-1">
            <h2 className="text-white font-semibold text-2xl">
              Wakanesa Dorothy
            </h2>
            <HiCheckBadge className="text-blue-500 text-xl" />
          </div>

          {/* Subtitle */}
          <p className="text-white/90 text-md mt-1 leading-tight">
            I'm the CEO at this restaurant.
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-white mt-4">
            <div className="flex flex-col items-center">
              <FaStar className="text-yellow-400 text-lg" />
              <span className="text-xs">4</span>
              <span className="text-[11px] opacity-60">Rating</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-semibold">$45k+</span>
              <span className="text-[11px] opacity-60">Earned</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-semibold">$85/hr</span>
              <span className="text-[11px] opacity-60">Rate</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-5">
            <button className="flex items-center gap-2 cursor-pointer bg-white text-black transition-transform hover:-translate-y-1 font-medium px-5 py-3 rounded-full shadow-md w-full justify-center">
              <MdMail className="text-xl" />
              Get In Touch
            </button>

            <button className="bg-gray-900 text-white p-3 cursor-pointer transition-transform hover:-translate-y-1 rounded-full shadow-md">
              <FiBookmark className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
