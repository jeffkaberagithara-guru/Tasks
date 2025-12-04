function BusinessCard({name, title, image, phone}) {
    return (
        <div className="p-4 mt-30 sm:p-5 w-full max-w-xs sm:max-w-sm border cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-blue-950 text-white flex flex-col">
            <div className="grow flex flex-col items-center text-center">
                <img 
                    src={image} 
                    alt="Business Card Image" 
                    className="w-full h-48 object-cover mb-3 sm:mb-4 rounded-md" 
                />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2 truncate w-full">{name}</h2>
                <h3 className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">
                    <span className="font-semibold text-cyan-300">Title:</span> {title}
                </h3>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-gray-700">
                <p className="text-sm sm:text-base md:text-lg wrap-break-word">
                    <span className="font-bold text-cyan-300">Phone:</span> 
                    <span className="ml-1 text-gray-200">{phone}</span>
                </p>
            </div>
        </div>
    )
}

export default BusinessCard