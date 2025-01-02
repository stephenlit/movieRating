//================= import types ============

type WatchedListProps = {
    children: React.ReactNode;
};

function WatchedList({ children }: WatchedListProps) {
    return (
        <ul className='search-results'>
            <li className='watched-heading'>
                <p>Movies you watched</p>
                <div>🔢movies ⭐8.8 🌠8.5 ⌛148 min</div>
            </li>
            {children}
        </ul>
    );
}

export default WatchedList;
