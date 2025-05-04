import { useEffect, useState } from "react";
import parse from "html-react-parser";

interface TypewriterHTMLProps {
    html: string;
    speed?: number;
}

const TypeWritter: React.FC<TypewriterHTMLProps> = ({ html, speed = 25 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedHtml, setDisplayedHtml] = useState("");

    useEffect(() => {
        if (currentIndex < html.length) {
            const timeout = setTimeout(() => {
                setDisplayedHtml(html.slice(0, currentIndex + 1));
                setCurrentIndex((i) => i + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, html, speed]);

    return (
        <div className="prose prose-invert max-w-full overflow-hidden">
            {parse(displayedHtml)}
        </div>
    )
}

export default TypeWritter