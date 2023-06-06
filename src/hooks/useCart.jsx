import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const response = await axiosSecure(
          `/carts?email=${user?.email}`
        );
        return response.data;
      }
    // queryFn: async () => {
    //   if (user?.email) {
    //     const response = await fetch(
    //       `http://localhost:5000/carts?email=${user?.email}`,
    //       {
    //         headers: {
    //           authorization: `bearer ${token}`,
    //         },
    //       }
    //     );
    //     return response.json();
    //   }
      return [];
    },
  });

  return [cart, refetch];
};

export default useCart;
