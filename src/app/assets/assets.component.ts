import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  album: any = [];
  constructor(private _lightbox: Lightbox) {

    this.album.push(
      {
        'src': 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
        'caption': 'Imag1',
        'thumb': 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg'
      });
    this.album.push(
      {
        'src': 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
        'caption': 'Imag1',
        'thumb': 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg'
      });
    this.album.push(
      {
        'src': 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
        'caption': 'Imag1',
        'thumb': 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg'
      });
  }
  open(index: number): void {
    this._lightbox.open(this.album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  themes = [
    {
      wallpaper: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=photography-of-person-walking-on-road-1236701.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=yellow-cosmos-flower-close-up-photography-1212487.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?cs=srgb&dl=bird-s-eye-photography-of-mountain-1624496.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?cs=srgb&dl=forced-perspective-photography-of-cars-running-on-road-below-799443.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?cs=srgb&dl=silhouette-of-trees-during-sunset-1723637.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=photography-of-person-walking-on-road-1236701.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=yellow-cosmos-flower-close-up-photography-1212487.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?cs=srgb&dl=bird-s-eye-photography-of-mountain-1624496.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?cs=srgb&dl=forced-perspective-photography-of-cars-running-on-road-below-799443.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?cs=srgb&dl=silhouette-of-trees-during-sunset-1723637.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=photography-of-person-walking-on-road-1236701.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=yellow-cosmos-flower-close-up-photography-1212487.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?cs=srgb&dl=bird-s-eye-photography-of-mountain-1624496.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?cs=srgb&dl=forced-perspective-photography-of-cars-running-on-road-below-799443.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?cs=srgb&dl=silhouette-of-trees-during-sunset-1723637.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=photography-of-person-walking-on-road-1236701.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=yellow-cosmos-flower-close-up-photography-1212487.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?cs=srgb&dl=bird-s-eye-photography-of-mountain-1624496.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?cs=srgb&dl=forced-perspective-photography-of-cars-running-on-road-below-799443.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?cs=srgb&dl=silhouette-of-trees-during-sunset-1723637.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=landscape-photography-of-snowy-mountain-1366919.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=photography-of-person-walking-on-road-1236701.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=yellow-cosmos-flower-close-up-photography-1212487.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?cs=srgb&dl=bird-s-eye-photography-of-mountain-1624496.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?cs=srgb&dl=forced-perspective-photography-of-cars-running-on-road-below-799443.jpg&fm=jpg',
    },
    {
      wallpaper: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?cs=srgb&dl=silhouette-of-trees-during-sunset-1723637.jpg&fm=jpg',
    },

  ]

  ngOnInit(): void {
  }

}
