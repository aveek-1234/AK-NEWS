
import {useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Sports.css';
import Loading from './Loading';

function Sports() {
    const [sports,setsports] = useState([]);
    const [Load, setLoad] = useState(false);
    const website= process.env.REACT_APP_SPORTS;
    const key= process.env.REACT_APP_KEY;
    const host= process.env.REACT_APP_SPORTS_HOST;
    const sdk= process.env.REACT_APP_SPORTS_SDK;

    useEffect(async()=>{
      let response = await fetch(website, {
        "method": "GET",
        "headers": {
          "x-bingapis-sdk": sdk,
          "x-rapidapi-key": key,
          "x-rapidapi-host": host,
        }
      })
      setLoad(true);
        let data = await response.json();
        setsports(data.value);
      },[])
    return (
        <div>
        <h1>Sports</h1>    
       <div className="News">
          {Load?(sports.length >0 && sports.map((sports)=> <Sports1 key={sports.id}{...sports}/>)):(<Loading />)}
       </div>
        </div>
    )
}

function Sports1(data){
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

export default Sports
