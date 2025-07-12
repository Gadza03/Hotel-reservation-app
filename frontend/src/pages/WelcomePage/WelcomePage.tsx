import { useNavigate } from "react-router";
import WelcomeImg from "../../assets/imgs/welcomeImg.png";
import { Button } from "../../components";
import c from "./welcome.module.css";
import { paths } from "../../router/paths";
export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(paths.login);
  };
  const handleRegister = () => {
    navigate(paths.register);
  };

  return (
    <div className={c.welcomeContainer}>
      <div className={c.imgWrapper}>
        <img src={WelcomeImg} alt="welcomeimg" />
      </div>
      <div className={`container ${c.textWrapper}`}>
        <h1>Let’s Find Your Sweet & Dream Place </h1>
        <p>
          Get the opportunity to stay that you dream of at an affordable price
        </p>
        <div className={c.buttons}>
          <Button text="Log in" onClick={handleLogin} />
          <Button text="Register" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};
