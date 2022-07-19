const Search = ({ handleClick, handleChange}) => {
    return (
        <>
        <div className="search-component">

        <div className="search">
        <input type='text' onChange={handleChange}/>
        </div>
      
       <button onClick={() => handleClick()}>Search</button>
        </div>
        </>
    )
}

export default Search;