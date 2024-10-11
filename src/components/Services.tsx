import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Taxation",
    description:
      "- Self Employed Tax - VAT - Corporation Tax - NI - Personal Tax/ Director's - Chargeable Gains Tax - Tax Avoidance Schemes - Tax On Dividends.",
    
  },
  {
    title: "Financial Accounting",
    description:
      "- Bookkeeping - Trial Balance - Profit & Loss - Balance Sheet - Cashflow.",
    
  },
  {
    title: "Econometrics & Statistics",
    description:
      "Using econometric models and statistics to determine the probability of outcomes.",
    
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Eduction{" "}
            </span>
            Brunel University London
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            First Class Honours in Economics and Accounting BSc - Class of 2020
          </p>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Relevant Modules
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/mustafaosmancoding/shadcn-landing-page/refs/heads/main/src/assets/image0.jpeg"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
