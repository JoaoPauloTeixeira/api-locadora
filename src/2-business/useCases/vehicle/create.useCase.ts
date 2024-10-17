import 'reflect-metadata';
import Container, { Service } from "typedi";
import { BaseUseCase } from "../base.useCase";
import { v4 } from 'uuid';
import { InputCreateVehicleDto } from '../../dto/driver/vehicle.dto';
import { IVehicleRepository } from '../../repositories/vehicle.repository';
import { VehicleRepository } from '../../../4-framework/repositories/vehicle.repository';

@Service()
class CreateVehicleUseCase extends BaseUseCase<InputCreateVehicleDto, void> {

  private repo: IVehicleRepository;

  constructor() {
    super();
    this.repo = Container.get(VehicleRepository);
  }

  async run(input: InputCreateVehicleDto): Promise<void> {
    try {
      await this.repo.insert({ ...input, id: v4(), active: true })
    } catch (error) {
      throw error
    }
  }
}

export default CreateVehicleUseCase;