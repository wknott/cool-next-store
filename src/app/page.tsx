import { ProductList } from "@/ui/organisms/ProductList";

const products = [
	{
		id: "1",
		name: "Uprząż",
		category: "Sprzęt wspinaczkowy",
		price: 100,
		image: {
			src: "/product_1.jpeg",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Spodnie",
		category: "Odzież wspinaczkowa",
		price: 200,
		image: {
			src: "/product_2.jpeg",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Koszulka",
		category: "Odzież wspinaczkowa",
		price: 300,
		image: {
			src: "/product_3.jpeg",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Buty",
		category: "Obuwie wspinaczkowe",
		price: 400,
		image: {
			src: "/product_4.jpeg",
			alt: "Product 4",
		},
	},
]

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
