import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: "200px",
    textAlign: "center",
    margin: "auto",
    paddingTop: "10px",
  },
  serviceName: {
    color: "#252B42",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "0.1px",
  },
  serviceDescription: {
    color: "#737373",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    marginTop: "5px",
  },
}));
