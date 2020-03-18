interface GameInterface {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

export class Game implements GameInterface {
  public id: number;
  public name: string;
  public price: number;
  public score: number;
  public image: string;

    constructor({
      id,
      name,
      price,
      score,
      image
    }: {
      id?: number,
      name?: string,
      price?: number,
      score?: number,
      image?: string,
    }) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.score = score;
      this.image = image;
    }
}
