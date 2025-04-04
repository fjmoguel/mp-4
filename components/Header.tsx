'use client';
import Link from 'next/link';

export default function Header() {
    return (
        <header style={{backgroundColor: '#1c1c1c',color: 'white',padding: '16px 24px',textAlign: 'center',}}
        >
        <nav>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            CS391 Artist Explorer
            </Link>
        </nav>
        </header>
    );
}
