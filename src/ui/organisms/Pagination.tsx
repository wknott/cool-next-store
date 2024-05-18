import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Pagination({ pageNumber }: { pageNumber: string }) {
  return (
    <nav aria-label="pagination">
      <ActiveLink
        href={`/products/${pageNumber === "1" ? "1" : +pageNumber - 1}`}
        className="text-blue-400 hover:text-blue-600"
        activeClassName="font-semibold underline"
        disabled={pageNumber === "1"}
      >
        Poprzednia strona
      </ActiveLink>
      <ActiveLink
        href={`/products/${+pageNumber + 1}`}
        className="text-blue-400 hover:text-blue-600" activeClassName="font-semibold underline"
      >
        Następna strona
      </ActiveLink>
    </nav>
  );
}