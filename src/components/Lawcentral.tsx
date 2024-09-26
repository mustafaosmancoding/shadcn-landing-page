export const Lawcentral = () => {
    return (
      <section
        id="about"
        className="container py-24 sm:py-32"
      >
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src="https://lawcentral.co.uk/wp-content/uploads/2023/11/Law-Central-Logo.jpg"
              alt=""
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Law Central{" "}
                  </span>
                  Legal Cashier
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  - Producing SRA compliant three-way reconciliations on Excel using DPS - 
                  Producing SRA three-way reconciliation for approval by senior partners - 
                  Reconstructing and reconciling probate Filo ledgers based on SRA requests - 
                  Conglomerating reconciliations between multiple LEAP in an SRA format - 
                  Helping the firm to identify errors and correct for physical and cashbook corrections - 
                  Recognising the limitations of LEAP when using for multiple entity purposes - 
                  Producing reconciliations based on more than £3m in client accounts
  
                </p>
              </div>
  
              
            </div>
          </div>
        </div>
      </section>
    );
  };
  