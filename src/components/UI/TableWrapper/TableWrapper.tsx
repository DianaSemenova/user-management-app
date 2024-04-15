import React from "react";
import {
  Table,
  TableContainer,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";

interface ITableWrapperProps {
  children: React.ReactNode;
  size?: string;
}

const TableWrapper = ({ children, size = "14px" }: ITableWrapperProps) => {
  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: "1px solid rgb(189 189 189)",
            fontSize: `${size}`,
            verticalAlign: "top",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          {children}
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default TableWrapper;
