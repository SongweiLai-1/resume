import Trail from './Trail';

interface Props {
    text?: string;
}

const WelcomeTrails = () => {

    return (
        <Trail>
        <span>Welcome</span>
        <span>The</span>
        <span>Resume</span>
        </Trail>
    )
}

export default WelcomeTrails;

