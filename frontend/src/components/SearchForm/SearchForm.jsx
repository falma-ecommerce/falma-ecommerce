import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../contexts/MyContext";
import { Paper, TextField } from "@material-ui/core";

const SearchForm = () => {
  const { searchInput, setSearchInput, inputRef, submitHandler } =
    useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Paper style={{ padding: "0 3rem" }}>
        <form>
          <TextField
            fullWidth
            label="Search...."
            ref={inputRef}
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && submitHandler(e);
              navigate("/search-products");
            }}
          />
        </form>
      </Paper>
    </div>
  );
};
export default SearchForm;
