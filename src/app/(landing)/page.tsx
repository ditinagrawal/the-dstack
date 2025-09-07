import Link from "next/link";

import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiClerk, SiGithub, SiShadcnui, SiTrpc } from "react-icons/si";

import { buttonVariants } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="py-12 md:py-18">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-6">
          <h2 className="text-4xl font-medium text-balance lg:text-5xl">
            The Dstack
          </h2>
          <p>
            The stack for building fast, lightweight and end-to-end typesafe
            applications using latest technologies.
          </p>
          <Link
            href="https://github.com/ditinagrawal/the-dstack"
            className={buttonVariants()}
          >
            <SiGithub /> Github
          </Link>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <RiNextjsLine className="size-8" />
              <h3 className="font-medium">Next.js</h3>
            </div>
            <p className="text-sm">The React Framework for the Web.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <DiMongodb className="size-8" />
              <h3 className="font-medium">MongoDB</h3>
            </div>
            <p className="text-sm">The modern NoSQL database.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaAws className="size-8" />
              <h3 className="font-medium">AWS S3</h3>
            </div>
            <p className="text-sm">
              Object storage built to retrieve any data.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SiShadcnui className="size-7" />
              <h3 className="font-medium">Shadcn UI</h3>
            </div>
            <p className="text-sm">The Foundation for your Design System.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SiClerk className="size-8" />
              <h3 className="font-medium">Clerk</h3>
            </div>
            <p className="text-sm">
              More than authentication, full user management.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SiTrpc className="size-8" />
              <h3 className="font-medium">TRPC</h3>
            </div>
            <p className="text-sm">End-to-end typesafe APIs made easy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
