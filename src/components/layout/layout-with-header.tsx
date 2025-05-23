import React from 'react';
import { Header } from './header';
import { HeroBackground } from './hero-background';
import { BottomNav } from '../ui/bottom-nav';
export const LayoutWithHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="font-[family-name:var(--font-exo2)] font-medium w-screen">
			<HeroBackground>
				<Header />

				<main className="overflow-auto overflow-x-hidden container mx-auto flex-1 p-4">
					{children}
				</main>
				<footer className="text-sm md:text-lg row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-600 p-4 pb-[80px]">
					© 2025 Raiyan Razi. All rights reserved.
				</footer>
			</HeroBackground>
			<BottomNav />
		</div>
	);
};
