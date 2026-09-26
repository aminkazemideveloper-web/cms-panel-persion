import Home from "../../components/templates/Home/Home";

import { useCompositions } from "./useCompositions";

function HomePage() {
  const { dashboardDatas } = useCompositions();
  return <Home items={dashboardDatas} />;
}

export default HomePage;
