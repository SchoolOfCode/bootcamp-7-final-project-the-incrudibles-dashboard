import { ListItemButton, ListItemIcon, TextField } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDataContext } from '../../hooks/useDataContext';



const NameSearch = () => {
    const { filterDataByName } = useDataContext();
    return (
        <div>
            <ListItemButton >
                <ListItemIcon>
                    <PersonSearchIcon />
                </ListItemIcon>

                <TextField id="outlined-basic" label="Search by name" variant="outlined" onChange={(e) => filterDataByName(e.target.value)} />

                <IconButton type="submit" sx={{ p: '5px 0 0 15px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </ListItemButton>
        </div>
    );
};

export default NameSearch;