import React, { useState } from "react";

function Search({ search, HandleSearch }) {
    return (
        <div>
            Search
        
            <input type="text" value={search}  onChange={HandleSearch} />

        </div>
    );


}

export default Search;