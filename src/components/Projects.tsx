import { BiSolidLeaf } from 'solid-icons/bi/index.js';

export default function Projects() {
	return (
		<div class="flex flex-col items-center justify-center">
			<div class="text-white font-extrabold text-[1.5rem] text-center py-2">
				<BiSolidLeaf class="inline w-8 h-8 -mt-[4px] -ml-1 mr-2" fill="white" />
				My Projects
			</div>
			<div class="text-white flex flex-col items-center justify-center">
				<a href="https://gungi.io" class="cursor-pointer" aria-label="gungi.io">
					<img
						alt="gungi.io"
						src="https://raw.githubusercontent.com/jwyce/gungi.io/bfb78c4f7a4eb452d05b1833cd9d25c53c0de68b/client/src/assets/gungi-github.svg"
						class="max-h-32 px-12"
					/>
				</a>
			</div>
		</div>
	);
}
