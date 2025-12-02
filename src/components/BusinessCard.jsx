function BusinessCard({name, title, image, phone}) {
    return (
        <div className="p-4 sm:p-5 w-full max-w-xs sm:max-w-sm border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-blue-950 text-white">
            <div className="flex flex-col items-center text-center">
                <img 
                    src={image} 
                    alt="Business Card Image" 
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-cyan-400 rounded-full object-cover mb-3 sm:mb-4" 
                />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2 truncate w-full">{name}</h2>
                <h3 className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">
                    <span className="font-semibold text-cyan-300">Title:</span> {title}
                </h3>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-gray-700">
                <p className="text-sm sm:text-base md:text-lg break-words">
                    <span className="font-bold text-cyan-300">Phone:</span> 
                    <span className="ml-1 text-gray-200">{phone}</span>
                </p>
            </div>
        </div>
    )
}

export default BusinessCard