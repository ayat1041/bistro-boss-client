import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/users`);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} Granted Admin Privilege`,
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
  }
  const handleDelete = (user) => {};

  return (
    <div className="w-1/2 ml-auto mr-36">
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold mb-10">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="pl-8">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-left">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button 
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost text-red-500">
                      <FaUserShield className="text-2xl" />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
