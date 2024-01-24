"use client";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const [limit, setLimit] = useState(8);
  const fetchProjects = (limit = 8) => fetch("https://dummyjson.com/products?limit=" + limit).then((res) =>
    res.json()
  )
  const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['productList', limit],
    queryFn: () => fetchProjects(limit),
    placeholderData: keepPreviousData
  })

  return (
    <Container sx={{ marginBlock: "60px" }}>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <Grid container spacing={2} paddingBlock="20px">
          {data?.products?.map((product: any) => {
            const newPrice = Math.floor((product.price * product.discountPercentage) / 100);
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <ProductCard
                  imageUrl={product.thumbnail}
                  productName={product.title}
                  category={product.category}
                  slashedPrice={product.price}
                  newPrice={newPrice}
                />
              </Grid>
            );
          })}
        </Grid>
      )}

      {data?.total !== data?.products?.length && (
        <Box display="flex" justifyContent="center" alignItems="center" marginBlock="40px">
          <Button
            variant="outlined"
            onClick={() => {
              if (data.total > data.products.length) {
                setLimit(limit + 8)
              }
            }}
            sx={{ py: "14px", px: "40px", color: "#23A6F0", borderColor: "#23A6F0", textTransform: "none", fontWeight: 700, fontSize: "14px" }}
            disabled={isPending}
          >
            {isFetching ? (
              <CircularProgress size={24} />
            ) : (
                "LOAD MORE PRODUCTS"
            )}
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default ProductList;
