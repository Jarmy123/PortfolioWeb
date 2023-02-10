import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Head from 'next/head';
import Header from 'components/Header';
import Hero from 'components/Hero';
import About from 'components/About';
import WorkExperience from 'components/WorkExperience';
import Skills from 'components/Skills';
import Projects from 'components/Projects';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Head>
				<title>Roman's Portfolio</title>
			</Head>

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

			<section id="projects">
				<Projects />
			</section>
		</div>
	);
};

export default Home;
