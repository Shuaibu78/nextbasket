'use client'
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactNode } from "react";
import { useStyles } from "./BodyText.theme";
import { BodyTextProps } from "@/interfaces/BodyTextProps.interface";

interface IBodyText extends BodyTextProps {
  children: ReactNode;
}

const BodyText: FunctionComponent<IBodyText> = ({ children, color, margin, fontWeight, fontSize, className }) => {
  const styleProps: BodyTextProps = { color, margin, fontWeight, fontSize };
  const { bodyTextWrapper } = useStyles(styleProps);

  return (
    <>
      <Typography className={`${bodyTextWrapper} ${className}`}>{children}</Typography>
    </>
  );
};

export default BodyText;
