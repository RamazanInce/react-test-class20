import React from 'react';

const SearchButton = ({ search }) => {
  return (
    <div className="">
      <form className="form" onSubmit={search}>
        <button>Get Users!</button>
      </form>
    </div>
  );
};

export default SearchButton;
