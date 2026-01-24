import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name }) => {
    return (
        <div className="flex justify-between items-center p-3 bg-white/5 rounded-sm border border-white/5 hover:border-accent/30 transition-colors duration-300 group">
            <span className="text-secondary font-medium group-hover:text-white transition-colors truncate mr-2">
                {name}
            </span>

        </div>
    );
};

export default SkillCard;
