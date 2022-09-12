import { Coffee } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeCard";
import { CoffeeList, OurCoffesContainer } from "./styles";

export function OurCoffes() {
    return (
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeList>

        </OurCoffesContainer>
    )
}