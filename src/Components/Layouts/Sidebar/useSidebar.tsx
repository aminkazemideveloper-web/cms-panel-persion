import type { DetailesType } from "../../../types/detailes-type";

import MingcuteUser1Fill from "../../../icons/MingcuteUser1Fill";
import MingcuteUserQuestionFill from "../../../icons/MingcuteUserQuestionFill";
import MingcuteNewdotLine from "../../../icons/MingcuteNewdotLine";

export const useSidebar = () => {
  const detailesData: DetailesType[] = [
    {
      id: 1,
      label: "نام",
      value: "امین",
      icon: <MingcuteUser1Fill />,
      color: "yellow",
    },
    {
      id: 2,
      label: " خانوادگی نام",
      value: "کاظمی",
      icon: <MingcuteUserQuestionFill />,
      color: "blue",
    },
    {
      id: 3,
      label: " تعداد دوره",
      value: 35,
      icon: <MingcuteNewdotLine />,
      color: "red",
    },
  ];

  return {
    detailesData,
  };
};
