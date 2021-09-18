import {useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Sports.css';

function Covid() {
    const [Covid,setCovid] = useState([]);
    const website= process.env.REACT_APP_COVID;
    const key= process.env.REACT_APP_KEY;
    const host= process.env.REACT_APP_SPORTS_HOST;
    const sdk= process.env.REACT_APP_SPORTS_SDK;

    useEffect(()=>{fetch(website, {
        "method": "GET",
        "headers": {
          "x-bingapis-sdk": sdk,
          "x-rapidapi-key": key,
          "x-rapidapi-host": host,
        }
      })
      .then(response=>response.json()).then(data=>{
       
       setCovid(data.value);
      }
      )
      .catch(err => {
        console.error(err);
      });
      },[])
    return (
        <div>
        <h1>Covid</h1>    
       <div className="News">
          {Covid.length >0 && Covid.map((Covid)=> <Covid1 key={Covid.id}{...Covid}/>)}
       </div>
        </div>
    )
}

function Covid1(data){
  var a="null";
  if(data.image){
      a= data.image.thumbnail.contentUrl;
  }
  else{
    a= "null";
  }
  return(
    <>
    <Card className="root">
        <CardActionArea>
          <CardMedia
            className="media"
            image= {a}
            title={data.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
            {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
  }

export default Covid;
