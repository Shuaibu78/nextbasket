import { ProductCardProps } from "@/interfaces/ProductCardProps.interface";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";

const ProductCard: FunctionComponent<ProductCardProps> = ({
  imageUrl,
  productName,
  category,
  slashedPrice,
  newPrice,
}) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 500, height: "100%", display: "flex", flexDirection: "column" }}>
      <Image src={imageUrl} alt={productName} width={200} height={200} style={{ width: "100%", maxHeight: "70%", objectFit: "cover" }} />

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" align="center" color="#252B42" fontWeight={700} fontSize="16px">
          {productName}
        </Typography>

        <Typography variant="body1" align="center" color="#737373" fontWeight={700} fontSize="14px">
          {category}
        </Typography>

        <Grid container justifyContent="center">
          <Box display="flex" justifyContent="space-between" alignItems="center" columnGap={1}>
            <Typography variant="body2" color="#BDBDBD" fontWeight={700} fontSize="16px">
              ${slashedPrice}
            </Typography>
            <Typography variant="body2" color="#23856D" fontWeight={700} fontSize="16px">
              ${newPrice}
            </Typography>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductCard;
