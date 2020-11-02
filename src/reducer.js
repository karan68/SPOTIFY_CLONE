
export const intialState = {
    user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
    // token: 'BQAW3Fmh1miCv_PpnZztKtK22EdYlUMgGWX7psMARhJF_uZJD2whC5BnX6WJ9si5CST_MA_koK7p10cGY1k2_n9saoFc16sbNF6YbAA1HUeoTkf-pqbmcUdES2HQ7H0Sqb-aJJXJjT3-JOzR4uSaagLgVWDA01HArve3XGpFN1ko-nNG',
};


const reducer = (state, action) =>{    //state is the initial value of the app and the action is what it would be next
     console.log(action);

// Action -> type, [payload]

     switch(action.type){
         case "SET_USER" :
             return{
                 ...state, // this is the listener to the dispatch in App.js
                 user:action.user     //here we set the user as the person who logged in
             };

             case "SET_TOKEN" : 
             
                 return{
                 ...state,  
                 token: action.token
             }

             case 'SET_PLAYLISTS' :
                 return{
                        ...state,
                        playlists:action.playlists,
                 };

                 case "SET_ITEM":
                    return {
                      ...state,
                      item: action.item,
                    };   
             

                    case "SET_TOP_ARTISTS":
                        return {
                          ...state,
                          top_artists: action.top_artists,
                        };
                    
                        

                    




                        case "SET_SPOTIFY":
                            return {
                          ...state,
                       spotify: action.spotify,
                           };


                           case "SET_PLAYING":
                            return {
                              ...state,
                              playing: action.playing,
                            };


                case 'SET_DISCOVER_WEEKLY':
                    return{
                                ...state,
                                discover_weekly: action.discover_weekly,
                    };
             default:
                 return state;
     }
};

export default reducer;