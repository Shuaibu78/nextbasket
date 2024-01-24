"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import bookReader from "../../../public/assets/book-reader.svg";
import carbonBook from "../../../public/assets/carbon-book.svg";
import arrowGrowth from "../../../public/assets/arrow-growth.svg";
import { useStyles } from "./ServiceCardList.theme";

const ServiceCardList = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginBlock="80px" flexWrap="wrap">
      <Box className={classes.card}>
        <Image src={bookReader} alt="book reader" width={200} height={200} style={{ width: "30%", height: "30%", objectFit: "cover" }} />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100%" rowGap="10px" mt="10px">
          <Typography variant="h3" className={classes.serviceName}>
            Easy Wins
          </Typography>
          <Typography variant="body1" className={classes.serviceDescription}>
            Get your best looking smile now!
          </Typography>
        </Box>
      </Box>

      <Box className={classes.card}>
        <Image src={carbonBook} alt="book reader" width={200} height={200} style={{ width: "30%", height: "30%", objectFit: "cover" }} />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100%" rowGap="10px" mt="10px">
          <Typography variant="h3" className={classes.serviceName}>
            Concrete
          </Typography>
          <Typography variant="body1" className={classes.serviceDescription}>
            Defalcate is most focused in helping you discover your most beautiful smile
          </Typography>
        </Box>
      </Box>

      <Box className={classes.card}>
        <Image src={arrowGrowth} alt="book reader" width={200} height={200} style={{ width: "30%", height: "30%", objectFit: "contain" }} />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100%" rowGap="10px" mt="10px">
          <Typography variant="h3" className={classes.serviceName}>
            Hack Growth
          </Typography>
          <Typography variant="body1" className={classes.serviceDescription}>
            Overcame any hurdle or any other problem
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCardList;
