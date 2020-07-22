import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import {ChemicalCompoundController} from "./controllers/ChemicalCompoundController";
import { createConnection } from "typeorm";

const app: any = createExpressServer({
  controllers: [ChemicalCompoundController]
});

createConnection().then(() => {
  app.listen(3000, () => { 
    console.log("Example app listening on http://localhost:3000");
  });
});
