import { RegularText, TitleText } from "../../components/Typography";
import { OerderDetailsContainer, OrderConfirmedContainer } from "./styles";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg"
import { InfoWithIcon } from "../../components/InfoWithIcon/inedx";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
    const { colors } = useTheme();


    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado!</TitleText>
                <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>

            <section>
                <OerderDetailsContainer>
                    <InfoWithIcon
                        icon={<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Entrega em <strong>Avenida Osvaldo de Alverenga Filho, 3-53</strong>
                                <br />
                                Jardim Colonial - Bauru, SP
                            </RegularText>
                        }

                    />
                    <InfoWithIcon
                        icon={<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Previsão de entrega
                                <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }

                    />
                    <InfoWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                               Pagamento na entrega
                                <br />
                                <strong>Cartão de Crédito</strong>
                            </RegularText>
                        }

                    />


                </OerderDetailsContainer>
                <img src={confirmedOrderIllustration} />
            </section>
        </OrderConfirmedContainer>
    )
}