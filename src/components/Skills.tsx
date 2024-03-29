import { For } from 'solid-js';

type Section = {
	title: string;
	items: Item[];
};
type Item = {
	name: string;
	imgUrl: string;
	href: string;
};

const vscodeIconsDomain =
	'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons';
const materialIconsDomain =
	'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/eddd21641e769b1d4d8974834fb75166038b2e52/icons/';
const beardedIconsDomain =
	'https://raw.githubusercontent.com/BeardedBear/bearded-icons/master/icons';
const sections: Section[] = [
	{
		title: "Things I'm great at",
		items: [
			{
				name: 'TypeScript',
				imgUrl: `${vscodeIconsDomain}/file_type_typescript_official.svg`,
				href: 'https://www.typescriptlang.org/',
			},
			{
				name: 'Node',
				imgUrl: `${vscodeIconsDomain}/file_type_node.svg`,
				href: 'https://nodejs.org/',
			},
			{
				name: 'React',
				imgUrl: `${vscodeIconsDomain}/file_type_reactjs.svg`,
				href: 'https://beta.reactjs.org/',
			},
			{
				name: 'GraphQL',
				imgUrl: `${vscodeIconsDomain}/file_type_graphql.svg`,
				href: 'https://graphql.org/',
			},
			{
				name: 'Apollo',
				imgUrl: `${materialIconsDomain}/apollo.svg`,
				href: 'https://www.apollographql.com/docs/',
			},
			{
				name: 'C#',
				imgUrl: `${beardedIconsDomain}/csharp.svg`,
				href: 'https://docs.microsoft.com/en-us/aspnet/core/',
			},
			{
				name: 'SQL',
				imgUrl: `${beardedIconsDomain}/sql.svg`,
				href: 'https://www.postgresql.org/',
			},
		],
	},
	{
		title: "Things I'm good at",
		items: [
			{
				name: 'React Native',
        imgUrl: 'https://shopify.github.io/react-native-skia/img/logo.png',
				href: 'https://reactnative.dev/',
			},
			{
				name: 'Expo',
				imgUrl: `${vscodeIconsDomain}/file_type_expo.svg`,
				href: 'https://expo.dev/',
			},
			{
				name: 'Zod',
				imgUrl: 'https://zod.dev/logo.svg',
				href: 'https://zod.dev/',
			},
			{
				name: 'Docker',
				imgUrl: `${beardedIconsDomain}/docker.svg`,
				href: 'https://www.docker.com/',
			},
			{
				name: 'CSS',
				imgUrl: `${beardedIconsDomain}/css.svg`,
				href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
			},
			{
				name: 'Bash',
				imgUrl: `${beardedIconsDomain}/shell.svg`,
				href: 'https://github.com/jlevy/the-art-of-command-line',
			},
			{
				name: 'Neovim',
				imgUrl: `${beardedIconsDomain}/nvim.svg`,
				href: 'https://github.com/jwyce/.dotfiles',
			},
		],
	},
	{
		title: 'Things I like a lot',
		items: [
			{
				name: 'Astro',
				imgUrl: 'https://astro.build/favicon.svg',
				href: 'https://astro.build/',
			},
			{
				name: 'Rust',
				imgUrl: `${beardedIconsDomain}/rust.svg`,
				href: 'https://doc.rust-lang.org/book/title-page.html',
			},
			{
				name: 'Tauri',
				imgUrl: `${beardedIconsDomain}/tauri.svg`,
				href: 'https://tauri.app/',
			},
			{
				name: 'Deno',
				imgUrl: 'https://www.denojs.cn/img/logo.png',
				href: 'https://deno.com/',
			},
			{
				name: 'Solid',
				imgUrl: 'https://www.solidjs.com/assets/logo-123b04bc.svg',
				href: 'https://solidjs.com/',
			},
			{
				name: 'Vitest',
				imgUrl: `https://vitest.dev/logo.svg`,
				href: 'https://vitest.dev/',
			},
			{
				name: 'Vite',
				imgUrl: `https://vitejs.dev/logo-with-shadow.png`,
				href: 'https://vitejs.dev/',
			},
		],
	},
	{
		title: 'My tech stack',
		items: [
			{
				name: 'TypeScript',
				imgUrl: `${vscodeIconsDomain}/file_type_typescript_official.svg`,
				href: 'https://www.typescriptlang.org/',
			},
			{
				name: 'tRPC',
				imgUrl: 'https://trpc.io/img/logo.svg',
				href: 'https://trpc.io/',
			},
			{
				name: 'Tailwind',
				imgUrl: `${beardedIconsDomain}/tailwind.svg`,
				href: 'https://tailwindcss.com/',
			},
			{
				name: 'Next',
				imgUrl: `${beardedIconsDomain}/nextconfig.svg`,
				href: 'https://nextjs.org/',
			},
			{
				name: 'Vercel',
				imgUrl: `${beardedIconsDomain}/vercel.svg`,
				href: 'https://vercel.com/',
			},
			{
				name: 'Prisma',
				imgUrl: `${beardedIconsDomain}/prisma.svg`,
				href: 'https://www.prisma.io/',
			},
			{
				name: 'PlanetScale',
				imgUrl:
					'https://pbs.twimg.com/profile_images/1504919223168077836/RSsCSpKf_400x400.jpg',
				href: 'https://planetscale.com/',
			},
		],
	},
];

export default function Skills() {
	return (
		<div class="text-gray-400">
			<For each={sections}>
				{({ title, items }) => (
					<div class="py-5 px-4">
						<div class="text-white text-center font-extrabold text-[1.5rem] pb-4">
							{title}
						</div>
						<div class="flex flex-row items-start justify-center gap-4 flex-wrap w-full">
							<For each={items}>
								{({ name, imgUrl, href }) => (
									<a
										href={href}
										class="hover:scale-110 duration-500"
										aria-label={name}
									>
										<div class="flex flex-col items-center justify-center">
											<img
												alt={name}
												src={imgUrl}
												height={70}
												width={70}
												class="rounded-lg"
											/>
											<div class="text-gray-400 font-bold">{name}</div>
										</div>
									</a>
								)}
							</For>
						</div>
					</div>
				)}
			</For>
		</div>
	);
}
