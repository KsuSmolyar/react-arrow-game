import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"
import cn from "classnames"
import styles from "./TypographyHeader.module.css"

export interface ITypographyHeaderProps extends MaterialTypographyProps {}

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
  const { children, className } = props
  return (
    <MaterialTypography
      {...props}
      variant="h3"
      className={cn(styles.text, className)}
    >
      {children}
    </MaterialTypography>
  )
}

export default TypographyHeader
