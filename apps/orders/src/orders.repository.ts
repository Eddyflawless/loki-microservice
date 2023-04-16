import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Order } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class OrdersRepository extends AbstractRepository<Order> {
  constructor(@InjectModel(Order.name) orderModel: Model<Order>) {
    super(orderModel);
  }
}
