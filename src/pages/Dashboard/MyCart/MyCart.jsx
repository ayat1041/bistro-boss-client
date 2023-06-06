import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart?.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${row._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  console.log(total);
  return (
    <div className="w-1/2 ml-auto mr-[10%] mt-20 mb-20">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="flex flex-row justify-between gap-4 mb-8 items-center font-bold w-full uppercase">
        <h3 className="text-3xl">Total items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <button className="btn btn-warning btn-sm">Pay Now</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{row.name}</td>
                <td className="text-end">$ {row.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(row)}
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

export default MyCart;
