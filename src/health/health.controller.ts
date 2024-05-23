import { Controller, Get, HttpStatus } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  @Get()
  @HealthCheck()
  async health() {
    return {
      status: 'ok',
    };
  }
}
