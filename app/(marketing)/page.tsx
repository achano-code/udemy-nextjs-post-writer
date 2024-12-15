import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 md:pb-12">
        <div className="container mx-auto text-center flex flex-col items-center gap-4">
          <Link
            href={"/"}
            className="bg-muted px-4 py-1.5rem rounded-2xl font-medium text-sm"
          >
            xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal">
            このアプリケーションはNext.js
            AppRouterで作られたものです。ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={"/"}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
