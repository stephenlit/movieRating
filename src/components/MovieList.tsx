interface MovieListProps {
    children: React.ReactNode;
}

function MovieList({ children }: MovieListProps) {
    return <ul className='search-results'>{children}</ul>;
}

export default MovieList;
