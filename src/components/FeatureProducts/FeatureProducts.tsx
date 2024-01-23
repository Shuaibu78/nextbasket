import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FeatureProducts = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" rowGap="4px">
      <Typography variant="h6" align="center" color="#737373" fontWeight={400} fontSize="20px" lineHeight="30px">
        Featured Products
      </Typography>
      <Typography variant="h4" align="center" color="#252B42" fontWeight={700} fontSize="24px" lineHeight="32px">
        BESTSELLER PRODUCTS
      </Typography>
      <Typography variant="body2" align="center" color="#737373" fontWeight={400} fontSize="14px" lineHeight="20px">
        Problems trying to resolve the conflict between
      </Typography>
    </Box>
  )
}

export default FeatureProducts;
