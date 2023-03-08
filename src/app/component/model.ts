export interface Data{
    id : string;
    name : string;
    desc : string;
    image : File;
    genre_movie : Array<Genre>
}

export interface Genre{
    id:string;
    name_genre:string
}
