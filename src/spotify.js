// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#


export const authEndpoint=
"https://accounts.spotify.com/authorize"; 
// When you click in this

const redirectUri = "http://localhost:3000/";
// it redirects it you here

const clientId = "b1f824e3644848b19d8b0510989941b8";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",                  //This are the features we are going to give to the user

];

export const getTokenFromUrl = () => {
    return window.location.hash   //it finds the token part from the Url  exampple: #accessToken=mysecretkey&name=karan
    .substring(1)      //here we take the ist substring
    .split('&')        // now we split it at & so to part it from name or another thing
    .reduce((inital,item) => {
        let parts= item.split("=");   //here we split it from the = part
        inital[parts[0]] = decodeURIComponent(parts[1])   // here we decode the key
        return inital; // returning the key
    }, {});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;  //We are connecting everything together
