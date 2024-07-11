export class Actor
{
    id:number;
    name:string;
    movieName:string;

    constructor(id:number=0,name:string=" ",movieName:string="")
    {
        this.id=id;
        this.name=name;
       this.movieName=movieName;

    }
}