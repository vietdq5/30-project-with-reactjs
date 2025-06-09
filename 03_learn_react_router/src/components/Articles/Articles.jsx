import { useSearchParams } from "react-router-dom";

const Articles = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const handleSort = () => {
        setSearchParams({
            sort: searchParams.get("sort") === "asc" ? "desc" : "asc",
            page: searchParams.get("page") || 1,
        });
    }

    return (
        <div>
            <h1>Articles</h1>
            <p>This is the articles page {searchParams.get("sort")} and {searchParams.get("page")}.</p>
            <button onClick={handleSort}>Sort</button>
        </div>
    );
}

export default Articles;