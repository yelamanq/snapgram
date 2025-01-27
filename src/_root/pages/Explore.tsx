import GridPostList from "@/components/shared/GridPostList";
import SearchResults from "@/components/shared/SearchResults";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Explore = () => {
  const [searchValue, setSearchValue] = useState("");

  // const posts = [];

  // const shouldShowSearchResults = searchValue !== "";
  // const shouldShowPosts =
  //   !searchValue && posts.pages.every((item) => item.documents.length > 0);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>

        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img
            src="/assets/icons/search.svg"
            alt="search"
            width={24}
            height={24}
          />
          <Input
            className="explore-search"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold ">Popular Today</h3>

        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-poiner">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            alt="filter"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {shouldShowSearchResults ? (
          <SearchResults />
        ) : shouldShowPosts ? (
          <p className="text-light-4 text-center w-full mt-10">End of posts</p>
        ) : (
          posts.pages.map((item, index) => {
            <GridPostList key={`post-${index}`} post={item.documents} />;
          })
        )}
      </div> */}
    </div>
  );
};

export default Explore;
