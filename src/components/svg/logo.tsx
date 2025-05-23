import { SVGProps } from '@/types/global';
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
export const Logo = (props: SVGProps) => {
	return (
		<Link href="/">
			<svg
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="579.000000pt"
				height="431.000000pt"
				viewBox="0 0 579.000000 431.000000"
				preserveAspectRatio="xMidYMid meet"
				className={cn('w-full h-full', props.className)}
			>
				<g
					transform="translate(0.000000,431.000000) scale(0.100000,-0.100000)"
					fill={props.fill}
					stroke="none"
				>
					<path
						d="M310 2136 l0 -1856 345 0 345 0 0 708 0 709 107 6 c194 12 627 8 645
-5 8 -7 108 -179 221 -383 113 -203 288 -516 389 -695 l183 -325 373 -3 c208
-1 372 2 372 7 0 8 -216 393 -430 766 -154 268 -400 708 -397 711 1 1 29 13
62 27 148 62 251 134 363 252 187 198 275 417 288 725 11 239 -23 433 -105
600 -126 256 -345 448 -616 539 -196 66 -165 64 -1202 68 l-943 4 0 -1855z
m1793 1246 c105 -29 170 -65 238 -132 61 -61 97 -122 125 -215 25 -83 25 -293
0 -385 -60 -219 -212 -352 -440 -386 -73 -11 -200 -14 -558 -12 l-463 3 -3
565 c-1 311 0 571 3 578 4 11 98 13 512 10 484 -4 512 -5 586 -26z"
					/>
					<path
						d="M2824 3967 c209 -157 320 -284 415 -474 23 -46 47 -83 54 -83 6 0
215 -2 462 -3 374 -3 461 -6 517 -20 207 -49 340 -177 394 -376 20 -75 20
-267 0 -343 -55 -205 -188 -345 -377 -394 -55 -15 -134 -18 -541 -21 l-477 -4
-40 -73 c-91 -166 -242 -330 -405 -441 -47 -32 -86 -64 -86 -70 0 -12 534
-953 551 -970 5 -5 9 184 9 497 l0 505 83 6 c104 9 460 9 519 1 l44 -6 126
-222 c70 -121 200 -351 289 -511 352 -631 378 -675 402 -675 129 -3 712 2 715
5 2 2 -119 221 -271 487 -151 266 -304 535 -339 598 -36 63 -100 177 -142 253
-43 76 -76 140 -73 144 3 3 39 20 80 38 148 64 320 202 423 338 60 80 138 242
168 348 46 161 58 383 32 559 -70 463 -391 798 -858 894 -152 31 -270 36 -983
35 l-720 0 29 -22z"
					/>
				</g>
			</svg>
		</Link>
	);
};
