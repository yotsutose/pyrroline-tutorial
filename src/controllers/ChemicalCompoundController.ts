import { JsonController, Param, Body, Get, Post } from "routing-controllers";
import { chemicalCompounds } from "../dummydata/ChemicalCompoundsDummy";
import { ChemicalCompound } from "../models/ChemicalCompound";

@JsonController("/chemicalCompounds")
export class ChemicalCompoundController {
  @Get()
  public get(): ChemicalCompound[] {
    return chemicalCompounds;
  }

  @Get("/:id")
  public getOneById(@Param("id") id: number): ChemicalCompound {
    return chemicalCompounds[id];
  }

  // ここから追加した

  @Post("/add")
  public post(@Body() NextChemicalCompound: ChemicalCompound): ChemicalCompound {
    // console.log("ok")
    // console.log(NextChemicalCompound.name);

    return NextChemicalCompound;
  }
  
}