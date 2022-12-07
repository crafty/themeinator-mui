import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

const ThemedButtom = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const CustomButton = (props) => <ThemedButtom {...props} />;

export { CustomButton };
