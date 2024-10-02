// src/app/page.tsx

import { Navbar } from '@/components/Navbar';
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { Footer } from "@/components/Footer"
// import AnimatedComponent from '@/components/AnimatedComponent';

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}