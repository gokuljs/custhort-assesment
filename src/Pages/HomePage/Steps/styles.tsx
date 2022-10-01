import { styled, Grid } from "@mui/material";
export const InPutArea = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 300px;
  padding: 0.5rem;
`;

export const GridAlignMent = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 40%;
  .label {
    text-transform: capitalize;
    font-size: 1rem;
    font-family: Inter;
    .optional {
      color: #667085;
      font-family: Inter;
    }
  }
`;
export const CustomInput = styled("input")`
  min-height: 40px;
  outline: none;
  border: 1px solid #e4e7ec;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  color: #667085;
  font-family: Inter;
  width: 100%;

  :focus {
    color: #667085;
  }
`;

export const UrlCustomInput = styled(Grid)`
  display: flex;
  width: 100%;
  border: 1px solid #e4e7ec;
  padding: 0;
  background-color: #f2f4f7;
  .urlExample {
    width: 40%;
    height: auto;
    background-color: #f2f4f7;
    color: #98a2b3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;