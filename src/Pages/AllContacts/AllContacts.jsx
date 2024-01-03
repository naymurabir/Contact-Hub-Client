import { ThreeDots } from "react-loader-spinner";
import useAllContacts from "../../Hooks/useAllContacts";
import AllContact from "./AllContact";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';


const AllContacts = () => {

    const { allContacts, isPending, refetch } = useAllContacts()
    const axiosPublic = useAxiosPublic()

    const [contactsUpdate, setUpdateContacts] = useState({})

    if (isPending) {
        return <div className="text-center flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    const handleMarkAsFavorite = (contact) => {
        axiosPublic.put(`/markFavorite?id=${contact._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "This Contact has been added to favorite!",
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })
                }
            })
    }

    const handleRemoveFavorite = (contact) => {
        axiosPublic.put(`/markFavorite/remove?id=${contact._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "This contact has been removed from favorite!",
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })
                }
            })
    }

    const handleUpdateContact = (id) => {
        const contactUpdate = allContacts.find(contact => contact._id === id)
        console.log(contactUpdate);
        if (contactUpdate) {
            setUpdateContacts(contactUpdate)
        }
    }

    const handleDeleteContact = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosPublic.delete(`/allContacts/${id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The contact has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("The contact is safe!");
                }
            });
    }

    return (
        <div>
            <Helmet>
                <title> All Contacts </title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto px-2 md:px-12 lg:px-24 pt-16 md:pt-24">
                <div className="pt-5 text-center lg:w-3/4 mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#111D45]">All Contacts</h1>
                    <hr className="my-3" />
                    <p>These are the contacts which are added by the specific user.</p>
                    <div className="">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allContacts?.map(contact => <AllContact key={contact._id} contact={contact} handleDeleteContact={handleDeleteContact} handleUpdateContact={handleUpdateContact} contactsUpdate={contactsUpdate} handleMarkAsFavorite={handleMarkAsFavorite} handleRemoveFavorite={handleRemoveFavorite}></AllContact>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllContacts;