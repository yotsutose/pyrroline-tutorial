import { ChemicalCompound } from "../models/ChemicalCompound";
import { getRepository, Repository } from "typeorm";

export class ChemicalCompoundService {
  private chemicalCompoundRepository: Repository<ChemicalCompound>;

  constructor() {
    this.chemicalCompoundRepository = getRepository(ChemicalCompound);
  }

  public async find(): Promise<ChemicalCompound[]> {
    return await this.chemicalCompoundRepository.find();
  }

  public async findOneById(chemicalCompoundId: number) {
    return await this.chemicalCompoundRepository.find(
      {id: chemicalCompoundId }
    );
  }

  public async save(nextChemicalCompound: ChemicalCompound) : Promise<ChemicalCompound>{
    const newChemicalCompound = this.chemicalCompoundRepository.create({
      name: nextChemicalCompound.name,
      class: nextChemicalCompound.class,
      count: nextChemicalCompound.count
      // name:"def",
      // class: "fdafa",
      // count: 23
    });
    return await this.chemicalCompoundRepository.save(newChemicalCompound);
  }
}