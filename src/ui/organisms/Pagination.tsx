import { ArrowLeft, ArrowRight } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Pagination({ pageNumber }: { pageNumber: string }) {
  return (
    <nav aria-label="pagination" className="flex justify-center m-4">
      <ActiveLink
        href={`${pageNumber === "1" ? "1" : +pageNumber - 1}`}
        className="text-blue-400 hover:text-blue-600"
        activeClassName="font-semibold underline"
      >
        <ArrowLeft />
      </ActiveLink>
      <ActiveLink
        href={`${+pageNumber + 1}`}
        className="text-blue-400 hover:text-blue-600" activeClassName="font-semibold underline"
      >
        <ArrowRight />
      </ActiveLink>
    </nav>
  );
}