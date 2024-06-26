import CoreConcept from "./CoreConcept";
import Section from "./Section";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
  return (
    <Section title="Core Concept" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem, key) => (
          <CoreConcept key={key} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
