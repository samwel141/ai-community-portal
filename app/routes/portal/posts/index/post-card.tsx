import { FC, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import ExpandedComponent from "./expanded-component";
import LikeButton from "~/components/like-button";
import { PostData } from ".";


interface PostCardProps {
  postData: PostData;
  isExpanded: boolean;
  onExpand: () => void;
}


const PostCard: FC<PostCardProps> = ({ postData, isExpanded, onExpand }: PostCardProps) => {

  return (
    <div className="bg-gray-900 text-white p-2 rounded-lg w-full">
      {!isExpanded ? (
        <div className="flex items-start w-full space-x-4">
          <div className="relative">
            <img
              src={postData.image}
              alt={postData.altText}
              className="w-24 h-24 rounded-md"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">
              {postData.community} · <span className="text-gray-400">{postData.timeAgo}</span>
            </p>
            <p className="text-sm">
              {postData.title}. <span className="text-blue-400 hover:opacity-80">{postData.category}</span>
            </p>
            <p className="text-sm" title={postData.description}>
              {postData.description.slice(0, 40)}{postData.description.length > 30 ? "..." : ""}
            </p>
            <div className="flex items-center justify-between space-x-4 mt-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-700 p-1 hover:bg-gray-600 rounded-full"
                  onClick={() => onExpand()}
                >
                  <img
                    src="/icons/pepicons-pencil_expand.svg"
                    alt="Expand"
                    className="w-5 h-5 rounded-md"
                  />
                </button>
                <div className="flex items-center space-x-2">
                  <LikeButton/>
                </div>
                <div className="flex items-center space-x-1 hover:opacity-80">
                  <FiMessageCircle />
                  <span>{postData.comments}</span>
                </div>
              </div>
              <div className="flex justify-end space-x-4 pr-4 text-sm text-gray-400">
                <button className="hover:text-white">Save</button>
                <button className="hover:text-white">Share</button>
                <button className="hover:text-white">Hide</button>
                <button className="hover:text-white">Report</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ExpandedComponent onExpand={onExpand} postData={postData} />
      )}
    </div>
  );
};

export default PostCard;

