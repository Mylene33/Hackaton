import React, {useState} from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const getACharity = () => {

  const [charity, setCharity] = useState(null); 
  const [random, setRandom] = useState(null); 

  const min = 0;
  const max = 19;

  const handleClick=()=>{
    setRandom({random: min + Math.floor((Math.random() * (max - min)))});
    fetch("https://hackaton-1d230-default-rtdb.europe-west1.firebasedatabase.app//charities/"+random+".json")
      .then((resp) => resp.json())
      .then((data) => setCharity({ charity: data }))
  };


  return (
    <div>
        <>

            <div>
                <button onClick={handleClick}>Click me</button>
                {random}
            </div>


                {
                  charity != null &&
                    <>
                          <Card>
                            <CardActionArea>
                              <CardMedia
                                  image={charity.image}
                                  title="Image of charity"
                                  />

                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <h1>Test</h1>
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
</>
      
    </div>
  )
}

export default getACharity




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
        </>
    )
  }

}


export default GetACharity;*/