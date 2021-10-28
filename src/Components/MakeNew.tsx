import CreatePost from './CreatePost';
import CreateCategory from './CreateCategory';
import { Grid, Divider } from '@mui/material';

export default function MakeNew() {
  return (
    <Grid container style={{ marginTop: "70px" }}>
        <Grid item xs={6}>
          <CreatePost />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5}>
          <CreateCategory />
        </Grid>
    </Grid>
  );
}