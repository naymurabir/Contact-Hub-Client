import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';


const UpdateContact = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const loadedContact = useLoaderData()

    const {
        reset,
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        const updateContact = {
            name: data.name,
            contact_email: data.contact_email,
            phone: data.phone,
            image: data.image,
            address: data.address,
            email: user?.email

        }
        console.log(updateContact);

        axiosPublic.put(`/updateContact/${loadedContact._id}`, updateContact)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    reset()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Contact has been updated successfully!!!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                    navigate('/allContacts')
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title> Update Contact </title>
            </Helmet>
            <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 pt-24'>
                <h2 className="text-2xl font-bold text-center mb-4 text-[#4F79AC]">Update A Contact</h2>
                <div className="bg-white border-2 border-[#4F79AC] p-2 md:p-5 lg:p-10 lg:w-8/12 mx-auto">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row gap-5 mt-3 justify-center">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold ">Name</span>
                                </label>
                                <input defaultValue={loadedContact?.name} {...register("name")} name="name" type="text" placeholder="Name..." className="input input-bordered input-md w-full max-w-2xl focus:outline-0" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold ">Email</span>
                                </label>
                                <input defaultValue={loadedContact?.contact_email} {...register("contact_email")} type="text" name="contact_email" placeholder="Email..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-3 justify-center">

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold ">Phone</span>
                                </label>
                                <input defaultValue={loadedContact.phone} {...register("phone")} type="text" name="phone" placeholder="Phone..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold ">Profile Picture</span>
                                </label>
                                <input defaultValue={loadedContact.image} {...register("image")} type="text" name="image" placeholder="Image URL..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" required />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold ">Address</span>
                            </label>
                            <textarea defaultValue={loadedContact.address} {...register("address")} name="address" id="" cols="20" rows="5" placeholder="Address..." className="input focus:outline-0 input-bordered w-full text-sm h-[100px]" required ></textarea>
                        </div>

                        <button className="px-8 py-2.5 leading-5  mt-2 text-white transition-colors duration-300 transform bg-[#3a71e9] rounded-md hover:bg-[#6592f5] focus:outline-none focus:bg-[#6592f5] font-semibold w-full">Update Contact</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateContact;