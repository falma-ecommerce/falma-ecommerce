import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../contexts/MyContext";
import { Paper, TextField } from "@material-ui/core";

const SearchForm = () => {
  const { setSearch, searchInput, setSearchInput, inputRef } =
    useContext(MyContext);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
    navigate(`/search-products`);
    
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Paper
        style={{
          borderRadius: "0.3rem",
          padding: "0 0.5rem",
          border: "0.2px solid",
        }}
      >
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
            }}
          />
        </form>
      </Paper>
    </div>
  );
};
export default SearchForm;
