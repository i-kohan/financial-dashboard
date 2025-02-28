import { mockApi } from "../../../../services/mock-api";
import { CreditCard } from "./CreditCard";

export const CardsList: React.FC = () => {
  const cardsData = mockApi.getCards.read();

  const cardVariants = ["dark", "light", "blue"] as const;

  return (
    <div className="flex justify-between gap-4 overflow-x-clip md:overflow-visible">
      {cardsData.map((card, index) => (
        <CreditCard
          key={index}
          balance={card.balance}
          holder={card.holder}
          number={card.number}
          validThru={card.validThru}
          variant={cardVariants[index % cardVariants.length]}
        />
      ))}
    </div>
  );
};
