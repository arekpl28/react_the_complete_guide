import { useAccordionContext } from "./Accordion";

function AccordionItem({ id, className, title, children }) {
  const { openItemId, openItem, closeItem, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  //   function handleClick() {
  // if (isOpen) {
  //   closeItem(id);
  // } else {
  //   openItem(id);
  // }
  //   }

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}

export default AccordionItem;
