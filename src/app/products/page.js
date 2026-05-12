import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Container
      maxWidth={false}
      sx={{ py: 4, px: { xs: 2, sm: 2.5, md: 3 } }}
    >
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 280px)",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Box>
    </Container>
  );
}