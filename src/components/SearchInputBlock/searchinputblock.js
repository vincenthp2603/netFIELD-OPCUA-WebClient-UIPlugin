import React from "react";
import { Button } from "@patternfly/react-core";
import SearchBar from "./SearchBar/searchbar";
import styles from "./searchinputblock.module.css";

const SearchInputBlock = () => {
    return (
        <div className={styles.mainBlock}>
            <SearchBar />
            <Button 
                variant="primary"
                className={styles.searchBtn}
            >
                Browse
            </Button>
            <div className={styles.errorMessage}>Placeholder for error message</div>
        </div>
    )
}

export default SearchInputBlock;


