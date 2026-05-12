import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getProduct } from "@/services/api";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product || !product.id) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: "100%",
              maxHeight: 400,
              objectFit: "contain",
            }}
          />
        </Box>

      
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            ${product.price}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          <Button variant="contained" size="large">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
