import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Office
            </span>{" "}
            and
          </h1>{" "}
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              client
            </span>{" "}
            bookkeeping service
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Know and understrand how to run your books for your business. It will be the 
          most important thing you do for your business. At £499.00 per month outsource an experienced bookkeeper to complete (non exhaustive)
        </p>

        <p>Purchase ledger/ Sales ledger.</p>
        <p>Bank Reonciliation.</p>
        <p>VAT Return.</p>
        <p>DebtorsControl.</p>
        <p>Payroll Processing.</p>
        <p>Profit & Loss.</p>
        <p>Balance Sheet.</p>
        <p>Cash Flow.</p>
        <p>Cash Flow Forecast.</p>
        <p>Consultation and Support.</p>
        

        
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
