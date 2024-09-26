import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is a bank reconciliation?",
    answer: "A bank reconciliation is a method that involves matching internal records such as cash books with external records such as bank statements.",
    value: "item-1",
  },
  {
    question: "Can bank reconciliations spot errors in accounting transactions?",
    answer:
      "Yes. Bank reconciliations can spot errors to do with mis postings on cashbooks as well as any extra monies paid or recieved.",
    value: "item-2",
  },
  {
    question:
      "What is a client account (three-way) reconciliation?",
    answer:
      "A client account reconciliation is the reconciliation between the cashbook, matter/ledger balance and bank statements related to the client account.",
    value: "item-3",
  },
  {
    question: "What type of reconciliation do the SRA require?",
    answer: "The SRA require three-way reconciliations at monthly intervals. As per the SRA Accounts Rules.",
    value: "item-4",
  },
  {
    question:
      "What is the difference between an office reconcilaition and a client reconciliation?",
    answer:
      "The main difference between an office reconciliation and a client reconciliation is that a client reconciliation accounts for balances carried forward from client ledgers.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
