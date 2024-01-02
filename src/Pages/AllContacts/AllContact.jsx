
const AllContact = ({ contact, handleDeleteContact }) => {

    const { _id, name, contact_email, phone, address, image } = contact

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-10">
                <img className="h-[200px] w-full rounded" src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 title={name} className='text-xl font-bold truncate text-center text-[#1666c7]'> {name} </h2>
                    <hr />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <h2 className='text-base font-bold text-[#0d3b74]'> Email:</h2>
                            <h3 className="text-[#0d3b74] font-semibold">{contact_email}</h3>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-base font-bold text-[#0d3b74]'>Phone:</h3>
                            <h3 className="text-[#0d3b74] font-semibold">{phone}</h3>
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-base text-[#0d3b74] font-bold'> Address:</h3>
                        <p className="text-[#0d3b74] font-semibold">{address}</p>
                    </div>

                    <div>
                        <button className="bg-[#1e66be] text-white px-2 py-1 rounded font-semibold w-full">Contact Management</button>

                        <button onClick={() => handleDeleteContact(_id)} className="bg-[#d11515] text-white px-2 py-1 rounded font-semibold w-full mt-2">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllContact;