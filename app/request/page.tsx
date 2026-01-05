"use client";

import Container from "@/components/container";
import { LINKS } from "@/constants";
import Link from "next/link";
import GithubIcon from "@/icons/github-icon";
import { useRef } from "react";
import { AnimatedIconHandle } from "@/icons/types";

export default function RequestPage() {
    const iconRef = useRef<AnimatedIconHandle>(null);

    return (
        <Container className="flex h-[calc(100vh-16rem)] flex-col items-center justify-center text-center px-4">
            <div className="max-w-xl space-y-6 flex flex-col items-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                    Request an Icon
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl">
                    Missing an icon for your project? We accept icon requests via GitHub Issues.
                    Let us know what you need, and we'll do our best to add it to the collection.
                </p>

                <div className="pt-8">
                    <Link
                        href={LINKS.GITHUB}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                        onMouseEnter={() => iconRef.current?.startAnimation()}
                        onMouseLeave={() => iconRef.current?.stopAnimation()}
                    >
                        <div className="bg-muted/30 hover:bg-muted/50 relative flex aspect-square w-40 items-center justify-center rounded-2xl border p-8 transition-colors">
                            <GithubIcon ref={iconRef} size={80} />
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    );
}
