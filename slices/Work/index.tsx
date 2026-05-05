import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
const Work: FC<WorkProps> = async ({ slice }) => {
  const client = createClient();
  const pages = await client.getAllByType("showcase");

  return <div className="text-7xl">{pages.map((page) => page.uid)}</div>;
};

export default Work;
