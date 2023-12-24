import { v4 as uuidv4} from "uuid"; // Libreria de JS para nombres unicos
import { remove, size } from "lodash"; //Libreria de JS para almacenamiento en el Storage
import { TWEETS } from "../utils/constants";

export function saveTweetApi(tweet,username) {
const tweets = getTweetsApi();

if (size(tweets) === 0) {   
    const tweetTemp = [
    {
    id: uuidv4(),
    tweet,
    username,
    createdAt: new Date(),
    },
];
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
} else {
    tweets.push({
id: uuidv4(),
tweet,
username,
createdAt: new Date(),
    });
    localStorage.setItem(TWEETS, JSON.stringify(tweets));//método de JS para convertir objeto/valor en una cadena de texto
}
}

export function getTweetsApi () {
    const tweets = localStorage.getItem(TWEETS);
    if (tweets) {
        return JSON.parse(tweets);
    }
    return [];
}

export function deleteTweetApi(idTweet) {
    const tweet = getTweetsApi ();
    remove(tweet, function(tweet){
        return tweet.id === idTweet;

    });

    localStorage.setItem(TWEETS, JSON.stringify(tweet))
}

