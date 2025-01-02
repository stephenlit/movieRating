export type MovieData = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
};

export type WatchedMovieData = MovieData & {
    runtime: number;
    imdbRating: number;
    userRating: number;
}

