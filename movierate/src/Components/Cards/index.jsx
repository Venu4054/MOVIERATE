import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import "./movie.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display:"flex"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    display: 'inline',
    backgroundColor:"#B6C2E8",
    '& > *': {
      margin: theme.spacing(6),
      width: theme.spacing(10),
      height: theme.spacing(16),
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [poster, setPoster] = useState();
    const [name, setName] = useState();
    const [rating, setRating] = useState();
    const [summary, setSummary] = useState();
    const [contentList,setContentList]=useState( [{name:"RRR",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH",
    rating: 8.8,
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S.S. Rajamouli, and produced by D.V.V. Danayya of DVV Entertainments."}])

  return (
    <div  >
      
      <br/><br/>
        <TextField
          required
          id="outlined-required"
          label="Enter Movie Name"
          value={name}
          onChange={(event)=>setName(event.target.value)}
          variant="outlined"
        /><br/><br/>
        <TextField
          required
          id="outlined-required"
          label="Enter Movie Poster Url"
          value={poster}
          onChange={(event)=>setPoster(event.target.value)}
          variant="outlined"
        /><br/><br/>
        <TextField
          required
          id="outlined-required"
          label="Enter Movie rating"
          value={rating}
          onChange={(event)=>setRating(event.target.value)}
          variant="outlined"
        /><br/><br/>
        <TextField
          required
          id="outlined-required"
          label="Enter Movie Summary"
          value={summary}
          onChange={(event)=>setSummary(event.target.value)}
          variant="outlined"
        /><br/><br/>
         <Button variant="contained" 
         color="primary"
         onClick={()=>setContentList([...contentList,{name,poster,rating,summary}])}
         >
        Add Movie
      </Button><br/><br/>
     
        {contentList.map((movie)=>(
         
   <MovieBox 
  className={classes.card}
   poster={movie.poster}
   name={movie.name}
   rating={movie.rating}
   summary={movie.summary}
   /> 
  
  
   ))}
    </div >
  );
}



function MovieBox({name, rating, summary, poster}) {
  const [like, setLike ] = useState(0); 
  const [dislike, setDislike] = useState(0);
  const [show, setShow ] = useState(true); 
  const styles={ color:rating >=8.5 ? "green" : "red" };
  // const  onClick=() => setCount(count + 1);
  const Like = {
    color: 'primary',
    children: <ThumbUpAltOutlinedIcon />,
  }

  const disLike = {
    color: 'secondary',
    children: <ThumbDownAltOutlined />,
  }
  const summaryStyles={display:show?"block":"none"};

    return (
        <Paper className='movie-container'>
            <img
                src={poster}
                alt={name}
                className="movie-poster"
            />
            <div className="movie-specs">
                <h3 className="movie-Name" >{name}</h3>
                <p className="movie-rating" style={styles}>⭐{rating}</p>
            </div>
            <button onClick={() => setShow(!show)}>View Summary</button>
            <p className="movie-summary" style={summaryStyles}>{summary}</p>
            <IconButton 
             onClick={() => setLike(like + 1)}
             
            >
            <Badge  badgeContent={like} {...Like}/>
            </IconButton>
            <IconButton 
             onClick={() => setDislike(dislike + 1)}
             
            >
            <Badge  badgeContent={dislike} {...disLike}/>
            </IconButton>
        </Paper>
    )
}