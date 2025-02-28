import { mockApi } from "../../services/mock-api";
import { CreditCard } from "../dashboard/widgets/MyCardsWidget/CreditCard";

export const AllCreditCardsList: React.FC = () => {
  const cardsData = mockApi.getAllCards.read();

  const cardVariants = ["dark", "light", "blue"] as const;

  return (
    <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {cardsData.map((card, index) => (
        <div key={index} className="mx-auto">
          <CreditCard
            balance={card.balance}
            holder={card.holder}
            number={card.number}
            validThru={card.validThru}
            variant={cardVariants[index % cardVariants.length]}
          />
        </div>
      ))}
    </div>
  );
};
