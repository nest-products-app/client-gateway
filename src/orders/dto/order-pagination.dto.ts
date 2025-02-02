import { PaginationDto } from 'src/common';
import { OrderStatus } from '../enum/order.enum';
import { IsEnum, IsOptional } from 'class-validator';

export class OrderPaginationDto extends PaginationDto {
  @IsEnum(OrderStatus)
  @IsOptional()
  orderStatus: OrderStatus;
}
