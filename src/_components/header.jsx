"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-8">
          <div
            className="text-2xl font-bold"
            onClick={() => {
              router.push("/");
            }}
          >
            SHOPY
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Shop
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              On Sale
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              New Arrivals
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Brands
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-100 text-gray-600 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <svg
              className="absolute left-3 top-2.5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-1.4 7h9.8M7 13h10m0 0l1.4-7H4.4m0 0L3 3"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
