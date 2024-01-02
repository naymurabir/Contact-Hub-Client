import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAllContacts = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: allContacts, isPending, refetch } = useQuery({
        queryKey: ['allContacts', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/allContacts?email=${user?.email}`)
            return data
        }
    })


    return { allContacts, isPending, refetch }
};

export default useAllContacts;