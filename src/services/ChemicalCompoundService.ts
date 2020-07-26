import { ChemicalCompound } from "../models/ChemicalCompound";
import { getRepository, Repository } from "typeorm";

export class ChemicalCompoundService {
  private chemicalCompoundRepository: Repository<ChemicalCompound>;

  constructor() {
    this.chemicalCompoundRepository = getRepository(ChemicalCompound);
  }

  public find(): Promise<ChemicalCompound[]> {
    return this.chemicalCompoundRepository.find();
  }

  public findOneById(chemicalCompoundId: number): Promise<ChemicalCompound | undefined> {
    return this.chemicalCompoundRepository.findOne(chemicalCompoundId);
  }

  public save(nextChemicalCompound: ChemicalCompound): Promise<ChemicalCompound>{
    return this.chemicalCompoundRepository.save(nextChemicalCompound);
  }
}