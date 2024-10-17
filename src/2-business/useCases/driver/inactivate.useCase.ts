import 'reflect-metadata';
import Container, { Inject, Service } from "typedi";
import { BaseUseCase } from "../base.useCase";
import { InputInactivateDriverDto } from '../../dto/driver/driver.dto';
import { IDriverRepository } from '../../repositories/driver.repository';
import { DriverRepository } from '../../../4-framework/repositories/driver.repository';
import { v4 } from 'uuid';
import { ISysParamsRepository } from '../../repositories/sysParams.repository';
import { SysParamsRepository } from '../../../4-framework/repositories/sysParams.repository';

@Service()
class InactivateDriverUseCase extends BaseUseCase<InputInactivateDriverDto, void> {

  private driverRepo: IDriverRepository;
  private sysParams: ISysParamsRepository;

  constructor() {
    super();
    this.driverRepo = Container.get(DriverRepository);
    this.sysParams = Container.get(SysParamsRepository);
  }

  async run(input: InputInactivateDriverDto): Promise<void> {
    try {
      await this.driverRepo.update({ active: false, id: input.driver.id })

      this.sysParams.insert({ ...input, id: v4() })
    } catch (error) {
      throw error
    }
  }
}

export default InactivateDriverUseCase;