import React from 'react';
import  './News.css';
import { useState,useEffect } from 'react';
import './Newsdetails';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Newsdetails from './Newsdetails';
import Loading from './Loading';

export default function News() {
 
 const [news,setnews]=useState([]);
 const [load, setLoad]= useState(false);
  const website= process.env.REACT_APP_WEBSITE;
  const key= process.env.REACT_APP_KEY;
  const host= process.env.REACT_APP_HOST;

useEffect(async()=>{
   
    let response= await fetch(website, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
      }
    })
    setLoad(true);
    let data= await response.json();
    setnews(data.value);
}
,[])
 

  return (
    <>
      
      <h1>Breaking News</h1>
       <div className="News">
          {load?(news.length >0 && news.map((news)=> <News1 key={news.id}{...news}/>)):(<Loading />)}
       </div>
    </>
  );
}

function News1(data){
  const [view,setview] = useState(false);
  const  handleclick=()=> {
    setview(true);
}
return(
  <>
  <Card className="root">
      <CardActionArea>
        <CardMedia
          className="media"
          image= {data.image.url}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button className="Details" size="small"  color="primary" onClick={handleclick} >
          See Details
        </Button>
      </CardActions>
    </Card>
    <Newsdetails  view={view} data={data} setview={setview} />
  </>
)

}
