'use client'
import Box from "@mui/material/Box";
import BodyText from "../BodyText/BodyText";
import { useStyles } from "./HeroInfoSection.theme";
import { HeroInfoSectionProps } from "@/interfaces/HeroInfoSection.interface";
import { FunctionComponent } from "react";

const HeroInfoSection: FunctionComponent<HeroInfoSectionProps> = ({ top, left }) => {
  const styleProps: HeroInfoSectionProps = { top, left };
  const { boxContainer } = useStyles(styleProps);
  return (
    <Box className={boxContainer}>
      <Box>
        <BodyText color="#2DC071" fontWeight={700} fontSize={14}>5 Items</BodyText>
        <BodyText color="#252B42" fontWeight={700} fontSize={40}>FURNITURE</BodyText>
        <BodyText color="#252B42" fontWeight={700} fontSize={14}>Read More</BodyText>
      </Box>
    </Box>
  );
};

export default HeroInfoSection;
