import { BlurImage } from '@/components/ui/apple-cards-carousel';
import { Timeline } from '@/components/ui/timeline';
import Link from 'next/link';

const data = [
	{
		title: '2020',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
					🚀 2020 – The Beginning at Richpanel
				</p>
				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Embarked on my software engineering journey at Richpanel,
						driven by curiosity and a strong problem-solving mindset.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Worked extensively with VueJS, JavaScript, and NodeJS,
						building user-centric features for a customer service
						platform.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Started developing a deep understanding of frontend
						frameworks and performance bottlenecks.
					</div>
				</div>

				<Link
					href="https://www.linkedin.com/feed/update/urn:li:activity:7150900356095299584/"
					target="_blank"
				>
					<div className="grid grid-cols-1">
						<BlurImage
							src="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/richpanel_group_pic.jpeg"
							alt="Richpanel Group Pic"
							width={500}
							height={200}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer"
						/>
					</div>
				</Link>
			</div>
		),
	},
	{
		title: 'Late 2021',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
					🔍 2021 – Diving Deeper into Frontend Internals
				</p>
				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Role: Promoted to Senior Software Engineer
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Took ownership of performance-critical modules used by
						users for long hours daily.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Led a major memory consumption optimization effort by
						dissecting Vue2’s reactivity system.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Outcome: Reduced browser memory usage from 1.5 GB+ to
						under 500 MB, significantly improving product performance.
					</div>
				</div>
			</div>
		),
	},
	{
		title: '2022',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
					🤖 2022 – Building AI & Media-Rich Experiences
				</p>
				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Spearheaded the development of an AI-powered reply
						suggestion engine, integrating vector databases and streaming
						backend services.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Delivered a message reply box supporting inline image and
						video uploads, enhancing communication workflows.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Maintained a continuous learning curve across TypeScript,
						ReactJS, and NodeJS.
					</div>
				</div>
			</div>
		),
	},

	{
		title: 'Early 2023',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
					🎉 Early 2023 – ESOP Recognition for Exceptional Performance
				</p>
				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Awarded ESOPs by Richpanel CEO as recognition for
						outstanding contributions.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Acknowledged publicly for consistent performance,
						problem-solving, and ownership mindset.
					</div>
				</div>

				<Link
					href="https://www.linkedin.com/feed/update/urn:li:activity:7034533207110729728/"
					target="_blank"
				>
					<div className="grid grid-cols-2 gap-4">
						<BlurImage
							src="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/richpanel_recoginition_linkedin.png"
							alt="Richpanel Recoginition Linkedin"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer"
						/>
						<BlurImage
							src="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/richpanel_recognition_slack.png"
							alt="Richpanel Recoginition Slack"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer"
						/>
					</div>
				</Link>
			</div>
		),
	},

	{
		title: 'Late 2023',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
					📈 2023 – Shifting from Execution to Product Thinking
				</p>
				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Started evaluating engineering decisions through a
						product-first lens.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Worked closely with stakeholders to understand business
						value, align technical priorities, and influence product
						direction.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Gained exposure to Docker, cloud services like EC2,
						DynamoDB, and began exploring DevOps workflows.
					</div>
				</div>
			</div>
		),
	},

	{
		title: '2024',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
					🏗️ 2024 – Scaling Products at Intract
				</p>

				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Joined Intract and led the engineering of Intract Nodes, a
						high-traffic platform for crypto miners.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Maintained 94–99 Lighthouse scores by optimizing web
						vitals for 10K+ daily active users.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Built Intract Rewind, a year-end NFT product summarizing
						user activity across blockchains.
						<br />
						Impact: Partnered launches resulted in $500K+ revenue.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Enhanced dashboard UX/UI for real-time environmental data
						visualization
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Started working on distributed systems and scalable
						infrastructure.
					</div>
				</div>

				<Link
					href="https://www.linkedin.com/posts/intract-io_holi-at-intract-was-an-absolute-blast-colors-activity-7307408663164465153-04ie/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACQ0bSQBrOWa3HLBsHQMj_jCy3FR1t0mu9E"
					target="_blank"
				>
					<div className="grid grid-cols-1">
						<BlurImage
							src="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/intract_group_pic.jpeg"
							alt="Richpanel Group Pic"
							width={500}
							height={200}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer"
						/>
					</div>
				</Link>
			</div>
		),
	},

	{
		title: 'Late 2024',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
					⚙️ Late 2024 – Early Recognition at Intract (Within 4 Months)
				</p>

				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Key contributor to “Intract Rewind”, a major product
						launch that involved 60+ hour workweeks and office
						overnights—appreciated publicly for resilience and impact.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Instrumental in launching &quot;Collectibles&quot;, an
						NFT-based milestone experience integrated with Rewind.
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<Link
						href="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/intract_recognition_slack_2.png"
						target="_blank"
					>
						<BlurImage
							src="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/intract_recognition_slack_2.png"
							alt="Richpanel Group Pic"
							width={500}
							height={200}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer"
						/>
					</Link>

					<Link
						href="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/intract_recognition_slack_1.png"
						target="_blank"
					>
						<BlurImage
							src="https://raiyan-portfolio.s3.us-east-1.amazonaws.com/intract_recognition_slack_1.png"
							alt="Richpanel Group Pic"
							width={500}
							height={200}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer"
						/>
					</Link>
				</div>
			</div>
		),
	},

	{
		title: '2025',
		content: (
			<div>
				<p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
					🌐 2025 – Engineering for Scale & System Design
				</p>

				<div className="mb-8 flex flex-col gap-2">
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Focused on understanding the internals of cloud computing,
						DevOps, and distributed systems.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Goal: Not just to use tools like Kubernetes, ECS, or load
						balancers—but to understand the principles, trade-offs, and
						systems design behind scalable architecture.
					</div>
					<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
						✅ Currently pushing toward becoming a full-stack engineer
						with deep technical intuition across the stack.
					</div>
				</div>
			</div>
		),
	},
];

export function ExperienceTimeline() {
	return (
		<div className="w-full h-full">
			<Timeline data={data} />
		</div>
	);
}
