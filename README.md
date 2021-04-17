# adv-stories

A very simple component that creates a slide-show much like the Instagram Stories.

## Getting Started

### Installing and Importing

Install the package by command:

```sh
    npm install adv-stories --save
```

Import the module

```ts
import { AdvStoriesModule } from "adv-stories";

@NgModule({
    imports: [
        ...
        AdvStoriesModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Using 

```html
    <adv-stories [stories]="stories"></adv-stories>
```


### Options 

You can set options as follows:

```html
    <!-- example for pt-BR money -->
    <input currencyMask [(ngModel)]="value" [options]="{ prefix: 'R$ ', thousands: '.', decimal: ',' }"/>
```

```ts
    stories =[
        {url:'assets/stories/01.jpg', duration: '3s'},
        {url:'assets/stories/02.jpg', duration: '3s'},
        {url:'assets/stories/03.jpg', duration: '3s'},
        {url:'assets/stories/01.jpg', duration: '3s'},
        {url:'assets/stories/02.jpg', duration: '3s'},
        {url:'assets/stories/03.jpg', duration: '3s'},
    ]
```

## Questions? Open a Issue!