export const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div className="">
                <img src="./search-icon.svg" alt="search" />
                <input
                    type="text"
                    placeholder="Search through thousands of movies"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    );
};
