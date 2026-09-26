import styels from "./Detailes.module.css";
import type { DetailesType } from "../../../../../types/detailes-type";
import clsx from "clsx";

type Props = {
  detail: DetailesType;
};

const Detailes = ({ detail }: Props) => {
  const { color, icon, label, value } = detail;

  return (
    <div className={styels.detail}>
      <div className={styels.label}>
        <span className={styels.icon}> {icon} </span>
        <span className={styels.text}> {label}</span>
      </div>
      <span className={clsx(styels.value, color)}>{value}</span>
    </div>
  );
};

export default Detailes;
