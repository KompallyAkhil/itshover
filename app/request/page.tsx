"use client";

import Container from "@/components/container";
import PrimaryButton from "@/components/ui/primary-button";
import { LINKS } from "@/constants";
import Link from "next/link";
import GithubIcon from "@/icons/github-icon";

export default function RequestPage() {
    return (
        <Container className="flex h-[calc(100vh-16rem)] flex-col items-center justify-center text-center">
            <div className="max-w-xl space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Request an Icon
                </h1>
                <p className="text-muted-foreground text-lg">
                    Missing an icon for your project? We accept icon requests via GitHub Issues.
                    Let us know what you need, and we'll do our best to add it to the collection.
                </p>

                <div className="flex justify-center pt-4">
                    <Link href={LINKS.REQUEST_ICON} target="_blank">
                        <PrimaryButton className="flex items-center gap-2">
                            <GithubIcon className="h-5 w-5" />
                            Request on GitHub
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </Container>
    );
}
