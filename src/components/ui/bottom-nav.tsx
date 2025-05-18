import Link from 'next/link';

const links = [
	{
		title: 'All',
		href: '/',
	},
	{
		title: 'Experience',
		href: '/experience',
	},
	{
		title: 'Certifications',
		href: '/certificates',
	},
	{
		title: 'About',
		href: '/about',
	},
];

export const BottomNav = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 flex justify-evenly items-center sm:hidden rounded-lg border border-white/10 backdrop-blur-lg bg-white/10 z-100 m-2 divide-x-1 divide-white/10">
			{links.map((link) => (
				<Link key={link.href} href={link.href}>
					<div className="flex flex-col items-center p-4">
						<p>{link.title}</p>
					</div>
				</Link>
			))}
		</div>
	);
};
