import { ApiProperty } from '@nestjs/swagger';

export class QueryGetList {
  @ApiProperty()
  _limit: number;

  @ApiProperty()
  _page: number;
}
