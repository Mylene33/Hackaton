import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

<<<<<<< HEAD
const GetACharity = () => {
=======
import { makeStyles } from '@material-ui/core/styles';
>>>>>>> 2755577ec34ef7521b462aa0698ec2a61f8c2380

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

<<<<<<< HEAD
  const min = 0;
  const max = 19;

  function handleClick(event){
    setRandom({random: min + Math.floor((Math.random() * (max - min)))});
    fetch("https://hackaton-1d230-default-rtdb.europe-west1.firebasedatabase.app//charities/"+random+".json")
      .then((resp) => resp.json())
      .then((data) => setCharity({charity : data}))
  };


  return (
        <>
=======
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
>>>>>>> 2755577ec34ef7521b462aa0698ec2a61f8c2380


    return (
        <>
            <div>
<<<<<<< HEAD
                <button onClick={(event) => handleCharity(event)}>Click me</button>
=======
                <button onClick={()=>handleClick()}>GO</button>
>>>>>>> 2755577ec34ef7521b462aa0698ec2a61f8c2380
                {random}
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
                            
<<<<<<< HEAD
                        </>
                }
          </>
  )
}

export default GetACharity;




/*import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';*/




/*class GetACharity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      charity: null,
      random:null
    };
  }

  min = 0;
  max = 19;

  handleClick = () => {
    this.setState({random: this.min + Math.floor((Math.random() * (this.max - this.min)))});
    fetch("https://hackaton-1d230-default-rtdb.europe-west1.firebasedatabase.app//charities/"+this.state.random+".json")
      .then((resp) => resp.json())
      .then((data) => this.setState({ charity: data }))
  };



  render() {

    return (
        <>

        <div>
            <button onClick={this.handleClick}>Click me</button>
            {this.state.random}
        </div>


            {
              this.state.charity != null &&
                <>

    
                  <Card>
                    <CardActionArea>
                      <CardMedia
                          image={this.state.charity.image}
                          title="Image of charity"
                          />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <h1>Test</h1>
                      </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                           {this.state.charity.description}
                          </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                      <Button size="small" color="primary">
                          {this.state.charity.url}
                      </Button>
                  </CardActions>
                  </Card>
                    
                </>
            }
=======
        </>
    }
            </div>
>>>>>>> 2755577ec34ef7521b462aa0698ec2a61f8c2380
        </>
    )
}

export default GetACharity;