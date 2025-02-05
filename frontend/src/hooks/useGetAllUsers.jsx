import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllUsers } from "@/redux/authSlice";

const useGetAllUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/user/all-users", { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllUsers(res.data.users));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllUsers();
    }, []);
};

export default useGetAllUsers;
