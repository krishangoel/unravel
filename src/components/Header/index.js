import { Input } from "antd";
import AddBudget from "../AddBudget";
import {StyledHeader } from "./style";

const Search = Input.Search;

const Header = ({ setSearch }) => {
  return (
    <StyledHeader>
      <AddBudget />
      <Search
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 200 }}
        placeholder="Enter Name"
        allowClear
        enterButton
      />
    </StyledHeader>
  );
};

export default Header;
