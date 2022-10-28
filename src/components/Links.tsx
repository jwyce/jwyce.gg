import { SiGithub, SiLinkedin, SiTwitter } from 'solid-icons/si/index.js';
import { HiSolidMail } from 'solid-icons/hi/index.js';
export default function Links() {
	const buttonClass = `
    cursor-pointer
    shadow-sm
    active:bg-gray-100  
    bg-gray-600
    hover:bg-gray-600
    bg-opacity-80
    hover:bg-opacity-100
    active:opacity-80
    active:border-gray-200
    border-gray-600 
    hover:border-gray-600
    text-gray-200  
    active:text-white 
    hover:text-white 
    border rounded-md items-center transition-colors duration-500 
    py-1 px-3 text-md font-medium
  `;

	return (
		<div class="text-white flex flex-col items-center justify-center">
			<img
				alt="jwyce"
				src="https://avatars.githubusercontent.com/u/16946573?v=4"
				class="h-72 w-72 rounded-full"
			/>
			<div>
				<div class="font-extrabold text-[1.5rem] text-center py-2">
					My Links
				</div>
				<div class="flex items-center justify-center gap-4 flex-wrap px-16">
					<a
						href="https://github.com/jwyce"
						target="_blank"
						aria-label="github"
						class={buttonClass}
					>
						<SiGithub
							class="inline w-5 h-5 -mt-[4px] -ml-1 mr-2"
							fill="white"
						/>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/jaredwyce/"
						target="_blank"
						aria-label="linkedin"
						class={buttonClass}
					>
						<SiLinkedin
							class="inline w-5 h-5 -mt-[4px] -ml-1 mr-2"
							fill="white"
						/>
						LinkedIn
					</a>
					<a
						href="https://twitter.com/JaredWyce"
						target="_blank"
						aria-label="twitter"
						class={buttonClass}
					>
						<SiTwitter
							class="inline w-5 h-5 -mt-[4px] -ml-1 mr-2"
							fill="white"
						/>
						Twitter
					</a>
					<a
						href="mailto:wycejared@gmail.com"
						class={buttonClass}
						aria-label="email"
					>
						<HiSolidMail
							class="inline w-5 h-5 -mt-[4px] -ml-1 mr-2"
							fill="white"
						/>
						Email
					</a>
				</div>
			</div>
		</div>
	);
}
