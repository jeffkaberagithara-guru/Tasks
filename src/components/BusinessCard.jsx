function BusinessCard({name, title,image, phone}) {
    return (
        <div className="p-6 border rounded shadow-md w-90 bg-blue-950 text-white">
            <img src={image} alt="Business Card Image" className="w-15 h-15 border-2 border-cyan-400 rounded-full mb-5" />
            <h2 className="text-2xl text-cyan-400 mb-5">{name}</h2>
            <h3><span className="font-bold">Title: </span> {title}</h3>
            <p><span className="font-bold">Phone Number: </span>{phone}</p>
        </div>
    )
 }

export default BusinessCard