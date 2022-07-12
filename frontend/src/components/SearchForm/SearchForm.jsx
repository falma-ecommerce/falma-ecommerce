import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../contexts/MyContext";
import { Paper, TextField } from "@material-ui/core";

const SearchForm = () => {
  const { search, setSearch, searchInput, setSearchInput, inputRef } =
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
            }}            
          />          
        </form> 
      </Paper>
    </div>
  );
};
export default SearchForm;
