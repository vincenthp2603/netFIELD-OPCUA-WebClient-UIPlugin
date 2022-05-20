import React from 'react';
import { useSelector } from 'react-redux';
import { SearchInput, Grid, GridItem } from '@patternfly/react-core';

const SearchBar = () => {

    let searchUrl = useSelector(rootState => rootState.server.searchUrl);

    return (
        <Grid>
            <GridItem span={8} offset={2}>
                <SearchInput
                    placeholder='Enter Server URL'
                    value={searchUrl}
                    onChange={(value) => console.log(value)}
                />
            </GridItem>
        </Grid>
    )
}

export default SearchBar;