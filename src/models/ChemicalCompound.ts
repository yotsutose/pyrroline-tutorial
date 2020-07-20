import { IsString, IsNumber } from "class-validator";

export class ChemicalCompound {
  @IsString()
  public name: string;

  @IsString()
  public class: string;

  @IsNumber()
  public count: number;
}