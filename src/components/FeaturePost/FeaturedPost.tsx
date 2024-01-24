import { Box, Grid, Typography } from '@mui/material';
import luxuryBathroom from "../../../public/assets/bathroom.svg";
import BedRoom from "../../../public/assets/bedroom.svg";
import dining from "../../../public/assets/dining.svg";
import FeaturedPostCard from '../FeaturedPostCard/FeaturedPostCard';

const FeaturedPost = () => {
  return (
    <Box marginTop="80px">
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" rowGap="4px">
        <Typography variant="h6" align="center" color="#23A6F0" fontWeight={700} fontSize="14px" lineHeight="30px">
          Practice Advice
        </Typography>
        <Typography variant="h4" align="center" color="#252B42" fontWeight={700} fontSize="40px" lineHeight="32px">
          Featured Posts
        </Typography>
      </Box>
      <Grid container spacing={1} paddingBlock="20px" marginBlock="40px" justifyContent="center">
        {[luxuryBathroom, dining, BedRoom].map((imageUrl, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FeaturedPostCard imageUrl={imageUrl} />
          </Grid>
        )
        )}
      </Grid>
    </Box>
  )
}

export default FeaturedPost