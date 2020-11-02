import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null); //useState is used to set the new value to a existing one uppon calling of the condition

    const [{ user }, dispatch] = useDataLayerValue(); //we are using dispatch to get or put something in datalayer



    //Run the code based on a given condition
    useEffect(() => {
      const hash = getTokenFromUrl();  //the token that we grabbed at spotify.js
      window.location.hash="";  //this removes the token from the URL for security reasons
      const _token = hash.access_token;

      if(_token){

        dispatch ({
          type:"SET_TOKEN",
          token:_token,
        })


        setToken(_token);
        spotify.setAccessToken(_token);   //giving the access token to the spotify api services so that it can grab the profile

        spotify.getMe().then((user) =>{    //here we get the user details from the original spotify login credentials
            
            dispatch({                           //This the dispatch function that we shoot data in datalayer
              type: 'SET_USER',       //now as soon as the user enters the getme func will take the data and shoot it
              user: user,             // the user into the datalayer
            });
        });
      
        spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      spotify.getUserPlaylists().then((playlists) => {     //To get the playlist via API
        dispatch({
          type: "SET_PLAYLISTS",                           //Dispatching it to the datalayer
          playlists,
        });
      });

      spotify.getPlaylist('37i9dQZF1DXd8cOUiye1o2').then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

    }
  }, [token, dispatch]);

    console.log("hi the user details", user);
    console.log("this is the token", token);  //this is for debugging


  return (
    <div className="App">
      {
        token ? (                   //This is a ternary condition that checks if we have a 
          <Player spotify = {spotify}/>                // token i.e user auth we will render into the Player page   
        ) : (
          <Login />                  // else we will render into the login page again and start the process
        )
      }

    


    </div>
  );
}

export default App;
