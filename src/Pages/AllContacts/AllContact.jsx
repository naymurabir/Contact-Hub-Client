import { AiOutlineDelete } from "react-icons/ai";
import { MdManageAccounts, MdFavorite } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllContact = ({ contact, handleDeleteContact, handleUpdateContact, contactsUpdate, handleMarkAsFavorite, handleRemoveFavorite }) => {

    const { _id, name, contact_email, phone, address, image, status } = contact

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleUpdateContactModal = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const contact_email = form.get('contact_email')
        const phone = form.get('phone')
        const image = form.get('image')
        const address = form.get('address')
        const email = user?.email

        const updateContact = { name, contact_email, phone, image, address, email }

        const { data } = await axiosPublic.put(`/updateContact/${contactsUpdate._id}`, updateContact)

        if (data.modifiedCount > 0) {
            toast("Contact has been updated successfully!")
            e.currentTarget.reset()
        }
    }

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

                    <div className="flex justify-around items-center bg-gray-200 px-3 py-2 rounded">
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="text-2xl text-blue-900"> <span onClick={() => handleUpdateContact(_id)}><MdManageAccounts></MdManageAccounts></span> </button>

                        {/* Modal */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">

                                <form onSubmit={handleUpdateContactModal}>
                                    <label className="form-control w-full max-w-md">
                                        <div className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </div>
                                        <input defaultValue={contactsUpdate.name} name="name" type="text" placeholder="Name..." className="input focus:outline-0 input-bordered w-full max-w-md" />
                                    </label>
                                    <label className="form-control w-full max-w-md">
                                        <div className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </div>
                                        <input defaultValue={contactsUpdate.contact_email} name="contact_email" type="text" placeholder="Email..." className="input focus:outline-0 input-bordered w-full max-w-md" />
                                    </label>
                                    <label className="form-control w-full max-w-md">
                                        <div className="label">
                                            <span className="label-text font-bold">Phone</span>
                                        </div>
                                        <input defaultValue={contactsUpdate.phone} name="phone" type="text" placeholder="Phone..." className="input focus:outline-0 input-bordered w-full max-w-md" />
                                    </label>
                                    <label className="form-control w-full max-w-md">
                                        <div className="label">
                                            <span className="label-text font-bold">Image URL</span>
                                        </div>
                                        <input defaultValue={contactsUpdate.image} name="image" type="text" placeholder="Image URL..." className="input focus:outline-0 input-bordered w-full max-w-md" />
                                    </label>
                                    <label className="form-control w-full max-w-md">
                                        <div className="label">
                                            <span className="label-text font-bold">Address</span>
                                        </div>
                                        <input defaultValue={contactsUpdate.address} name="address" type="text" placeholder="Address..." className="input focus:outline-0 input-bordered w-full max-w-md" />
                                    </label>
                                    <div className="flex justify-center mt-3">
                                        <button className='text-white bg-[#0e3361] px-5 py-1 rounded'>Update</button>
                                    </div>
                                </form>

                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-white bg-[#0e3361] px-5 py-1 rounded">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <Link to={`/updateContact/${_id}`}>
                            <button> <FaRegEdit className="text-xl text-blue-900"></FaRegEdit> </button>
                        </Link>

                        {
                            status === "favorite" ?
                                <button onClick={() => handleRemoveFavorite(contact)} className="text-2xl text-red-600 "><MdFavorite ></MdFavorite > </button>
                                :
                                <button onClick={() => handleMarkAsFavorite(contact)} className="text-2xl text-blue-900"><MdFavorite ></MdFavorite > </button>
                        }

                        <button onClick={() => handleDeleteContact(_id)} className="text-2xl text-blue-900"><AiOutlineDelete></AiOutlineDelete></button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AllContact;