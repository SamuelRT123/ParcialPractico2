import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  totalEpisodios: number=0;
  ratingPromedio:number=0;
  temporadas: Array<string> =[];
  capitulos:Array<string> =[];

  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.getDatos();
    });
  }

  getDatos(): void{
    let sum=0; 
    for (let anime of this.animes){ 
      sum += parseFloat(anime.Rating); 
      this.totalEpisodios += anime.episode; 
    } 
    this.ratingPromedio = parseFloat((sum/ this.animes.length).toFixed(2)); 
  }


  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

}
