import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from "@angular/core";
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [ CommonModule, TranslateModule ],
    template: `
            <section class="relative w-full h-screen hero-section">
                <div class="absolute inset-0">
                    <img [src]="imageUrl" alt="Hero Image" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div class="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 class="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 text-brand-seconed-color">
                        {{ title }}
                    </h1>
                    <p *ngIf="description" class="text-lg sm:text-xl md:text-2xl">
                        {{ description }}            
                    </p>
                </div>
        </section>
    `,
    styles: [
        `
            h1 {
                line-height: 60px;
            }

        `
    ]
})

export class HeroSectionComponent {
    @Input({ required: true }) imageUrl!: string;
    @Input({ required: true }) title!: string;
    @Input() description?: string;
 }