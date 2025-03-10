import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material"
import cn from "classnames"
import styles from "./Button.module.css"
export interface IButtonProps extends MaterialButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = "" } = props
  return (
    <MaterialButton
      size={"small"}
      variant={"contained"}
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MaterialButton>
  )
}

export default Button
