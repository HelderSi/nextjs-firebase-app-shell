'use client'

import 'flowbite'; // NOTE: Flowbite needs to be imported at least in one 'use client' component
import Nav from './nav';
import Aside from './aside';

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <Nav />
            <Aside />
            <main className="p-4 md:ml-64 h-auto pt-20">
                {children}
            </main>
        </div>
    )
}


