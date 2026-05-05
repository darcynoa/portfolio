import { createClient } from "@/prismicio";
import WorkItem from "./WorkItem";

export default async function Page() {
  const client = createClient();
  const pages = await client.getAllByType("showcase");
  pages.sort((a, b) => (a.uid > b.uid ? 1 : b.uid > a.uid ? -1 : 0));

  return (
    <section>
      {pages.map((page, index) => (
        <WorkItem key={index} uid={`${page.uid}`} />
      ))}
    </section>
  );
}
