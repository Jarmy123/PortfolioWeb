'use client';
import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from './SectionTitle';

type Props = {};

const About = (props: Props) => {
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<SectionTitle title="About" />

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src="https://media.licdn.com/dms/image/C5603AQGMJqZWGeQa8w/profile-displayphoto-shrink_800_800/0/1614121797436?e=1681344000&v=beta&t=Mr1XHgVtiKg-jij5cetnxTIkALTheUd5M225S4LPfnY"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{' '}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
					background
				</h4>
				<p className="text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi
					sequi voluptate eius repellat nostrum quod, facere voluptates
					accusantium officiis consequuntur iste illum vel? Quasi dolor nostrum
					assumenda sapiente, maiores, et porro sed id laborum accusamus unde
					illum aliquam, quo dignissimos quibusdam sit repellendus minima! A,
					amet voluptas! Repellendus ipsa exercitationem maxime odio sunt ipsum
					consequatur ab dicta veritatis dolores, incidunt iusto quae ad quos
					animi ut suscipit dolore ducimus accusantium laboriosam quia voluptate
					aspernatur ea illo! Earum, eum? Exercitationem itaque pariatur
					voluptas nisi tempora veniam ad delectus cumque aspernatur obcaecati
					facere nulla illum, accusantium tenetur doloribus sint ut. Itaque!
				</p>
			</div>
		</div>
	);
};

export default About;
