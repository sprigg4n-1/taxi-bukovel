import BaseContainer from "../common/BaseContainer";
import LocaleSelector from "../locale/LocaleSelector";

const MainHeader = () => {
  return (
    <header className="bg-foreground text-primary-foreground py-2 lg:py-3">
      <BaseContainer>
        <div className="flex items-center justify-between">
          <span className="font-bold uppercase text-white">Taxi Bukovel</span>
          <LocaleSelector />
        </div>
      </BaseContainer>
    </header>
  );
};

export default MainHeader;
