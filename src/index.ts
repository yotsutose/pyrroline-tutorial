import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {ChemicalCompoundController} from "./controllers/ChemicalCompoundController";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [ChemicalCompoundController] // we specify controllers we want to use
});

// run express application on port 3000

// app.listen(3000);
app.listen(3000,
  
() => { console.log("Example app listening on http://localhost:3000"); }

);