import ButtonMui from "@mui/material/Button";

type ButtonProps = {
  text: String;
  onClick: () => void;
  outlined?: Boolean;
};

export const Button = ({ text, onClick, outlined = false }: ButtonProps) => {
  return (
    <ButtonMui
      variant={outlined ? "outlined" : "contained"}
      color="primary"
      sx={{ padding: "12px 14px", borderRadius: "12px" }}
      onClick={onClick}
    >
      {text}
    </ButtonMui>
  );
};
