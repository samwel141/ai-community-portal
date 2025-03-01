import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { cn } from "~/utils";

interface LikeButtonProps {
    initialLiked?: boolean; 
    initialLikes?: number; 
    onLikeChange?: (liked: boolean, likesCount: number) => void; 
    className?: string; 
}

const LikeButton: React.FC<LikeButtonProps> = ({
    initialLiked = false,
    initialLikes = 0,
    onLikeChange,
    className = "",
}) => {
    const [liked, setLiked] = useState(initialLiked);
    const [likesCount, setLikesCount] = useState(initialLikes);

    const handleLikeToggle = () => {
        const newLikedState = !liked;
        const newLikesCount = newLikedState ? likesCount + 1 : likesCount - 1;

        setLiked(newLikedState);
        setLikesCount(newLikesCount);

        if (onLikeChange) {
            onLikeChange(newLikedState, newLikesCount);
        }
    };

    return (
        <button
            onClick={handleLikeToggle}
            className={cn(
                "flex items-center space-x-1 p-2 rounded-md transition-all",
                liked ? "text-red-500" : "text-gray-400 hover:text-red-500",
                className
            )}
        >
            <FiHeart className={`text-lg ${liked ? "fill-red-500" : ""}`} />
            <span className="text-sm">{likesCount}</span>
        </button>
    );
};

export default LikeButton;
