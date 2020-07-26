import { JsonController, Param, Body, Get, Post, HttpCode } from "routing-controllers";
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
  public getOneById(@Param("id") id: number): Promise<ChemicalCompound | undefined> {
    return this.chemicalCompoundService.findOneById(id);
  }

  @HttpCode(201)
  @Post()
  public post(@Body() nextChemicalCompound: ChemicalCompound): Promise<ChemicalCompound> {
    return this.chemicalCompoundService.save(nextChemicalCompound);
  }
}