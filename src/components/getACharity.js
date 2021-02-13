
import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import Lottie from 'react-lottie';
import animationData from '../donate.json'; 

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
};

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

    const [loading, setLoading] = useState(false);

    const min = 0;
    const max = 19;

    

    function handleClick(){
        setLoading(true)
        let random = min + Math.floor((Math.random() * (max - min)));
        fetch("https://hackaton-1d230-default-rtdb.europe-west1.firebasedatabase.app//charities/"+random+".json")
            .then((resp) => resp.json())
            .then((data) => setCharity(data));
    }


    return (
         <> 
            {
              loading == true &&
              <div>
                  <Lottie 
                  options={defaultOptions}
                  height={400}
                  width={400}
                  />
              </div>
          }
        
        <>
          <div id="slogan">
            <h2>You want to donate for a good case but don't know which one ? </h2>
            <h3>Ran'don is here to back you up !</h3>
          </div>

            <div className="ContainerButton">
                <button id="RandomButton" onClick={()=>handleClick()}>Click to help a good cause</button>
            </div>

            <div className="ContainerResult">
            {
                  charity != null &&
                    <>
                      <Card id="result" >
                        <CardActionArea>

                          <CardMedia
                              id="charityImage"
                              className={classes.media}
                              image={charity.image}
                              title={charity.name}/>

                          <CardContent>
                            <Typography gutterBottom component="h3">
                              <h3 id="charityName">{charity.name}</h3>
                            </Typography>
                            <h4>What they do:</h4>
                            <Typography id="charityDescription" variant="body2" color="textSecondary" component="p">
                              {charity.description}
                            </Typography>
                            <h4>What you do by donating:</h4>
                            <Typography id="charityDescription" variant="body2" color="textSecondary" component="p">
                              {charity.description}
                            </Typography>
                          </CardContent>

                        </CardActionArea>

                        <CardActions>

                          <Button size="small" color="primary">
                            {charity.url}
                          </Button>

                        </CardActions>

                      </Card>
        </>
    }
            </div>
        </>
        </>
    )
}

export default GetACharity;