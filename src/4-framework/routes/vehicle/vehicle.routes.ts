import Container, { Service } from 'typedi';
import { NextFunction, Request, Response, Router } from 'express';
import ExpressServer from '../../../server';
import { CreateVehicleController } from '../../../3-presentation/controller/vehicle/create.controller';
import { GetVehicleController } from '../../../3-presentation/controller/vehicle/get.controller';
import { GetVehicleByIdController } from '../../../3-presentation/controller/vehicle/getById.controller';
import { UpdateVehicleController } from '../../../3-presentation/controller/vehicle/update.controller';

@Service()
class VehicleRoutes {
  router: Router;

  constructor(
    public createVehicleController: CreateVehicleController,
    public getVehicleController: GetVehicleController,
    public getVehicleByIdController: GetVehicleByIdController,
    public updateVehicleController: UpdateVehicleController
  ) {
    this.router = Container.get(ExpressServer).getRouter();
  }

  initialize() {
    this.router.get('/', async (req: Request, res: Response) => {
      res.status(200).json(await this.getVehicleController.run(req.query));
    });

    this.router.get('/:id', async (req: Request, res: Response) => {
      res.status(200).json(await this.getVehicleByIdController.run(req.params.id));
    });

    this.router.post(
      '/',
      async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        res.status(200).json(await this.createVehicleController.run(req.body));
      },
    );

    this.router.patch(
      '/:id',
      async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const { id } = req.params
        res.status(200).json(await this.updateVehicleController.run({ ...req.body, id }));
      },
    );

    return this.router;
  }
}

export default VehicleRoutes;
