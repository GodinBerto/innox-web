import { PageRenderer } from '@/components/hoc';
import { getHomePage } from '@/lib/sanity';

export default async function HomePage() {
  const result = await getHomePage();

  return <PageRenderer sections={result.sections} />;
}
