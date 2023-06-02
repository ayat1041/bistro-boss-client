import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from "react";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const [loading, setLoading] = useState(true);
  const [offered, setOffered] = useState([]);

  useEffect(() => {
    setOffered(menu.filter((item) => item.category === "offered"));
    setLoading(false);
  }, [menu]);

  const showSkeletons = loading || offered.length === 0;

  return (
    <SkeletonTheme baseColor="#626262" highlightColor="#15ff00">
      <div>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"Our Menu"}></Cover>
        <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offer"}></SectionTitle>
        <MenuCategory
          items={showSkeletons ? <Skeleton count={4} /> : offered}
          title={"Todays Offer"}
          coverImg={menuImg}
        ></MenuCategory>
        <MenuCategory
          items={showSkeletons ? <Skeleton count={4} /> : dessert}
          title={"dessert"}
          coverImg={dessertImg}
        ></MenuCategory>
        <MenuCategory
          items={showSkeletons ? <Skeleton count={4} /> : pizza}
          title={"pizza"}
          coverImg={pizzaImg}
        ></MenuCategory>
        <MenuCategory
          items={showSkeletons ? <Skeleton count={4} /> : salad}
          title={"salad"}
          coverImg={saladImg}
        ></MenuCategory>
        <MenuCategory
          items={showSkeletons ? <Skeleton count={4} /> : soup}
          title={"soup"}
          coverImg={soupImg}
        ></MenuCategory>
      </div>
    </SkeletonTheme>
  );
};

export default Menu;
