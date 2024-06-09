import { ActiveLink } from "@/ui/atoms/ActiveLink";

const routes = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All" },
	{ href: "/categories/t-shirts", label: "T-shirts" },
	{ href: "/categories/hoodies", label: "Hoodies" },
	{ href: "/categories/accessories", label: "Accessories" },
	{ href: "/collections/summer-vibes", label: "Summer Vibes" },
];

export const Navigation = () => (
	<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
		<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
			{routes.map(({ href, label, exact }) => (
				<li key={href} className="first:pl-4 last:pr-4 lg:px-0">
					<ActiveLink href={href} exact={exact}>
						{label}
					</ActiveLink>
				</li>
			))}
		</ul>
	</nav>
);
