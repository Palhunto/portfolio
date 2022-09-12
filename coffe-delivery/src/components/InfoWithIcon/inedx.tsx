import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconsProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}

export function InfoWithIcon( { icon, text, iconBg }: InfoWithIconsProps) {
    return (
        <InfoWithIconContainer>
            <IconContainer iconBg={iconBg}>{icon}</IconContainer>
            {typeof text === 'string' ? <p>{text}</p> : text}
        </InfoWithIconContainer> 
    )
}
