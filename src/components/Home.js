import React from 'react';
import { Link } from 'react-router-dom';
//import PageBuilder from './PageBuilder';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
      },
    paper: {
        padding: theme.spacing(1),
        marginTop: '4%',
        display: 'flex',
        alignContent: 'center',
        color: theme.palette.text.secondary,
      },
    }));

export const Home = () => {

    const shoes = {
        "LadiesProducts": {
            name: "Nike For Women",
            img:
                "https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/69510770-3585-4587-8024-de4a5414aca2/free-metcon-3-training-shoe-B0MTbs.jpg"
        },
        "MensProducts": {
            name: "Nike for Men",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f30c4703-04e8-40ca-92d8-a509ddd1c851/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg"
        },
        "KidsProducts": {
            name: "Nike for Kids",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-c03d93cd-907a-4db4-9016-d027e39e9018/air-max-90-and-shoe-DRlXBP.jpg"
        },
    };

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={10}>

                {Object.entries(shoes).map(([ProductID, { name, img }]) =>
                    (
                        <li className={classes.paper}>
                            key={ProductID}
                            <Grid item xs={10} >
                                <Link to={ProductID}>
                                    <h2>{name}</h2>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="230"
                                                    image={img}
                                                    title="Contemplative Reptile"               // <img src={img} alt={name} />
                                                />

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Lizard
                                            </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                            </Typography>
                                            </CardContent>
                                            </CardActionArea>
                                        </Card>
                                </Link>
                            </Grid>
                        </li>
                    )
                )}
            </Grid>
        </div>
    )
}
