import React from 'react';
import { motion } from 'framer-motion';
import { Users, List, Star, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Lecture {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  targetAudience: string;
  content: string[];
  valueAdded: string;
  gradient: string;
}

interface LectureCardProps {
  lecture: Lecture;
}

const LectureCard: React.FC<LectureCardProps> = ({ lecture }) => {
  const Icon = lecture.icon;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${lecture.gradient} p-6 text-white relative overflow-hidden flex-shrink-0`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
        
        <div className="relative z-10">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
          >
            <Icon size={32} />
          </motion.div>
          
          <h3 className="text-xl font-bold leading-tight min-h-[3.5rem] flex items-center">
            {lecture.title}
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-6 flex-grow flex flex-col">
        {/* Description */}
        <p className="text-gray-600 italic leading-relaxed min-h-[3rem] flex items-start">
          {lecture.description}
        </p>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-4 flex-shrink-0"
        >
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} className="text-blue-600" />
            <h4 className="font-semibold text-gray-800">קהל יעד</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {lecture.targetAudience}
          </p>
        </motion.div>

        {/* Content List */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <List size={18} className="text-purple-600" />
            <h4 className="font-semibold text-gray-800">תכנים מרכזיים</h4>
          </div>
          <ul className="space-y-2">
            {lecture.content.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start gap-2 text-sm text-gray-600 group/item hover:text-gray-800 transition-colors"
              >
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="group-hover/item:translate-x-1 transition-transform">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Value Added - Fixed at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className={`bg-gradient-to-r ${lecture.gradient} text-white rounded-lg p-4 mt-auto flex-shrink-0`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Star size={18} />
            <h4 className="font-semibold">ערך מוסף</h4>
          </div>
          <p className="text-sm leading-relaxed opacity-95">
            {lecture.valueAdded}
          </p>
        </motion.div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default LectureCard;