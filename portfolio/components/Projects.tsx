'use client';
import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
	const projects = [1, 2, 3, 4, 5];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<SectionTitle title="Projects" />

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects.map((project, i) => (
					<div
						key={i}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src="https://e7.pngegg.com/pngimages/605/905/png-clipart-free-pic-web-design-label-thumbnail.png"
							alt=""
							className="z-100"
						/>

						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7Ab0A]/50">
									Case Study {i + 1} of {projects.length}:
								</span>{' '}
								UPS Clone
							</h4>
							<p className="text-lg text-center md:text-left">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consectetur inventore praesentium eaque totam delectus quasi
								porro suscipit tempora repellendus magni quis saepe doloribus
								perferendis, dolore culpa quos veritatis laudantium nihil quo
								dolores voluptatum accusantium ducimus quia! Fuga vitae
								accusantium non voluptatum nesciunt temporibus, assumenda
								architecto repellendus impedit explicabo quaerat in corrupti
								atque tempora, ratione quos quae a vel ea cumque.
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	);
};

export default Projects;
