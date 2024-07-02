import Trail from './Trail';
import {useEffect} from "react";

interface Props {
    onAnimationEnd: () => void;
}

const WelcomeTrails = ({onAnimationEnd}: Props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onAnimationEnd) {
                onAnimationEnd();
            }
        }, 8000); // 假设动画持续8秒
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <Trail>
        <span>Welcome</span>
        <span>The</span>
        <span>Resume</span>
        </Trail>
    )
}

export default WelcomeTrails;

