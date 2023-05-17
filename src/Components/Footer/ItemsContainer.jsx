import Item from "./Item";
import { WhyEmeelan, Platform, Solutions, Resources, Docs, Companys } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 sm:px-8 px-5 py-16">
      <Item Links={WhyEmeelan} title="Why Emeelan" />
      <Item Links={Platform} title="Platform" />
      <Item Links={Solutions} title="Solutions" />
      <Item Links={Resources} title="Resources"/>
      <Item Links={Docs} title="Docs" />
      <Item Links={Companys} title="Company" />
    </div>
  );
};

export default ItemsContainer;