'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

export function ProjectCardsCarousel() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} techStack={card.techStack} />
	));

	return (
		<div className="my-10">
			<Carousel items={cards} />
		</div>
	);
}

const DummyContent = () => {
	return (
		<>
			{[...new Array(3).fill(1)].map((_, index) => {
				return (
					<div
						key={'dummy-content' + index}
						className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
					>
						<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
							<span className="font-bold text-neutral-700 dark:text-neutral-200">
								The first rule of Apple club is that you boast about
								Apple club.
							</span>{' '}
							Keep a journal, quickly jot down a grocery list, and take
							amazing class notes. Want to convert those notes to text?
							No problem. Langotiya jeetu ka mara hua yaar is ready to
							capture every thought.
						</p>
						<Image
							src="https://assets.aceternity.com/macbook.png"
							alt="Macbook mockup from Aceternity UI"
							height="500"
							width="500"
							className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
						/>
					</div>
				);
			})}
		</>
	);
};

const data = [
	{
		category: 'React',
		title: 'React',
		src: 'https://raiyan-portfolio.s3.us-east-1.amazonaws.com/certificate_modern_react.png',
		content: <DummyContent />,
		techStack: ['ReactJS'],
	},
	{
		category: 'React',
		title: 'Advanced Javascript',
		src: 'https://raiyan-portfolio.s3.us-east-1.amazonaws.com/certificate_advanced_javascript.png',
		content: <DummyContent />,
		techStack: ['Javascript'],
	},
	{
		category: 'React',
		title: 'Tanstack React Query',
		src: 'https://raiyan-portfolio.s3.us-east-1.amazonaws.com/certificate_tanstack_react_query.png',
		content: <DummyContent />,
		techStack: ['Modern React'],
	},

	{
		category: 'React',
		title: 'Modern React',
		src: 'https://raiyan-portfolio.s3.us-east-1.amazonaws.com/certificate_modern_react.png',
		content: <DummyContent />,
		techStack: ['React'],
	},
	{
		category: 'React',
		title: 'React with Typescript',
		src: 'https://raiyan-portfolio.s3.us-east-1.amazonaws.com/certificate_react_typescript.png',
		content: <DummyContent />,
		techStack: ['React'],
	},
];
