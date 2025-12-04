function Menu() {
    return (
        <>
           <div className="w-full max-w-xl bg-white rounded-3xl shadow-md p-4 flex items-center gap-4">
      
      {/* Image */}
      <img
        src="/Food1.jpeg"
        alt="Food"
        className="w-24 h-24 rounded-xl object-cover"
      />

      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">Whole Wheat Loaf</h2>
        <p className="text-gray-500 text-sm mt-1">
          Nutritious, fiber-rich, and wholesome loaves.
        </p>

        {/* Price */}
        <p className="text-blue-600 font-semibold mt-2 text-lg">$4.50</p>
      </div>

      {/* Stock Badge + Cart Button */}
      <div className="flex flex-col items-end">
        <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
          In Stock : 40
        </span>

        <button className="mt-6 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
          🛒
        </button>
      </div>
    </div>

            {/* SECOND CARD BELOW */}
<div className="w-full max-w-xl bg-white rounded-3xl shadow-md p-4 flex items-center gap-4 mt-6">
  
  {/* Image */}
  <img
    src="/Food2.jpeg"
    alt="Food"
    className="w-24 h-24 rounded-xl object-cover"
  />

  {/* Text Section */}
  <div className="flex-1">
    <h2 className="text-lg font-semibold text-gray-800">Sweet Berry Muffin</h2>
    <p className="text-gray-500 text-sm mt-1">
      Soft muffin filled with fresh, juicy blueberries.
    </p>

    {/* Price */}
    <p className="text-blue-600 font-semibold mt-2 text-lg">$6.50</p>
  </div>

  {/* Stock Badge + Cart Button */}
  <div className="flex flex-col items-end">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
      In Stock : 40
    </span>

    <button className="mt-6 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
      🛒
    </button>
  </div>
            </div>
            
            {/* THIRD CARD BELOW */}
<div className="w-full max-w-xl bg-white rounded-3xl shadow-md p-4 flex items-center gap-4 mt-6">
  
  {/* Image */}
  <img
    src="/Food2.jpeg"
    alt="Food"
    className="w-24 h-24 rounded-xl object-cover"
  />

  {/* Text Section */}
  <div className="flex-1">
    <h2 className="text-lg font-semibold text-gray-800">Sweet Berry Muffin</h2>
    <p className="text-gray-500 text-sm mt-1">
      Soft muffin filled with fresh, juicy blueberries.
    </p>

    {/* Price */}
    <p className="text-blue-600 font-semibold mt-2 text-lg">$6.50</p>
  </div>

  {/* Stock Badge + Cart Button */}
  <div className="flex flex-col items-end">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
      In Stock : 40
    </span>

    <button className="mt-6 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
      🛒
    </button>
  </div>
</div>
        </>
    );
}

export default Menu;
