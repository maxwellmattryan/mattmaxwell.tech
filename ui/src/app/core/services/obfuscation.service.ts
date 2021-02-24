import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ObfuscationService {
    private name: string = 'maxwellmattryan';
    private domain: string = 'gmail';
    private extension: string = 'com';

    private funkyChar: string = '-_-';

    constructor() { }

    constructEmail(): string {
        return this.constructEmailWith(this.name, this.domain, this.extension);
    }

    handleEmailClick(event: Event): void {
        this.handleEmailClickWith(event, this.name, this.domain, this.extension);
    }

    constructEmailWith(name: string, domain: string, extension: string = 'com'): string {
        return `${this.uglify(name)}${this.funkyChar}at${this.funkyChar}}${this.uglify(domain)}${this.funkyChar}dot${this.funkyChar}${extension}`;
    }

    handleEmailClickWith(event: Event, name: string, domain: string, extension: string = 'com'): void {
        const mailToUrl = `mailto:${name}@${domain}.${extension}`;
        const elem: HTMLAnchorElement = (<HTMLAnchorElement>event.target);
        elem.href = mailToUrl;

        setTimeout(() => {
            elem.href = `mailto:${this.constructEmailWith(name, domain, extension)}`;
        }, 100);
    }

    private uglify(s: string): string {
        const idx = Math.floor(Math.random() * s.length);
        return s.slice(0, idx) + this.funkyChar + s.slice(idx, s.length);
    }
}
