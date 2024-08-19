import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "useAccordionContext must be used within an Accordion component"
    );
  }
  return ctx;
}

function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  //   function openItem(id) {
  //     setOpenItemId(id);
  //   }

  //   function closeItem(id) {
  //     setOpenItemId(null);
  //   }

  function toggleItem(id) {
    setOpenItemId((prev) => (openItemId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    // openItem,
    // closeItem,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;

export default Accordion;
