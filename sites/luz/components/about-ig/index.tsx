import { useRouter } from 'next/router';
import Hero from './hero';
// import Feature from './feature';
import { InteractiveLogo } from '@components/InteractiveLogo';

export default function About() {
    const { route } = useRouter();
    const locate = route.includes('/en') ? '/en' : '/de';

    return (
        <>
            <InteractiveLogo />
            <Hero />
            {/* {Feature(locate)} */}
        </>
    );
}
