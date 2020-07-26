import { IsString, IsNumber } from "class-validator";
import {Entity, Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ChemicalCompound {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsString()
  @Column()
  public name: string;

  @IsString()
  @Column()
  public class: string;

  @IsNumber()
  @Column()
  public count: number;
}