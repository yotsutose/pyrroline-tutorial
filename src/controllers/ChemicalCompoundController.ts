import { JsonController, Param, Body, Get, Post } from "routing-controllers";
import { chemicalCompounds } from "../dummydata/ChemicalCompoundsDummy";
import { ChemicalCompound } from "../models/ChemicalCompound";
import { ChemicalCompoundService } from "../services/ChemicalCompoundService";

@JsonController("/chemicalCompounds")
export class ChemicalCompoundController {
  private chemicalCompoundService: ChemicalCompoundService;

  constructor() {
    this.chemicalCompoundService = new ChemicalCompoundService();
  }

  @Get()
  public get(): Promise<ChemicalCompound[]> {
    return this.chemicalCompoundService.find();
  }

  @Get("/:id")
  public getOneById(@Param("id") id: number): Promise<ChemicalCompound[]> {
    return this.chemicalCompoundService.findOneById(id);
  }

  @Post()
  public post(@Body() nextChemicalCompound: ChemicalCompound): Promise<ChemicalCompound> {
    return this.chemicalCompoundService.save(nextChemicalCompound);
  }

}