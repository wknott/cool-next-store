import { Pagination } from "@/ui/organisms/Pagination";

export default async function ProductListPageLayout({ children, params }: { children: React.ReactNode, params: { pageNumber: string } }) {

  return (
    <main>
      {children}
      <Pagination pageNumber={params.pageNumber} />
    </main>
  )
}
