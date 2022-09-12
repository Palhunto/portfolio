import { CompleteOrderForm } from "./componentes/CompleteOrderForm";
import { SelectedCoffees } from "./componentes/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
    return(
        <CompleteOrderContainer className="container">
            <CompleteOrderForm />
            <SelectedCoffees />
        </CompleteOrderContainer>
    )
}
