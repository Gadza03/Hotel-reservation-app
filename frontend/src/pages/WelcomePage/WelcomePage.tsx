import WelcomeImg from "../../assets/imgs/welcomeImg.png";
import { Button } from "../../components";
import c from "./welcome.module.css";
export const WelcomePage = () => {
  const handleLogin = () => {};
  const handleRegister = () => {};

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
