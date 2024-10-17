import { Application } from 'express';
import Container, { Service } from 'typedi';

import DriverRoutes from './driver/driver.routes';
import VehicleRoutes from './vehicle/vehicle.routes';

@Service()
class RestRouters {
  server: Application;
  driverRoutes: DriverRoutes;
  vehicleRoutes: VehicleRoutes;

  constructor(server: Application) {
    this.server = server;
    this.driverRoutes = Container.get(DriverRoutes);
    this.vehicleRoutes = Container.get(VehicleRoutes);
  }

  initialize() {
    this.server.use('/driver', this.driverRoutes.initialize());
    this.server.use('/vehicle', this.vehicleRoutes.initialize());
  }
}

export default RestRouters;