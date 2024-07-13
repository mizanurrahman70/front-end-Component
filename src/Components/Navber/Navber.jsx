import search from "../../assets/icons/Search.svg";
import create from "../../assets/icons/Create.svg";
import message from "../../assets/icons/Message.svg";
import notification from "../../assets/icons/Notification.svg";
import options from "../../assets/icons/Options.svg";
import profile from "../../assets/icons/Profile Pic.png";

const Navber = () => {
  const itemList = (
    <>
      <li>
        <img src={search} alt="" />
      </li>
      <li>
        <img src={create} alt="" />
      </li>
      <li>
        <img src={message} alt="" />
      </li>
      <li>
        <img src={notification} alt="" />
      </li>
      <li>
        <img src={options} alt="" />
      </li>
      <li>
        <img src={profile} alt="" />
      </li>
    </>
  );
  return (
    <div className="bg-[#1B1C1E] w-full">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <img src="/src/assets/logo/Logo.svg" alt="" />
        </div>
        <div className="hidden sm:hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{itemList}</ul>
        </div>
        <div className="block flex  lg:hidden">
          <img src={profile} alt="" />
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-white ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
            >
              {itemList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
