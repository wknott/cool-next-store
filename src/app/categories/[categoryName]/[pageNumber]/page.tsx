import { notFound } from "next/navigation";
import { getProductListByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/organisms/Pagination";

export default async function ProductListByCategorySlug({
  params: { categoryName, pageNumber },
}: {
  params: {
    pageNumber: string;
    categoryName: string;
  };
}) {
  const category = await getProductListByCategorySlug(categoryName);

  if (!category?.products) {
    notFound();
  }

  return (
    <main>
      <ProductList products={category.products} />
      <Pagination pageNumber={pageNumber} />
    </main>
  )
}