import { ListItemButton, ListItemIcon, TextField } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDataContext } from '../../hooks/useDataContext';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    cssLabel: {
        color: 'green'
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`,
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'green !important'
    },

});



const NameSearch = () => {
    const { filterDataByName } = useDataContext();
    return (
        <div>
            <ListItemButton >
                <ListItemIcon>
                    <PersonSearchIcon sx={{ color: "white" }} />
                </ListItemIcon>

                <TextField InputLabelProps={{
                    style: {
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: '100%',
                        borderColor: 'white',
                        color: "white"

                    }
                }}
                    inputProps={{ style: { fontFamily: 'nunito', borderColor: 'white' } }}



                    label="Search by name" variant="outlined" onChange={(e) => filterDataByName(e.target.value)} />

                <IconButton type="submit" sx={{ p: '5px 0 0 15px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </ListItemButton>
        </div>
    );
};

export default NameSearch;