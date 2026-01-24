import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, level }) => {
    return (
        <div className="flex justify-between items-center p-3 bg-white/5 rounded-sm border border-white/5 hover:border-accent/30 transition-colors duration-300 group">
            <span className="text-secondary font-medium group-hover:text-white transition-colors">
                {name}
            </span>
            <span className="text-xs font-mono text-accent/80 px-2 py-1 bg-accent/5 rounded border border-accent/10">
                {level}
            </span>
        </div>
    );
};

export default SkillCard;
