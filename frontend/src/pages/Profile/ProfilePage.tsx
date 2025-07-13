import { useAuth } from "../../contexts/AuthContext/useAuth";
import c from "./profile.module.css";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export const ProfilePage = () => {
  const { user, logout } = useAuth();
  return (
    <div className={`${c.profileWrapper} container`}>
      <h1>Profile</h1>
      <FaRegUser size={128} />
      <div className={c.info}>
        <p>
          <strong>First Name: </strong>
          {user?.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {user?.lastName}
        </p>
        <p>
          <strong>Email: </strong>
          {user?.email}
        </p>
      </div>
      <button onClick={logout} className={c.logoutBtn}>
        <FiLogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};
