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


  @Post("/add")
  public post(@Body() NextChemicalCompound: ChemicalCompound): ChemicalCompound {
    NextChemicalCompound.count -= 5;
    return NextChemicalCompound;
  }

}