import s from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={s.searchbox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
