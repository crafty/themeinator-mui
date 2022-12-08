export default (colors) => ({
  ThemedCard: {
    styleOverrides: {
      root: { border: `3px solid ${colors.redAccent[500]}` },
    },
  },
  ThemedButton: {
    styleOverrides: {
      root: { backgroundColor: "Cyan" },
    },
  },
});
