import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { Homepage } from '@app/shared/interfaces';
import { ApiService } from '@app/core/http';
import { AuthService } from '@app/core/auth';
import { NotificationService, ComparisonService, ProfileService } from '@app/core/services';

@Component({
    selector: 'app-home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
    homepage: Homepage;

    isLoaded: boolean = false;

    constructor(
        private apiService: ApiService,
        private authService: AuthService,
        private comparisonService: ComparisonService,
        private notificationService: NotificationService,
        private profileService: ProfileService,
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.apiService.getHomepage().subscribe((res: Homepage) => {
            this.homepage = res;
            this.homepage.profile.technologies = res.profile.technologies.sort(this.comparisonService.profileTechnologies);

            this.profileService.setActiveProfile(this.homepage.profile);
            this.titleService.setTitle(`${this.homepage.profile.name} Blog & Portfolio | Matthew Maxwell`);

            this.isLoaded = true;
        }, (error: HttpErrorResponse) => {
            this.notificationService.createNotification(error.error.message);
        });
    }
}
