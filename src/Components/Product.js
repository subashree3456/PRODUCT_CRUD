import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItems from "./CardItems";
import { Container, Box } from "@mui/system";

import { Grid } from "@mui/material";

function Product() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    let Product = await axios.get(
      "https://631d700ecc652771a4859a9c.mockapi.io/Products"
    );
    setproduct(Product.data);
  };
  let deleteProduct = async (id) => {
    let Product = await axios.delete(
      `https://631d700ecc652771a4859a9c.mockapi.io/Products/${id}`
    );
    loadData();
  };
  return (
    <div>
      <Container className="container mt-4" minwidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            {product.map((product) => {
              return (
                <Grid
                  style={{ margin: "0 auto" }}
                  key={product.id}
                  item
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <CardItems
                    deleteProduct={deleteProduct}
                    data={product}
                    id={product.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Product;
