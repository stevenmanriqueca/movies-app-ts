import { Divider, Stack, Typography } from "@mui/material";
import { Results } from "../../interfaces";
import {
    BackCardStyled,
    FlipCardStyled,
    FrontCardStyled,
    StyledPoster,
} from "../../styles/components/";

export const FlipCard = ({
    poster_path,
    name,
    original_title,
    overview,
    vote_average,
}: Results) => {
    return (
        <FlipCardStyled flipOnClick="true" flipDirection="vertical">
            <FrontCardStyled>
                <StyledPoster
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={original_title ?? name}
                />
            </FrontCardStyled>

            <BackCardStyled>
                <Typography variant="h4" align="center">
                    {original_title ?? name}
                </Typography>

                <Divider sx={{ my: 2, backgroundColor: "primary.main" }} />
                <Typography variant="h6" align="center">
                    {overview}
                </Typography>

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 4 }}
                    divider={
                        <Divider
                            sx={{ m: 2, backgroundColor: "primary.main" }}
                            flexItem
                        />
                    }
                >
                    <Divider sx={{ backgroundColor: "primary.main" }} />
                    <Typography variant="h6" align="center">
                        Vote average: {vote_average}
                    </Typography>
                </Stack>
            </BackCardStyled>
        </FlipCardStyled>
    );
};
