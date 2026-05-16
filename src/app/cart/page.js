"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  // ✅ TOTAL PRICE
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {/* ITEMS LIST */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {cartItems.map((item, index) => (
              <Card
                key={index}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "contain",
                  }}
                />

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    ${item.price}
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </Button>
              </Card>
            ))}
          </Box>

          {/* TOTAL SECTION */}
          <Card
            sx={{
              mt: 4,
              p: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              Total Amount
            </Typography>

            <Typography variant="h5" color="primary">
              ${total.toFixed(2)}
            </Typography>
          </Card>
        </>
      )}
    </Container>
  );
}