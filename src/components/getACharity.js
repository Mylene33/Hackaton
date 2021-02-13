import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const GetACharity = () => {
    const classes = useStyles();


    const [charity, setCharity] = useState(null);
    const [random, setRandom] = useState(null);

    const min = 0;
    const max = 19;

    function handleClick(){
        setRandom(min + Math.floor((Math.random() * (max - min))));
        fetch("https://hackaton-1d230-default-rtdb.europe-west1.firebasedatabase.app//charities/"+random+".json")
            .then((resp) => resp.json())
            .then((data) => setCharity(data));
    }


    return (
        <>
            <div className="ContainerButton">
                <button id="RandomButton" onClick={()=>handleClick()}>Click to help a good cause</button>
            </div>

            <div>
            {
                  charity != null &&
                    <>
                          <Card>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={charity.image}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <h1>{charity.name}</h1>
                              </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                  {charity.description}
                                  </Typography>
                            </CardContent>
                          </CardActionArea>

                          <CardActions>
                            <Button size="small" color="primary">
                              Share
                            </Button>
                              <Button size="small" color="primary">
                                  {charity.url}
                              </Button>
                          </CardActions>
                          </Card>
                            
        </>
    }
            </div>
        </>
    )
}

export default GetACharity;