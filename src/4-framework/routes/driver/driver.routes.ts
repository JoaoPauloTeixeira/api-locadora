import Container, { Service } from 'typedi';
import { NextFunction, Request, Response, Router } from 'express';
import ExpressServer from '../../../server';
import { GetDriverController } from '../../../3-presentation/controller/driver/get.controller';
import { CreateDriverController } from '../../../3-presentation/controller/driver/create.controller';
import { createDriverValidator, inactivateDriverValidator, updateDriverValidator } from '../../middlewares/driver.validator.middleware';
import { GetDriverByIdController } from '../../../3-presentation/controller/driver/getById.controller';
import { UpdateDriverController } from '../../../3-presentation/controller/driver/update.controller';
import { Output } from '../../../2-business/dto/output';
import { InactivateDriverController } from '../../../3-presentation/controller/driver/inactivate.controller';

@Service()
class DriverRoutes {
  router: Router;

  constructor(
    public getDriverController: GetDriverController,
    public getDriverByIdController: GetDriverByIdController,
    public createDriverController: CreateDriverController,
    public updateDriverController: UpdateDriverController,
    public inactivateDriverController: InactivateDriverController
  ) {
    this.router = Container.get(ExpressServer).getRouter();
  }

  initialize() {
    this.router.get('/', async (req: Request, res: Response) => {
      res.status(200).json(await this.getDriverController.run(req.query));
    });

    this.router.get('/:id', async (req: Request, res: Response) => {
      res.status(200).json(await this.getDriverByIdController.run(req.params.id));
    });

    this.router.post(
      '/',
      createDriverValidator as any,
      async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        res.status(200).json(await this.createDriverController.run(req.body));
      },
    );

    this.router.patch(
      '/:id',
      updateDriverValidator as any,
      async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const { id } = req.params
        res.status(200).json(await this.updateDriverController.run({ ...req.body, id }));
      },
    );

    this.router.post(
      '/inactivate',
      inactivateDriverValidator as any,
      async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        res.status(200).json(await this.inactivateDriverController.run(req.body));
      },
    );

    return this.router;
  }
}

export default DriverRoutes;
