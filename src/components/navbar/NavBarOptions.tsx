import { Avatar, IconButton } from "@mui/material";
import { StylesAvatarNav } from "../../styles/components";

interface IProps {
  Icon: any;
  onFunction: () => void;
}

export const NavBarOptions = ({ Icon, onFunction }: IProps): JSX.Element => {

  return (
    <Avatar sx={{ ...StylesAvatarNav }} onClick={onFunction}>
      <IconButton
        size="large"
        aria-haspopup="true"
        sx={{ color: "primary.main" }}
      >
        {Icon}
      </IconButton>
    </Avatar>
  );
};
