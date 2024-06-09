type ProductListItemImageProps = {
	url: string;
	alt: string;
	width?: number;
	height?: number;
};

export const ProductListItemImage = ({ url, alt, width = 320, height = 320 }: ProductListItemImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={width}
				height={height}
				alt={alt}
				src={url}
				className="object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
