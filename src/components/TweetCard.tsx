import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, MessageCircle, Repeat2, Heart, Share, Info, X } from 'lucide-react';

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
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-xl w-full hover:bg-black/50 transition-colors group relative perspective-[1000px]"
    >
      {/* 3D Description Popup */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateX: -10, y: 10, z: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0, z: 50 }}
            exit={{ opacity: 0, scale: 0.95, rotateX: 10, y: 10, z: 20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
            className="absolute left-[-20px] right-[-20px] top-4 z-50 p-6 bg-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9),_0_0_30px_rgba(168,85,247,0.2)] pointer-events-auto min-h-[150px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <button 
              onClick={() => setIsHovered(false)}
              className="absolute top-4 right-4 p-2 text-white/50 hover:bg-white/10 hover:text-white rounded-full transition-colors"
            >
              <X size={18} />
            </button>
            <div className="text-white/95 text-[15px] leading-relaxed whitespace-pre-wrap font-medium pr-8 max-h-[300px] overflow-y-auto custom-scrollbar overscroll-contain">
              {description}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-[12px] font-bold text-purple-300 bg-purple-500/20 px-3 py-1.5 rounded-lg border border-purple-500/30">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
          A
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-1 mb-3">
            <span className="font-bold text-white hover:underline cursor-pointer truncate">Amrit</span>
            <span className="text-gray-500 text-sm truncate">@Yes-Amrit · {date}</span>
          </div>

          {/* Project Image/Card */}
          <div className="relative rounded-2xl border border-white/10 overflow-hidden mb-4 aspect-video bg-gray-900 shadow-inner">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            
            {/* Quick Title overlay inside image for better visual hierarchy */}
            <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-3">
              <span className="text-sm font-bold text-white tracking-wide">{title}</span>
              <button 
                onClick={(e) => { e.preventDefault(); setIsHovered(!isHovered); }}
                className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white bg-purple-500/20 hover:bg-purple-500/40 px-2 py-0.5 rounded-full transition-colors"
              >
                <Info size={12} />
                About
              </button>
            </div>
          </div>

          {/* Links Below Image */}
          <div className="flex justify-between items-center mb-4 px-1">
            <div className="flex gap-5">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <div className="p-1.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                  <ExternalLink size={14} />
                </div>
                Live Demo
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                <div className="p-1.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                  <Github size={14} />
                </div>
                Code
              </a>
            </div>
          </div>

          {/* Interaction Bar */}
          <div className="flex justify-between items-center text-gray-500 max-w-md px-1">
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-blue-400/10 transition-colors">
                <MessageCircle size={18} />
              </div>
              <span className="text-xs font-medium">12</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-green-400/10 transition-colors">
                <Repeat2 size={18} />
              </div>
              <span className="text-xs font-medium">4</span>
            </button>
            <button className="flex items-center gap-2 hover:text-pink-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-pink-400/10 transition-colors">
                <Heart size={18} />
              </div>
              <span className="text-xs font-medium">84</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors group/btn">
              <div className="p-2 rounded-full group-hover/btn:bg-blue-400/10 transition-colors">
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
