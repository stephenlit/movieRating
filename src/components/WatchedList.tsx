//================= import types ============
import { WatchedMovieData } from '../types/types';

type WatchedListProps = {
    tempWatchedData: WatchedMovieData[];
};


function WatchedList({ tempWatchedData }: WatchedListProps) {


    console.log(tempWatchedData);
    return (
        <div className="watched-list">
            <h2>Watched List</h2>
        </div>
    );
}

export default WatchedList;