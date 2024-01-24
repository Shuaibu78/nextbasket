import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { HeroInfoSectionProps } from "@/interfaces/HeroInfoSection.interface";

export const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: (props: HeroInfoSectionProps) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: props?.justifyContent || "space-between",
    height: "100%",
    position: "absolute",
    top: props?.top || "4%",
    left: props?.left || "7%",
  }),
}));
