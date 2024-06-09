type ProductDetailsDescriptionProps = {
  product: {
    name: string;
    category?: string;
    price: number;
    description: string;
  };
};

export const ProductDetailsDescription = ({
  product: { name, category, price, description },
}: ProductDetailsDescriptionProps) => {
  return (
    <div className="mt-2">
      <div>
        <h1 className="text-sm text-2xl font-semibold text-gray-700">{name}</h1>
        {category && <p className="text-sm text-gray-500  mt-4">
          <span className="sr-only">Kategoria:</span> {category}
        </p>}
      </div>
      <p className="text-sm font-medium text-gray-900 mt-4">
        <span className="sr-only">Cena:</span>{" "}
        {Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(price)}
      </p>
      <p className="text-sm text-gray-700 mt-4">{description}</p>
    </div>
  );
};
