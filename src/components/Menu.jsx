function Menu() {
    return (
      <>
    <div className="w-full flex flex-col items-center mt-2">
               <div className="w-full max-w-xl bg-white rounded-3xl shadow-md p-4 flex items-center gap-4">
              
              {/* Image */}
              <img
                src="/Shawarma1.jpg"
                alt="Shawarma"
                className="w-24 h-24 rounded-xl object-cover"
              />

              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">Shawarma</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Tortilla with boneless chicken meat and vegetables.
                </p>

                {/* Price */}
                <p className="text-blue-600 font-semibold mt-2 text-lg">Ksh 200</p>
              </div>

              {/* Stock Badge + Cart Button */}
              <div className="flex flex-col items-end">
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Available on order
                </span>

                <button className="mt-6 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-cyan-900 transition">
                  🛒
                </button>
              </div>
            </div>

                

                    {/* SECOND CARD BELOW */}
        <div className="w-full max-w-xl bg-white rounded-3xl shadow-md p-4 flex items-center gap-4 mt-6">
          
          {/* Image */}
          <img
            src="/Smocha1.jpeg"
            alt="Smocha"
            className="w-24 h-24 rounded-xl object-cover"
          />

          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">Smocha</h2>
            <p className="text-gray-500 text-sm mt-1">
              Best Kenyan cuisine.
            </p>

            {/* Price */}
            <p className="text-blue-600 font-semibold mt-2 text-lg">Ksh 80</p>
          </div>

          {/* Stock Badge + Cart Button */}
          <div className="flex flex-col items-end">
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
              Available on order
            </span>

            <button className="mt-6 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-cyan-900 transition">
              🛒
            </button>
          </div>
                    </div>
                    
                
                    {/* THIRD CARD BELOW */}
        <div className="w-full max-w-xl bg-white rounded-3xl shadow-md p-4 flex items-center gap-4 mt-6">
          
          {/* Image */}
          <img
            src="/Bolognese.jpg"
            alt="Bolognese"
            className="w-24 h-24 rounded-xl object-cover"
          />

          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">Bolognese</h2>
            <p className="text-gray-500 text-sm mt-1">
              Best bolognese in town.
            </p>

            {/* Price */}
            <p className="text-blue-600 font-semibold mt-2 text-lg">Ksh 350</p>
          </div>

          {/* Stock Badge + Cart Button */}
          <div className="flex flex-col items-end">
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
              Available on order
            </span>

            <button className="mt-6 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-cyan-900 transition">
            🛒
            </button>
          </div>
          </div>
          

    </div>
 
        </>
    );
}

export default Menu;
