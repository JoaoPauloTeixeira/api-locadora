import { Table, Model, Column, DataType, HasOne } from "sequelize-typescript";
import { Driver } from "./driver";
import { NonAttribute } from "sequelize";

@Table({
  timestamps: false,
  tableName: "Vehicle",
})
export class Vehicle extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  licensePlate!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  color!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  brand!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true
  })
  available!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    onUpdate: 'CASCADE'
  })
  active!: boolean;
}