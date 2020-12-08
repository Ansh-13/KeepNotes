import React from 'react'
import { Grid, Button, Card, Typography, IconButton, Icon } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

function HomePage() {
    return (
        <Grid container xs={12} direction='row'>
            <Typography text-align="Left">KeepNotes</Typography>
            <IconButton>
                <AddIcon t/>
            </IconButton>
            
        </Grid>
    )
}

export default HomePage