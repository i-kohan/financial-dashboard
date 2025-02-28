import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { ArrowRightIcon } from "../../../../icons/ArrowRIghtIcon";
import { SendIcon } from "../../../../icons/SendIcon";
import { mockApi } from "../../../../services/mock-api";
import { Contact } from "./Contact";

export const QuickTransferContent = () => {
  const contacts = mockApi.getContacts.read();
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [amount, setAmount] = useState<string>("");

  const swiperRef = useRef<SwiperRef>(null);

  const handleNextSlide = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  return (
    <div className="flex h-full w-full flex-col justify-between p-4">
      <div className="relative flex items-center">
        <div className="h-full w-full pr-20">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            allowTouchMove={false}
            breakpoints={{
              0: { slidesPerView: 2 },
              540: { slidesPerView: 3 },
              630: { slidesPerView: 4 },
              1536: { slidesPerView: 3 },
            }}
          >
            {contacts.map((contact) => (
              <SwiperSlide key={contact.id}>
                <Contact
                  {...contact}
                  selected={selectedContact === contact.id}
                  onSelect={() => setSelectedContact(contact.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          onClick={handleNextSlide}
          className="absolute right-0 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-2xl transition hover:bg-gray-100"
        >
          <ArrowRightIcon />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-body-sm text-light-blue whitespace-nowrap">
          Write Amount
        </span>

        <div className="relative">
          <Input
            variant="filled"
            type="number"
            placeholder="525.50"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="pr-25"
          />

          <Button
            icon={<SendIcon />}
            disabled={!selectedContact}
            onClick={() => alert(`Sending $${amount} to ${selectedContact}`)}
            className="absolute top-1/2 right-0 -translate-y-1/2"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};
