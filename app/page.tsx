import { site } from "@/lib/content";

// Placeholder home — replaced by the full cinematic section assembly.
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="font-display text-editorial text-5xl font-light">{site.studio}</h1>
    </main>
  );
}
