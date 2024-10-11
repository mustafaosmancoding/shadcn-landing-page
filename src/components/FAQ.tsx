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
    question: "What is the difference between bookkeeping and accounting?",
    answer: "Bookkeeping involves the daily recording of financial transactions, including sales, expenses, and payroll. Accounting, on the other hand, interprets and analyzes the financial data compiled by bookkeepers to provide insights and prepare financial statements, tax returns, and financial strategies. Bookkeeping is the foundation, while accounting is more focused on analysis and reporting.",
    value: "item-1",
  },
  {
    question: "Why should I outsource my bookkeeping?",
    answer:
      "Outsourcing your bookkeeping can save you time, reduce stress, and ensure accuracy in your financial records. It allows you to focus on running your business while experts manage your finances. Additionally, outsourcing often reduces costs compared to hiring an in-house bookkeeper and ensures you stay compliant with UK tax regulations.",
    value: "item-2",
  },
  {
    question:
      "What bookkeeping services do you offer?",
    answer:
      "My services include: Recording transactions (sales, purchases, receipts and payments) - Bank reconciliations - Payroll processing - Financial reporting and statements - Budgeting and cashflow forecasting - Tailored packages" ,
    value: "item-3",
  },
  {
    question: "How often should my books be updated?",
    answer: "For most businesses, it’s recommended to update your books at least monthly. However, depending on your business size and transaction volume, weekly or even daily updates may be more appropriate. Regular updates ensure you have a clear understanding of your cash flow and financial health at all times.",
    value: "item-4",
  },
  {
    question:
      "How secure is my financial data with your bookkeeping service?",
    answer:
      "Security and confidentiality of financial informatino is a top priority. Only authorised personnel will have access to your data. ",
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
          Contact 
        </a>
      </h3>
    </section>
  );
};
