const FilterGroup = ({ minRate, handleFilter, rates }) => {
    return (
        <ul className="align_center movie_filter">
            {
                rates && rates.map((rate) => (
                    <li
                        key={rate}
                        className={minRate === rate ? 'movie_filter_item active' : 'movie_filter_item'}
                        onClick={() => handleFilter(rate)}
                    >
                        {rate}+ Star
                    </li>
                ))
            }
        </ul>
    );
}

export default FilterGroup;