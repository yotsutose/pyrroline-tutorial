import { IsNotEmpty } from "class-validator";

export class ChemicalCompound {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public class: string;

  @IsNotEmpty()
  public count: number;
}