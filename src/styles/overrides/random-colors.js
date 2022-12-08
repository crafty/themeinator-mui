export default (colors) => ({
  ThemedCard: {
    styleOverrides: {
      root: {
        border: `3px dotted ${colors.primary[300]}`,
        color: colors.secondary[500],

        "& .MuiSvgIcon-root": {
          color: colors.secondary[500],
        },
      },
    },
  },
});
