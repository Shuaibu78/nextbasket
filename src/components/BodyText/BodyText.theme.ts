import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { BodyTextProps } from "@/interfaces/BodyTextProps.interface";

export const useStyles = makeStyles((theme: Theme) => ({
  bodyTextWrapper: (props: BodyTextProps) => ({
    color: props.color,
    margin: props.margin,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    [theme.breakpoints?.down("md")]: {
      fontSize: 14,
    },
  }),
}));
