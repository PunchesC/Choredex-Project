export {default as app} from "./routes/choredex";
import express from 'express';
import cors from 'cors';
import pokemonRoutes from './routes/choredex';

// creates an Express application - allows us to create and and use APIs
const app = express();

// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());

// Allow JSON request bodies for PUT and POST
app.use(express.json());

//use the the router object (and all it's defined routes)
app.use("/choredex", pokemonRoutes);

// define the port
const port = 3000;

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
