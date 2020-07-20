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

  @Post()
  public post(@Body() nextChemicalCompound: ChemicalCompound): ChemicalCompound {
    nextChemicalCompound.count -= 5;
    console.log(nextChemicalCompound);
    return nextChemicalCompound;
  }

}