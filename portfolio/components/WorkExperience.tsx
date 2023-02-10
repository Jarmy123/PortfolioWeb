'use client';
import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';
import SectionTitle from './SectionTitle';

type Props = {};

const WorkExperience = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<SectionTitle title="Experience" />

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				{/* Exp card */}
				{/* Exp card */}
				{/* Exp card */}
			</div>
		</motion.div>
	);
};

export default WorkExperience;
