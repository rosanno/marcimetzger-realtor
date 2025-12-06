import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Home,
  Bed,
  Bath,
  DollarSign,
  SlidersHorizontal,
} from "lucide-react";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    type: "",
    sortBy: "",
    bedrooms: "",
    baths: "",
    minPrice: "",
    maxPrice: "",
  });

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const handleSubmit = () => {
    console.log("Search submitted:", formData);
    alert("Search functionality would be implemented here!");
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="relative z-10 px-4 pb-8">
        <div className="max-w-[1300px] mx-auto -mt-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Search Listings
              </h2>
            </div>

            {/* Top Row - Main Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Location */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter city or neighborhood"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Home className="w-4 h-4 text-blue-600" />
                  Property Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => handleChange("type", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white"
                >
                  <option value="">All Types</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="apartment">Apartment</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  Sort By
                </label>
                <select
                  value={formData.sortBy}
                  onChange={(e) => handleChange("sortBy", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white"
                >
                  <option value="">Most Relevant</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="size">Square Footage</option>
                </select>
              </div>
            </div>

            {/* Bottom Row - Additional Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {/* Bedrooms */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Bed className="w-4 h-4 text-blue-600" />
                  Bedrooms
                </label>
                <select
                  value={formData.bedrooms}
                  onChange={(e) => handleChange("bedrooms", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Baths */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Bath className="w-4 h-4 text-blue-600" />
                  Baths
                </label>
                <select
                  value={formData.baths}
                  onChange={(e) => handleChange("baths", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* Min Price */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  Min Price
                </label>
                <input
                  type="text"
                  placeholder="No min"
                  value={formData.minPrice}
                  onChange={(e) => handleChange("minPrice", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Max Price */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  Max Price
                </label>
                <input
                  type="text"
                  placeholder="No max"
                  value={formData.maxPrice}
                  onChange={(e) => handleChange("maxPrice", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
            >
              <Search className="w-5 h-5" />
              Search Properties
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
