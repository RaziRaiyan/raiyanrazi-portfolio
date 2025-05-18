import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/layout/coming-soon';

export const metadata: Metadata = {
	title: 'About | Raiyan Razi',
	description:
		'Learn more about Raiyan Razi - Frontend Developer, JavaScript enthusiast, and tech explorer.',
	keywords: [
		'Raiyan Razi',
		'About Raiyan',
		'Frontend Developer',
		'JavaScript',
		'Next.js',
		'Vietnam Developer',
	],
	openGraph: {
		title: 'About | Raiyan Razi',
		description:
			'Discover the story and journey of Raiyan Razi in the world of web development.',
		url: 'https://raiyanrazi.dev/about',
		siteName: 'Raiyan Razi',
		type: 'website',
		locale: 'en_US',
		images: [],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About | Raiyan Razi',
		description:
			'Learn more about Raiyan Razi - Frontend Developer and tech enthusiast.',
	},
	alternates: {
		canonical: 'https://raiyanrazi.dev/about',
	},
};

export default function Page() {
	return <ComingSoonPage pageName="About" />;
}
