import React from 'react'
import {Box, Typography} from '@material-ui/core'

function AddNote(title, description) {
    return (
    
        <div>
        <Box sx={{
          width: 300,
          height: 300,
          bgcolor: 'primary.dark',
          'hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
          <Typography value={title}>{title}</Typography>
          <Typography value={description}>{description}</Typography>
        </Box>
      </div>
    )
      
  
}

export default AddNote
