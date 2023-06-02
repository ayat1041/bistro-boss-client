const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img
          src={image}
          alt="Shoes"
        />
        <p className="bg-black text-white absolute right-4 top-4 p-2 rounded-lg">$ {price}</p>
      </figure>
      
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-yellow-600 hover:text-yellow-600 hover:border-yellow-300 bg-slate-100 border-0 border-yellow-300 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
