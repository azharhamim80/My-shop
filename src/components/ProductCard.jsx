"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/products/${product.id}`)}
      sx={{
        height: 400,
        width: 280,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          px: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "2.6em",
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: "auto", pt: 1 }}
        >
          ${product.price}
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        <Button fullWidth variant="contained">
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
}
