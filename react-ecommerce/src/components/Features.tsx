import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FC } from "react";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Entrega Gratis",
    desc: "Para todos os pedidos",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Devoluções e Reembolsos",
    desc: "Dinheiro de volta garantido",
  },
  {
    icon: <TbDiscount2 className="text-4xl" />,
    title: "Discontos para membros",
    desc: "Acima de $50",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Suporte 24h",
    desc: "Contate o suporte a qualquer hora",
  },
];

const Features: FC = () => (
  <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
    {data.map((item) => (
      <FeatureCard
        key={item.title}
        icon={item.icon}
        title={item.title}
        desc={item.desc}
      />
    ))}
  </div>
);

export default Features;
