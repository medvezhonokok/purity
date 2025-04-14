import React, {useState, useEffect} from 'react';
import './TypingComponent.css';
import useContentWidth from "../../hooks/useContentWidth";


const TypingComponent = ({isMobile = false}) => {
    const fullText = "/// Перечень услуг";
    const [displayText, setDisplayText] = useState("");
    const width = useContentWidth();
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let delayTypingAnim = null;
        const startTimeout = setTimeout(() => {
            setIsTyping(true)
            let index = 0;

            const typeCharacter = () => {
                if (index < fullText.length - 1) {
                    setDisplayText(prev => prev + fullText[index]);
                    index++;

                    const randomDelay = Math.floor(Math.random() * (250 - 100 + 1)) + 30;
                    setTimeout(typeCharacter, randomDelay);
                } else {
                    delayTypingAnim = setTimeout(() => setIsTyping(false), 500)
                }
            };

            typeCharacter();
        }, 1500);

        return () => {
            clearTimeout(startTimeout)
            clearTimeout(delayTypingAnim)
        }
    }, []);

    return <div className="typing-container" style={{width}}>
        <div className="typing-text">
            {displayText}
            <span className={isTyping ? "" : "cursor"}>|</span>
        </div>
    </div>
};

export default TypingComponent;
