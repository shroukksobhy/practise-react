import React from 'react';
import Button from "@material-ui/core/Button";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,

} from '@material-ui/core';
import useStyles from './styles';
import { CircularProgressbar } from "react-circular-progressbar";
function Page2() {
    const classes = useStyles();
    const value = 66;
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>

            <Container maxWidth="sm">
                <Typography
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    style={{ marginTop: "100px" }}
                >
                    My Repositories
        </Typography>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="outlined" color="primary">
                            Primary
            </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary">
                            Primary
            </Button>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={3}>
                    {cards.map((card) => (
                        <Grid item xs={12} md={4} sm={6}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}></CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography style={{ width: 50, height: 50 }}>
                                                Content Designer
                      </Typography>
                                        </Grid>
                                        <Grid item>
                                            <CircularProgressbar value={value} text={`${value}%`} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button variant="contained" color="secondary">
                                        Secondary
                  </Button>
                                    <Button variant="contained" color="primary">
                                        Primary
                  </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
          ;
        </Grid>
            </Container>        </div>
    );

}
export default Page2;