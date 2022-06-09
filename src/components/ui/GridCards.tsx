import {
  Grid
} from "@mui/material";
import { Results } from "../../interfaces";
import { FlipCard } from "../flipcards";

export const GridCards = (props: Results): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
      <FlipCard {...props} />
    </Grid>
  );
};