import { BadRequestException, Controller, Get, HttpCode, Param, Put, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '@api/core/auth/jwt/jwt-auth.guard';

import { Profile } from './profile.entity';
import { ProfileStatus } from './profile-status.entity';
import { ProfileTechnology } from './profile-technology.entity';
import { ProfileService } from './profile.service';
import { ProfilesWereNotFoundException, ProfileWasNotFoundException, ProfileStatusesWereNotFoundException, ProfileTechnologiesWereNotFoundException, ProfileCouldNotBeUpdatedException } from './profile.exception';

@Controller('profiles')
export class ProfileController {
    constructor(
        private readonly profileService: ProfileService
    ) { }

    @Get('')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async getProfiles(@Req() request: Request): Promise<Profile[]> {
        const profiles = await this.profileService.getProfiles();
        if(profiles.length == 0) throw new ProfilesWereNotFoundException();

        return profiles;
    }

    @Get('statuses')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async getProfileStatuses(@Req() request: Request): Promise<ProfileStatus[]> {
        const statuses = await this.profileService.getStatuses();
        if(statuses.length === 0) throw new ProfileStatusesWereNotFoundException();

        return statuses;
    }

    @Get(':id/technologies')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async getProfileTechnologies(@Param('id') id: number, @Req() request: Request): Promise<ProfileTechnology[]> {
        const technologies = await this.profileService.getProfileTechnologies(id);
        if(technologies.length === 0) throw new ProfileTechnologiesWereNotFoundException();

        return technologies;
    }

    @Put(':id')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async updateProfile(@Param('id') id: number, @Req() request: Request): Promise<Profile> {
        const profile = await this.profileService.updateProfile(id, request.body);
        if(!profile) throw new ProfileCouldNotBeUpdatedException();

        return profile;
    }

    @Put(':id/activate')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async activateProfile(@Param('id') id: number, @Req() request: Request): Promise<Profile> {
        // CAUTION: This check is required because all rows will be updated
        if(!(await this.profileService.existsInTable(id))) {
            throw new ProfileWasNotFoundException();
        }

        await this.profileService.resetProfileStatuses(id);

        return await this.profileService.getProfile(id);
    }
}
