import { useState } from "react";
import { Button, ButtonLink } from "~/components/button";

const filters = ["All", "Blogs", "Newsletters", "Talks & Podcasts"];

const PostsPageHeader = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="w-full max-w-[1139px] fixed top-12 bg-primary z-10 pb-4  mx-auto mb-8">
      <div className="text-white text-2xl font-extrabold mb-4">
        Posts
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-start">
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`h-10 px-5 rounded-full border 
              ${activeFilter === filter
                ? "border-red-500 text-accent font-bold"
                : "border-white text-white font-normal"
              }`}
          >
            {filter}
          </Button>
        ))}

        <ButtonLink
          className="h-10 px-6 bg-accent text-white font-semibold rounded-full ml-auto"
          to={"new"}
        >
          Add Post
        </ButtonLink>
      </div>
    </div>
  );
};

export default PostsPageHeader;
