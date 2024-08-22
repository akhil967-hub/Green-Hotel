import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex justify-center items-center max-w-6xl mx-auto p-2 ">
        <ul className="flex gap-4">
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-red-700 underline"
                : "text-lg font-bold "
            }
          >
            <li className="hover:scale-110">Overview</li>
          </NavLink> */}
          <a href="#home" className="text-lg font-bold hover:scale-110 ">
            <li className="hover:scale-110">Overview</li>
          </a>


          {/* <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-red-700 underline"
                : "text-lg font-bold "
            }
          >
            <li className="hover:scale-110">Review</li>
          </NavLink> */}

          <a href="#review" className="text-lg font-bold hover:scale-110 ">
            <li className="hover:scale-110">Reviews</li>
          </a>

          {/* <NavLink
            to="/photos"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-red-700 underline"
                : "text-lg font-bold"
            }
          >
            <li className="hover:scale-110">Photos</li>
          </NavLink> */}
          <a href="#photos" className="text-lg font-bold hover:scale-110 ">
            <li className="hover:scale-110">Photos</li>
          </a>
          {/* <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-bold text-red-700 underline"
                : "text-lg font-bold"
            }
          >
            <li className="hover:scale-110">Menu</li>
          </NavLink> */}
          <a href="#menu" className="text-lg font-bold hover:scale-110 ">
            <li className="hover:scale-110">Menu</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
