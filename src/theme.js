import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#111827", // deep modern black (for headers/buttons)
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#f59e0b", // warm accent (sale, highlights)
    },

    background: {
      default: "#f9fafb", // soft gray background
      paper: "#ffffff",
    },

    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },

    success: {
      main: "#16a34a",
    },

    error: {
      main: "#dc2626",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif"
    ].join(","),

    h1: {
      fontSize: "2.2rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },

    h3: {
      fontSize: "1.4rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },

    button: {
      textTransform: "none", // important for modern UI look
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12, // smooth e-commerce card look
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 16px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#111827",
        },
      },
    },
  },
});

export default theme;