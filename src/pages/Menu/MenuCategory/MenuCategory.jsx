import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="mt-28 mb-28">
        {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-2 my-2 mt-2">
        {Array.isArray(items)
          ? items.map((item, index) => (
              <MenuItem key={index} item={item}></MenuItem>
            ))
          : items}
      </div>
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
