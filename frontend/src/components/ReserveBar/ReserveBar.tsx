import c from "./reserveBar.module.css";

type Props = {
  price: number;
};

export const ReserveBar = ({ price }: Props) => {
  return (
    <div className={c.bar}>
      <div>
        <p className={c.label}>Price estimate</p>
        <p className={c.price}>
          ${price} <span className={c.unit}>/night</span>
        </p>
      </div>
      <button className={c.button}>Reserve Now</button>
    </div>
  );
};
