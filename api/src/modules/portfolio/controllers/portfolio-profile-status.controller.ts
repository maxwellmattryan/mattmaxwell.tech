import { PortfolioProfileStatusService } from '../services/portfolio-profile-status.service';
import { Controller, Get, HttpCode, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '@api/core/auth/jwt/jwt-auth.guard';

import { PortfolioProfileStatus } from '../entities/portfolio-profile-status.entity';
import { PortfolioProfileStatusesWereNotFoundException } from '../exceptions/portfolio-profile-status.exception';

@Controller('portfolio/profiles/statuses')
export class PortfolioProfileStatusController {
    constructor(
        private readonly profileStatusService: PortfolioProfileStatusService
    ) { }

    @Get('')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async getProfileStatuses(@Req() request: Request): Promise<PortfolioProfileStatus[]> {
        const statuses = await this.profileStatusService.getStatuses();
        if(statuses.length === 0) throw new PortfolioProfileStatusesWereNotFoundException();

        return statuses;
    }
}