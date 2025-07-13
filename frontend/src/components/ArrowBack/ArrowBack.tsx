import { useNavigate } from "react-router";
import c from "./arrow.module.css";
import Arrow from "../../assets/svgs/arrow.svg";
export const ArrowBack = () => {
  const navigate = useNavigate();

  return (
    <button className={c.arrow} onClick={() => navigate(-1)}>
      <img src={Arrow} alt="arrow" />
    </button>
  );
};
