import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();

  const handleAddToCart = () => {

    // console.log(item);
    if (user && user.email) {
      const orderItem = {itemId: _id, name, image, price, email: user.email}
      fetch("http://localhost:5000/carts",{
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You need to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state:{from: location}});
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt="Shoes" />
        <p className="bg-black text-white absolute right-4 top-4 p-2 rounded-lg">
          $ {price}
        </p>
      </figure>

      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline text-yellow-600 hover:text-yellow-600 hover:border-yellow-300 bg-slate-100 border-0 border-yellow-300 border-b-4 mt-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
