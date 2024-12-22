import Link from 'next/link'

export function Navbar() {
    return (
        <nav className="navbar bg-base-100 shadow-lg px-4">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    Your Name
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
