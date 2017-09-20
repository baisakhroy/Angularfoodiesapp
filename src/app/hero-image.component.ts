import { Component } from '@angular/core';


@Component({
    selector:'hero-image',
    template:`
    <img class="hero-image" src="../../images/heroimage.jpg" alt="Your Logo">
    `,
    styles:[`
    img.hero-image{
        height: 400px;
         width: 100%;
    }
    `]
})



export class HeroImageComponent{
}