import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Search.module.scss";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInput("");
    router.push({
      pathname: `/search/${input}`,
    });
  };

  return (
    <div className={styles.search_wrapper}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
