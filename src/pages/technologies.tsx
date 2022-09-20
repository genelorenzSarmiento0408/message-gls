export default function About() {
  return (
    <div className="flex flex-col items-center pt-5">
      <h1 className="text-3xl font-bold">This Page uses:</h1>
      <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
        <TechnologyCard
          name="T3 Stack"
          description="This Stack contains Typescript, Tailwind, TRPC"
          documentation="https://nextjs.org/"
        />
        <TechnologyCard
          name="NextJS"
          description="The React framework for production"
          documentation="https://nextjs.org/"
        />
        <TechnologyCard
          name="TypeScript"
          description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
          documentation="https://www.typescriptlang.org/"
        />
        <TechnologyCard
          name="TailwindCSS"
          description="Rapidly build modern websites without ever leaving your HTML"
          documentation="https://tailwindcss.com/"
        />
        <TechnologyCard
          name="tRPC"
          description="End-to-end typesafe APIs made easy"
          documentation="https://trpc.io/"
        />
        <TechnologyCard
          name="Next-Auth"
          description="Authentication for Next.js"
          documentation="https://next-auth.js.org/"
        />
        <TechnologyCard
          name="Prisma"
          description="Build data-driven JavaScript & TypeScript apps in less time"
          documentation="https://www.prisma.io/docs/"
        />
      </div>
    </div>
  );
}
type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
