import { StyledButton } from "./style";
import { Link } from "react-router-dom";

const AddBudget = () => {
  return (
    <Link to={`/dashboard/form`}>
      <StyledButton type="primary">Add Budget</StyledButton>
    </Link>
  );
};

export default AddBudget;
