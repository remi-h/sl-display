import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from 'next/link'

export function VersionLabel() {
    return (
        <div className="inline bg-white text-black p-1 absolute bottom-0 right-0">
            <Link href="https://github.com/remi-h/sl-display" className="flex gap-1 items-center">
                <span className="text-sm">Ver. 0.0.1</span>
                <GitHubLogoIcon />
            </Link>
        </div>
    );
}