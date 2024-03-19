import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => (
	<nav>
		<ul className="mt-2 flex justify-center space-x-4">
			<li>
				<ActiveLink
					href="/"
					className="text-blue-400 hover:text-blue-600"
					activeClassName="font-semibold underline"
					exact
				>
					Home
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					href="/products/0"
					className="text-blue-400 hover:text-blue-600"
					activeClassName="font-semibold underline"
				>
					All
				</ActiveLink>
			</li>
		</ul>
	</nav>
);
