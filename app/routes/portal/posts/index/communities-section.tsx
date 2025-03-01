import React, { FC } from "react";

const communities = [
  {
    id: 1,
    name: "Udsm Ai Community",
    members: 389,
    image: "/images/community/community1.png", 
  },
  {
    id: 2,
    name: "Udsm Ai Community",
    members: 389,
    image: "/images/community/community1.png", 
  },
  {
    id: 3,
    name: "Udsm Ai Community",
    members: 389,
    image: "/images/community/community1.png", 
  },
  {
    id: 4,
    name: "Udsm Ai Community",
    members: 389,
    image: "/images/community/community1.png", 
  },
  {
    id: 5,
    name: "Udsm Ai Community",
    members: 389,
    image: "/images/community/community1.png", 
  },
];

const trendingTopics = [
  "AI showroom",
  "Scholarships 2025",
  "Biggest Events from 2024",
  "Google AI events",
  "Talk next gen tech",
];

const CommunitiesSection: FC = () => {
  return (
    <div className="bg-gray-900 text-white p-2 w-[17rem] rounded-lg">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Communities</h2>

        <div className="space-y-4">
          {communities.map((community) => (
            <div key={community.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{community.name}</p>
                  <p className="text-xs text-gray-400">{community.members} members</p>
                </div>
              </div>
              <button className="bg-gray-700 text-white px-4 py-1 rounded-lg text-sm">Visit</button>
            </div>
          ))}
        </div>
        <button className="text-blue-400 text-sm mt-2">See more</button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Trending</h2>
        <ul className="space-y-2 text-gray-300 text-sm">
          {trendingTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunitiesSection;