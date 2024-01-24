import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import FacebookIcon from "../../../public/assets/facebook.svg";
import InstagramIcon from "../../../public/assets/instagram.svg";
import TwitterIcon from "../../../public/assets/twitter.svg";

const Footer = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" flexDirection="column" paddingTop="50px" marginTop="20px">
      <MaxWidthWrapper>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" flexDirection="column">
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" paddingBottom="40px" borderBottom={1} borderColor="#E6E6E6">
            <Typography variant="h6" color="#252B42" fontSize="24px" fontWeight={700} lineHeight="32px" letterSpacing="0.1px">Bandage</Typography>
            <Box display="flex" justifyContent="flex-start" alignItems="center" columnGap={1}>
              <Image src={FacebookIcon} alt="facebook" width={20} height={20} />
              <Image src={InstagramIcon} alt="instagram" width={20} height={20} />
              <Image src={TwitterIcon} alt="twitter" width={20} height={20} />
            </Box>
          </Box>
          <Box paddingBlock="40px" width="100%" display="flex" justifyContent="center" alignItems="center">
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={12} md={2} alignItems="center" justifyContent="flex-start">
                <Typography variant="h6" color="#252B42" fontSize="16px" fontWeight={700} lineHeight="24px" letterSpacing="0.1px" marginBottom="4px">Company Info</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">About Us</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Carrier</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">We are hiring</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Blog</Typography>
              </Grid>
              <Grid item xs={12} md={2} alignItems="center" justifyContent="flex-start">
                <Typography variant="h6" color="#252B42" fontSize="16px" fontWeight={700} lineHeight="24px" letterSpacing="0.1px" marginBottom="4px">Legal</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">About Us</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Carrier</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">We are hiring</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Blog</Typography>
              </Grid>
              <Grid item xs={12} md={2} alignItems="center" justifyContent="flex-start">
                <Typography variant="h6" color="#252B42" fontSize="16px" fontWeight={700} lineHeight="24px" letterSpacing="0.1px" marginBottom="4px">Features</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Business Marketing</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">User Analytic</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Live Chat</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Unlimited Support</Typography>
              </Grid>
              <Grid item xs={12} md={2} alignItems="center" justifyContent="flex-start">
                <Typography variant="h6" color="#252B42" fontSize="16px" fontWeight={700} lineHeight="24px" letterSpacing="0.1px" marginBottom="4px">Resources</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">IOS & Android</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Watch a Demo</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Customers</Typography>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">API</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" color="#252B42" fontSize="16px" fontWeight={700} lineHeight="24px" letterSpacing="0.1px">Get In Touch</Typography>
                <Box display="flex" marginTop={.5}>
                  <TextField
                    label="Your Email"
                    placeholder="Your Email"
                    variant="outlined"
                    style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", backgroundColor: "#FAFAFA", borderColor: "#FAFAFA", color: "#737373" }}
                  />
                  <Button variant="contained" color="primary" sx={{ marginLeft: "-2px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "opx" }}>
                    Submit
                  </Button>
                </Box>
                <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Lore imp sum dolor Amit</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </MaxWidthWrapper>
      <Box bgcolor="#FAFAFA" width="100%">
        <MaxWidthWrapper>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" padding="25px 0px">
            <Typography variant="body1" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">Made With Love By Finland All Right Reserved</Typography>
          </Box>
        </MaxWidthWrapper>
      </Box>
    </Box>
  )
}

export default Footer