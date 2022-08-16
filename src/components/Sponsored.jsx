import React from 'react';
import {Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Sponsored = () => {
    return (
        <div className="sponsored p-0 m-0">
            <List component="nav" aria-label="main mailbox folders"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                      <ListSubheader sx={{ bgcolor: 'transparent' }} component="div" id="nested-list-subheader">
                          Sponsored
                      </ListSubheader>
                  }>
                <Divider sx={{borderBottom: 1}}/>
                <List component="nav" aria-label="main mailbox folders"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                          <ListSubheader sx={{ bgcolor: 'transparent' }} component="div" id="nested-list-subheader">
                              Group Conversations
                          </ListSubheader>
                      }>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Create new group"/>
                    </ListItemButton>
                </List>
            </List>
        </div>
    );
};

export default Sponsored;