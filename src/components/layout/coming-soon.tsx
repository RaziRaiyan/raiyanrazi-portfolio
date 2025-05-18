'use client';

import { useEffect, useState } from 'react';
import { AnimatedSpan, Terminal, TypingAnimation } from '../magicui/terminal';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { Logo } from '../svg/logo';
import { useRouter } from 'next/navigation';
import { FullScreen } from '../full-screen';

export const ComingSoonPage = ({ pageName }: { pageName?: string }) => {
	const [mounted, setMounted] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	return (
		<FullScreen className="flex-col">
			<Terminal>
				<TypingAnimation>
					&gt; pnpm dlx raiyanrazi@portfolio init
				</TypingAnimation>

				<AnimatedSpan delay={1500} className="text-green-500">
					<span>✔ Problem-solving mindset activated.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={2000} className="text-green-500">
					<span>✔ Deep understanding of front-end frameworks.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={2500} className="text-green-500">
					<span>✔ Performance-focused engineering.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={3000} className="text-green-500">
					<span>✔ Proactive product thinking with business context.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={3500} className="text-green-500">
					<span>✔ Ownership-driven execution.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={4000} className="text-green-500">
					<span>✔ Fast learner with curiosity as core driver.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={4500} className="text-green-500">
					<span>✔ Strong collaboration with cross-functional teams.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={5000} className="text-green-500">
					<span>✔ Consistent under high-pressure scenarios.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={5500} className="text-green-500">
					<span>✔ Balancing scalability with simplicity.</span>
				</AnimatedSpan>

				<AnimatedSpan delay={6000} className="text-blue-500">
					<span>ℹ {pageName}:</span>
					<span className="pl-2">- Coming Soon</span>
				</AnimatedSpan>

				<TypingAnimation delay={6500} className="text-muted-foreground">
					Success! Portfolio initialization completed.
				</TypingAnimation>

				<TypingAnimation delay={7000} className="text-muted-foreground">
					Launching soon at raiyanrazi.id.vn
				</TypingAnimation>
			</Terminal>

			<div className="flex mt-10 justify-center text-center ">
				<HoverBorderGradient
					containerClassName="rounded-full"
					as="button"
					className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
					onClick={() => router.push('/')}
				>
					<Logo className="size-5" />
					<span>Back to home</span>
				</HoverBorderGradient>
			</div>
		</FullScreen>
	);
};
