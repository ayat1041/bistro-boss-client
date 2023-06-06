import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaWallet,
  FaUsers,
  FaBookmark,
  FaBook
} from "react-icons/fa";
import { TfiMenuAlt } from 'react-icons/tfi'
import { ImSpoonKnife } from "react-icons/im";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-mobile h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center mt-4">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content fixed uppercase text-sm">
          <div className="uppercase mb-8 ml-4">
            <p className="text-2xl font-bold">Bistro Boss</p>
            <p className="text-xl font-semibold">Restaurant</p>
          </div>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <ImSpoonKnife /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <TfiMenuAlt /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt /> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart /> My Cart +{cart?.length || 0}
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourMenu"> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"> Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
