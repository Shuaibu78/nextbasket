import { styled, Container } from "@mui/material";

export const StyledContainer = styled(Container)({
  width: "100%",
  marginInline: "auto",
  paddingInline: "10px",
  "@media only screen and (min-width: 768px)": {
    paddingInline: "80px",
  },
});
