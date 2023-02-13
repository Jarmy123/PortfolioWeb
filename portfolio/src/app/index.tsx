'use client';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Head from 'next/head';
import Header from 'components/Header';
import Hero from 'components/Hero';
import About from 'components/About';
import WorkExperience from 'components/WorkExperience';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import ContactMe from 'components/ContactMe';
import Link from 'next/link';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from 'typings';
import { fetchPageInfo } from 'utils/pageInfo';
import { fetchExperiences } from 'utils/fetchExperiences';
import { fetchSkills } from 'utils/fetchSkills';
import { fetchProjects } from 'utils/fetchProjects';
import { fetchSocials } from 'utils/fetchSocials';
import { ParsedUrlQuery } from 'querystring';

const inter = Inter({ subsets: ['latin'] });

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
	return (
		<>
			<Head>
				<title>Romans Portfolio</title>
			</Head>
			<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				<Header />

				<section id="hero" className="snap-center">
					<Hero />
				</section>

				<section id="about" className="snap-center">
					<About />
				</section>

				<section id="experience" className="snap-center">
					<WorkExperience />
				</section>

				<section id="skills" className="snap-start">
					<Skills />
				</section>

				<section id="projects" className="snap-start">
					<Projects />
				</section>

				<section id="contact" className="snap-start">
					<ContactMe />
				</section>

				<Link href="#hero">
					<footer className="sticky bottom-5 w-full cursor-pointer">
						<div className="flex items-center justify-center">
							<img
								className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
								src="https://i.imgur.com/e2yvD6A.png"
								alt=""
							/>
						</div>
					</footer>
				</Link>
			</div>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},

		revalidate: 10,
	};
};
