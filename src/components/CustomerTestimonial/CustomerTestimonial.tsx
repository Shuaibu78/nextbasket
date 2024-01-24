import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import UnFilledStar from "../../../public/assets/icn-bx-star.svg";
import FilledStar from "../../../public/assets/icn-bxs-star.svg";
import user from "../../../public/assets/user.svg";
import camera from "../../../public/assets/camera.png";
import windowBar from "../../../public/assets/window-bar.png";
import street from "../../../public/assets/street.png";
import cake from "../../../public/assets/cake.png";
import lady from "../../../public/assets/lady.png";
import writing from "../../../public/assets/writing.png";
import mountain from "../../../public/assets/mountain.png";
import snowMountain from "../../../public/assets/snow-mountain.png";
import blueBg from "../../../public/assets/blue-bg.png";

const CustomerTestimonial = () => {
  return (
    <Grid container spacing={2} paddingBlock="48px" marginBlock="80px" justifyContent="space-between">
      <Grid item xs={12} md={5}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" paddingInline="20px">
          <Typography variant="h5" align="center" color="#252B42" fontWeight={700} fontSize="24px" lineHeight="32px" marginBottom="28px">
            What they say about us
          </Typography>

          <Box marginBlock="10px">
            <Image src={user} alt="book reader" width={200} height={200} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Box>

          <Stack direction="row" spacing={2} marginBlock="10px">
            <Image src={FilledStar} alt="book reader" width={20} height={20} />
            <Image src={FilledStar} alt="book reader" width={20} height={20} />
            <Image src={FilledStar} alt="book reader" width={20} height={20} />
            <Image src={FilledStar} alt="book reader" width={20} height={20} />
            <Image src={UnFilledStar} alt="book reader" width={20} height={20} />
          </Stack>

          <Typography variant="body1" align="center" color="#737373" fontWeight={700} fontSize="14px" lineHeight="24px" marginBottom="15px" marginTop="6px">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </Typography>
          <Typography variant="body2" align="center" color="#23A6F0" fontWeight={700} fontSize="14px" lineHeight="24px" marginBottom="6px">
            Regina Miles
          </Typography>
          <Typography variant="body1" align="center" color="#252B42" fontWeight={700} fontSize="14px" lineHeight="24px" marginBottom="10px">
            Designer
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} flexWrap="wrap">
        <Grid container spacing={1} marginBottom={1} flexWrap="wrap">
          <Grid item xs={6} md={4} width="150px" height="150px">
            <Image src={camera} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="150px" height="150px">
            <Image src={windowBar} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="150px" height="150px">
            <Image src={street} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="130px" height="130px">
            <Image src={cake} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="130px" height="130px">
            <Image src={lady} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="130px" height="130px">
            <Image src={writing} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="130px" height="130px">
            <Image src={mountain} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="130px" height="130px">
            <Image src={snowMountain} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={4} width="130px" height="130px">
            <Image src={blueBg} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default CustomerTestimonial