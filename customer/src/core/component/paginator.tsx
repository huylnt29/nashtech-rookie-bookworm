import { Pagination } from "@nextui-org/react";

export type PaginatorProps = {
  currentPage: number;
  totalPage: number;
  onChange: (page: number) => void;
};

const Paginator = (props: PaginatorProps) => {
  return (
    <Pagination
      showControls
      initialPage={props.currentPage}
      total={props.totalPage}
      onChange={props.onChange}
      classNames={{
        item: "text-slate-900 bg-slate-100",
        cursor: "font-bold text-white bg-slate-800",
        prev: "text-slate-900 bg-transparent border-none",
        next: "text-slate-900 bg-transparent border-none",
      }}
    />
  );
};

export default Paginator;
