import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

interface TweetCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  date?: string;
  tags?: string[];
}

const TweetCard: React.FC<TweetCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  date = "Apr 4, 2026",
  tags = ["#FullStack", "#WebDev"]
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-xl w-full hover:bg-black/50 transition-colors group"
    >
      <div className="flex gap-3">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
          A
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-1 mb-1">
            <span className="font-bold text-white hover:underline cursor-pointer truncate">Amrit</span>
            <span className="text-gray-500 text-sm truncate">@Yes-Amrit · {date}</span>
          </div>

          {/* Content */}
          <p className="text-white text-[15px] leading-normal mb-3 whitespace-pre-wrap">
            {description}
            <span className="block mt-2 text-blue-400">
              {tags.join(' ')}
            </span>
          </p>

          {/* Project Image/Card */}
          <div className="relative rounded-2xl border border-white/10 overflow-hidden mb-3 aspect-video bg-gray-900">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Project Title & Links */}
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <div className="flex gap-4">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            </div>
          </div>

          {/* Interaction Bar */}
          <div className="flex justify-between items-center text-gray-500 max-w-md">
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-blue-400/10">
                <MessageCircle size={18} />
              </div>
              <span className="text-xs">12</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-green-400/10">
                <Repeat2 size={18} />
              </div>
              <span className="text-xs">4</span>
            </button>
            <button className="flex items-center gap-2 hover:text-pink-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-pink-400/10">
                <Heart size={18} />
              </div>
              <span className="text-xs">84</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-blue-400/10">
                <Share size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TweetCard;
