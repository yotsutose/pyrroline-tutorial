import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import {ChemicalCompoundController} from "./controllers/ChemicalCompoundController";
import { createConnection } from "typeorm";

export default async function main(): Promise<void> {
  const app: any = createExpressServer({
    controllers: [ChemicalCompoundController]
  });
  await createConnection();
  
  app.listen(3000, () => { 
    console.log("Example app listening on http://localhost:3000");
  });
}

void main();