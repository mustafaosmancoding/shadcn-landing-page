import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0.00,
    description:
      "20 minute free consultation.",
    buttonText: "+44 7553 971171",
    benefitList: [
      "20 minute free consultaion",
    ],
  },
  {
    title: "Office account bookkeeping and clean up",
    popular: 1,
    price: 499.00,
    description:
      "£250.00 retainer / to bring the office account bookkeeping upto date",
    buttonText: "+44 7553 971171",
    benefitList: [
      "Extend to 1 Year worth of bookkeeping",
      "Discussion of the reconciliation process and what can be done to improve it",
      "A system developments and creation of nominal codes",
      "Training of staff if required",
    ],
  },
  {
    title: "Legal three-way client account reconciliation and clean up",
    popular: 0,
    price: 999.00,
    description:
      "500.00 retainer / To bring the client account reconciliation up to date.",
    buttonText: "+44 7553 971171",
    benefitList: [
      "Extend to 1 Year worth of reconciliations",
      "Discussion of the reconciliation process and what can be done to improve it",
      "A system developments for consistant interval reconciliations",
      "Training to staff to continue reconciliations",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Packages{" "}
        </span>
        
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Want to have a quick discussion? Contact me on +44 7553 971171
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                  
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">£{pricing.price}</span>
                <span className="text-muted-foreground"></span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
