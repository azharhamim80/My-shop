"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Link from "next/link";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* LEFT - LOGO */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Shop
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Home</Button>
          </Link>

          <Link
            href="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Products</Button>
          </Link>

          <Link href="/cart" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
