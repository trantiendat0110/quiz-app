import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    main: {
      main: "rgb(234 88 12)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#69BE28",
      contrastText: "#fff",
    },
    violet: {
      main: "rgb(124 58 237)",
      contrastText: "#fff",
    },
  },
});
