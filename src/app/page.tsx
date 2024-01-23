import FeatureProducts from "@/components/FeatureProducts/FeatureProducts";
import HeroInfoSection from "@/components/HeroInfoSection/HeroInfoSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import {
  Grid
} from '@mui/material';
import Image from "next/image";
import HeroBgcover from "../../public/assets/hero-bg-cover.svg";
import HeroFlowerVase from "../../public/assets/hero-flower-vase.svg";
import HeroPots from "../../public/assets/hero-handmade-pots.svg";
import HeroLamp from "../../public/assets/hero-hanging-lamp.svg";
import ProductList from "@/components/ProductList/ProductList";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Grid container spacing={.5}>
        {/* Right side with image and writeups */}
        <Grid item xs={12} md={4.5} style={{ position: "relative" }}>
          <Image src={HeroBgcover} alt="Right image" width={200} height={200} priority style={{ width: "100%", height: "85%", objectFit: "cover" }} />
          <HeroInfoSection top="3%" />
        </Grid>

        {/* Left side with three images */}
        <Grid item xs={12} md={7.5} container spacing={.5}>
          <Grid item xs={12} style={{ position: "relative" }}>
            <Image src={HeroFlowerVase} alt="Left Image 1" width={500} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <HeroInfoSection left="4%" top="5%" />
          </Grid>
          <Grid item xs={12} container spacing={.5}>
            <Grid item xs={12} md={6} style={{ position: "relative" }}>
              <Image src={HeroLamp} alt="Left Image 2" width={400} height={400} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
              <HeroInfoSection top="5%" />
            </Grid>
            <Grid item xs={12} md={6} style={{ position: "relative" }}>
              <Image src={HeroPots} alt="Left Image 3" width={400} height={400} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
              <HeroInfoSection top="5%" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <FeatureProducts />
      <ProductList />
      <FeatureProducts />
    </MaxWidthWrapper>
  );
}
