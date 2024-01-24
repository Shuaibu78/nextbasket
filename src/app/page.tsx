"use client";
import CustomerTestimonial from "@/components/CustomerTestimonial/CustomerTestimonial";
import FeaturedPost from "@/components/FeaturePost/FeaturedPost";
import FeatureProducts from "@/components/FeatureProducts/FeatureProducts";
import HeroInfoSection from "@/components/HeroInfoSection/HeroInfoSection";
import { useStyles } from "@/components/HeroInfoSection/HeroInfoSection.theme";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import ProductList from "@/components/ProductList/ProductList";
import ServiceCardList from "@/components/ServicesCardList/ServicesCardList";
import { HeroInfoSectionProps } from "@/interfaces/HeroInfoSection.interface";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Image from "next/image";
import HeroBgcover from "../../public/assets/hero-bg-cover.svg";
import HeroFlowerVase from "../../public/assets/hero-flower-vase.svg";
import HeroPots from "../../public/assets/hero-handmade-pots.svg";
import HeroLamp from "../../public/assets/hero-hanging-lamp.svg";
import utensilHolder from "../../public/assets/utensil-holder.png";

export default function Home() {
  const top = "0%";
  const left = "0%";
  const justifyContent = "center";
  const styleProps: HeroInfoSectionProps = { top, left, justifyContent };
  const { boxContainer } = useStyles(styleProps);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <MaxWidthWrapper>
        <Grid container spacing={.5} marginTop="50px">
          <Grid item xs={12} md={4.5} style={{ position: "relative", height: isMobile ? "max-content" : "auto" }}>
            <Image src={HeroBgcover} alt="hero bAckground" width={200} height={200} priority style={{ width: "100%", height: "85%", objectFit: "cover" }} />
            <HeroInfoSection top="3%" />
          </Grid>

          <Grid item xs={12} md={7.5} container spacing={.5}>
            <Grid item xs={12} style={{ position: "relative", height: isMobile ? "max-content" : "auto" }}>
              <Image src={HeroFlowerVase} alt="Left Image 1" width={500} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <HeroInfoSection left="4%" top="5%" />
            </Grid>
            <Grid item xs={12} container spacing={.5}>
              <Grid item xs={12} md={6} style={{ position: "relative", height: isMobile ? "max-content" : "auto" }}>
                <Image src={HeroLamp} alt="Left Image 2" width={400} height={400} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
                <HeroInfoSection top="5%" />
              </Grid>
              <Grid item xs={12} md={6} style={{ position: "relative", height: isMobile ? "max-content" : "auto" }}>
                <Image src={HeroPots} alt="Left Image 3" width={400} height={400} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
                <HeroInfoSection top="5%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <FeatureProducts />
        <ProductList />
        <FeatureProducts mainTitle="THE BEST SERVICES" />
        <ServiceCardList />
        <FeaturedPost />
        <CustomerTestimonial />
      </MaxWidthWrapper>

      <Grid container padding={0} margin={0}>
        <Grid item xs={12} style={{ position: "relative" }} width="100%" padding={0} margin={0}>
          <Image src={utensilHolder} alt="utensil holder" width={200} height={200} style={{ width: "100%", height: "100%" }} />
          <Box className={boxContainer} width="100%" alignItems="center">
            <Box width={isMobile ? "80%" : "40%"} display="flex" justifyContent="center" alignItems="center" flexDirection="column" rowGap={isMobile ? "4px" : "30px"}>
              <Typography variant="h6" align="center" color="#23A6F0" fontWeight={700} fontSize={isMobile ? "10px" : "14px"} lineHeight={isMobile ? "20px" : "24px"}>
                Designing Better Experience
              </Typography>
              <Typography variant="h3" align="center" color="#252B42" fontWeight={700} fontSize={isMobile ? "14px" : "40px"} lineHeight={isMobile ? "20px" : "50px"}>
                Problems trying to resolve the conflict between
              </Typography>
              <Typography variant="body1" align="center" color="#737373" fontWeight={400} fontSize={isMobile ? "12px" : "14px"} lineHeight={isMobile ? "18px" : "20px"}>
                Problems trying to resolve the conflict between the two major realms of Classical physics:
              </Typography>
              <Typography variant="h5" align="center" color="#23856D" fontWeight={700} fontSize={isMobile ? "14px" : "24px"} lineHeight={isMobile ? "18px" : "32px"}>
                $16.48
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: "#23A6F0", padding: isMobile ? "10px 20px" : "15px 40px", height: isMobile ? "35px" : "52px", color: "white", fontSize: isMobile ? "12px" : "20px" }}>ADD YOUR CALL TO ACTION</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
