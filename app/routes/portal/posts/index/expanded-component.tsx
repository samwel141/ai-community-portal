import React, { useState } from 'react';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';
import { AvatarCard } from '~/components/avatar';
import LikeButton from '~/components/like-button';
import { generateAvatar } from '~/utils/generate-avatar';

interface ExpandedComponentProps {
    onExpand: () => void;
    postData: any;
}

function ExpandedComponent({ onExpand, postData }: ExpandedComponentProps) {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    const [descriptionTextLength, setDescriptionTextLength] = useState(100);
    const isExpanded = descriptionTextLength >= (postData?.description?.length || 100);

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4 relative">
            <div className="bg-transparent pl-2 border-r border-1 border-gray-700 flex flex-col p-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                        Udsm Ai Community · <span className="text-gray-400">7h ago</span>
                    </p>
                    <button
                        onClick={() => onExpand()}
                        className="bg-gray-700 p-1 hover:bg-gray-600 rounded-full"
                    >
                        <img
                            src="/icons/pepicons-pencil_expand.svg"
                            alt="Expand"
                            className="w-5 h-5 rounded-md"
                        />
                    </button>
                </div>
                <div>
                    <p>{postData?.title}</p>
                    <img
                        src="/images/community/post.png"
                        alt="Expand"
                        className="w-40 h-40 rounded-md"
                    />
                </div>
                <div>
                    <p>
                        {postData?.description?.slice(0, descriptionTextLength)}
                        {!isExpanded && (
                            <span className="text-gray-400">...</span>
                        )}
                        {postData?.description?.length > 100 && (
                            <>
                                {!isExpanded ? (
                                    <button
                                        className="text-blue-400 text-sm hover:opacity-80 ml-1"
                                        onClick={() => setDescriptionTextLength(postData.description.length)}
                                    >
                                        Show more
                                    </button>
                                ) : (
                                    <button
                                        className="text-blue-400 text-sm hover:opacity-80 ml-1"
                                        onClick={() => setDescriptionTextLength(100)}
                                    >
                                        Show less
                                    </button>
                                )}

                            </>
                        )}
                    </p>
                </div>
                <div className="flex items-center justify-between space-x-4 mt-2 text-gray-400">
                    <div className="flex items-center space-x-1 hover:opacity-80">
                        <LikeButton />
                        <FiMessageCircle />
                        <span>{postData.comments}</span>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <div className="flex items-start justify-start gap-4 mb-2">
                    <h1>Comments</h1>
                    <p>{comments.length}</p>
                </div>
                <div className="bg-transparent p-4 rounded-lg h-[calc(100vh-32rem)] overflow-y-auto">
                    {comments.map((comment, index) => (
                        <div className="flex flex-col mb-3" key={index}>
                            <AvatarCard
                                subtitle="UdSM Ai Community · Just now"
                                title={comment}
                                imageUrl={generateAvatar("user" + index)}
                                titleClassName="text-sm font-normal"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute -bottom-2 bg-transparent p-[10px] w-[52%] -right-2 border-t border-1 border-gray-700">
                    <div className="flex items-center justify-between gap-2">
                        <img
                            src={generateAvatar("user")}
                            alt="Expand"
                            className="w-8 h-8 rounded-full"
                        />
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="bg-transparent text-xs text-gray-400 border border-gray-400 p-1 rounded-full w-full"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                        />
                        <button onClick={handleAddComment} className="p-1 hover:opacity-80 rounded-full">
                            <img
                                src="/icons/share-icon-white.svg"
                                alt="Expand"
                                className="w-6 h-6 text-textColor rounded-md"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpandedComponent;

