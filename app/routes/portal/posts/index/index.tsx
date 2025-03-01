import { LoaderFunction } from "@remix-run/node";
import { FC, useState } from "react";
import PageContainer from "~/components/page-container";
import PostsPageHeader from "./posts-page-header";
import CommunitiesSection from "./communities-section";
import PostCard from "./post-card";
import { Outlet } from "@remix-run/react";



export type PostData = {
  id: number
  image: string;
  altText: string;
  community: string;
  timeAgo: string;
  title: string;
  category: string;
  description: string;
  likes: string;
  comments: number;
};

export const loader: LoaderFunction = async () => {
  return null;
};

const Posts: FC = () => {


  const postDataList: PostData[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i+1,
    image: "/images/community/post.png",
    altText: "Blog Post",
    community: `Udsm Ai Community ${i + 1}`,
    timeAgo: `${i + 1}h ago`,
    title: `Robotics in Africa ${i + 1}`,
    category: `#RoboticsInAfrica${i + 1}`,
    description:
      `The robotics industry is growing rapidly in Africa. This blog post will explore the current trends and future prospects of the industry in the continent. It will also highlight some of the challenges facing the industry and how they can be addressed.`,
    likes: `${(i + 1) * 1000}K`,
    comments: (i + 1) * 100,
  }));


  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    if (expandedPostId === id) {
      setExpandedPostId(null);  
    } else {
      setExpandedPostId(id);  
    }
  };

  return (
    <>
    <Outlet/>
      <PageContainer>
        <PostsPageHeader />
        <div className="flex flex-col sm:flex-row mt-[5rem] justify-between items-start w-full sm:space-x-2 h-[calc(100vh-5rem)]">
          <div className="w-full sm:w-[70%] text-textColor overflow-y-auto h-full pr-2">
          {postDataList.map((postData, index) => (
          <div className="mb-4" key={index}>
            <PostCard
              postData={postData}
              isExpanded={expandedPostId === postData.id}
              onExpand={() => handleExpand(postData.id)}
            />
          </div>
        ))}
          </div>

          <div className="w-full sm:w-[27%] text-textColor">
            <CommunitiesSection />
          </div>
        </div>

      </PageContainer>
    </>
  );
};

export default Posts;

