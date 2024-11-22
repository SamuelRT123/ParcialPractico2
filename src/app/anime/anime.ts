export class Anime {
  id: number;
  name: string;
  description: string;
  Rating: string;
  episode: number;
  categorie: string;
  studio: string;
  img: string;
  SeasonName: Array<string> =[];
  SeasonChapters:Array<string> =[];
  
  constructor(
    id: number,
    name: string,
    description: string,
    Rating: string,
    episode: number,
    categorie: string,
    studio: string,
    img: string,
    seasonName: Array<string>,
    seasonChapters:Array<string>
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Rating = Rating,
    this.episode = episode;
    this.categorie= categorie,
    this.studio= studio,
    this.img = img;
  this.SeasonName= seasonName;
  this.SeasonChapters=seasonChapters;
  }
 }
