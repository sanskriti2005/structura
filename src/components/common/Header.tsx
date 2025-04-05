import Link from "next/link";
import { Button } from '@/components/ui/button';

export default function Header() {
    return (
        <nav className="container flex items-center justify-between py-4 px-4 lg:px-8  mx-auto">
            <div><Link href='/'>Structura</Link></div>
            <div><Link href="/#pricing">Pricing</Link></div>
            <div>
                <Button>Sign-In</Button>
            </div>
        </nav>
    );
}