import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Alert, Box, Button, Checkbox, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Visibility } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <Stack spacing={4} padding={4} alignItems={'flex-start'}>
      <TextField label="Input" />

      <FormControl>
        <InputLabel id="select-label">Select</InputLabel>
        <Select label="Select" labelId='select-label'>
          <MenuItem value="Option1">Option 1</MenuItem>
          <MenuItem value="Option2">Option 2</MenuItem>
          <MenuItem value="Option3">Option 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel id="radio-label">Radio</FormLabel>
        <RadioGroup>
          <FormControlLabel value="Option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="Option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="Option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </FormControl>

      <FormControlLabel control={<Checkbox />} label="Checkbox" />

      <Button variant='contained'>Button</Button>

      <DataGrid
        rows={[{id: 1, name: "Item 1"}, {id: 2, name: "Item 2"}, {id: 3, name: "Item 3"}]}
        columns={[{field: "id", headerName: "ID"}, {field: "name", headerName: "Name"}]}
      />

      <Visibility />

      <Alert severity='info'>Message</Alert>

      <Alert severity='success'>Message</Alert>

      <Alert severity='error'>Message</Alert>

      <Alert severity='warning'>Message</Alert>

      <Button onClick={() => setIsDialogOpen(true)}>Open dialog</Button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>My dialog</DialogTitle>

        <DialogContent>
          My dialog text.
        </DialogContent>
        
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} variant='contained'>Confirm</Button>
          
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
      
      <Button onClick={() => setIsDrawerOpen(true)}>Open drawer</Button>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        My drawer text.
      </Drawer>

      <Box>
        <Box>
          <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)}>
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
          </Tabs>
        </Box>

        {tab === 0 && <div> Tab 1 content.</div>}
        {tab === 1 && <div> Tab 2 content.</div>}
        {tab === 2 && <div> Tab 3 content.</div>}
      </Box>

      <CircularProgress />
    </Stack>
  );
}

export default App;
