const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className="flex px-8 rounded-ee-3xl shadow-sm py-10 bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200" style={{ transition: "all 0.5s ease-in",  }}>
            <img style={{borderRadius: "0px 200px 200px 200px"}} className="mr-3 w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase" style={{fontFamily: "'Cinzel', serif", fontWeight: "500"}}>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-700 font-bold drop-shadow-sm">${price}</p>
        </div>
    );
};

export default MenuItem;