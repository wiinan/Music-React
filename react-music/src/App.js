import React,{useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const[songs] = useState([
  {
    title:"Duro Igual Concreto",
    path: "./musica/song1.mp3",
    img: "./img/img1.jpg",
    singer: "RUSHO Remix"
  },{
    title: "777-666",
    path: "./musica/song2.mp3",
    img: "./img/img2.jpg",
    singer:"Slow Sense Remix"
  },{
    title: "Anos Luz",
    path: "./musica/song3.mp3",
    img: "./img/img3.jpg",
    singer:"Slow Sense Remix"
  },{
    title:"Rosto de Deus",
    path: "./musica/song4.mp3",
    img: "./img/img4.jpg",
    singer: "Remix"
  } ,{
    title:"Peter Pan",
    path:"./musica/song5.mp3",
    img:"./img/img5.jpg",
    singer:"Samantha Machado & Groove Delight"
  },{
    title: "Your Love (9Am)",
    path:"./musica/song6.mp3",
    img:"./img/img6.jpg",
    singer:"ATB"
  }
  ])
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex +1>songs.length -1){
        return 0;
      }else{
        return currentSongIndex +1;
      }
    });
  },[currentSongIndex]);

  return (
    <div>
      <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );
}

export default App;
