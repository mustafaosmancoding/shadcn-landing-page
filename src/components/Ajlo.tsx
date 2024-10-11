export const Ajlo = () => {
    return (
      <section
        id="about"
        className="container py-24 sm:py-32"
      >
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src="https://www.reviewsolicitors.co.uk/static/photos/branch_24785ePqBGDUTCd20221026120818.png.square"
              alt=""
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Alexander JLO Solicitors{" "}
                  </span>
                  Legal Cashier
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Helping the firm migrate to LEAP CMS and Xero.
                </p>
                <p>- Advising on how to set up cards and payment types; CHAPS.</p>
                <p>- Advising how to carry out reconciliations between LEAP and Xero.</p>
                <p>- Advising on how to use Excel in comparison to manual entries.</p>
                <p>- Advising on how to set up new conveyancing matters to the CCT.</p>

              </div>
  
              
            </div>
          </div>
        </div>
      </section>
    );
  };
  