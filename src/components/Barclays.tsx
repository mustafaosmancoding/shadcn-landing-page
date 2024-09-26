export const Barclays = () => {
    return (
      <section
        id="about"
        className="container py-24 sm:py-32"
      >
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src="https://therockbury.com/wp-content/uploads/2014/03/barclays-logo.jpg"
              alt=""
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Barclays Work Experience{" "}
                  </span>
                  Cashier
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  - Processing payments and withdrawals on tills - 
                  Authorising and evaluating overdraft and loans - 
                  Dealing with customer enquiries - 
                  Promotion of products and services - 
                  Financial advice on savings and ISA - 
                  Mystery shopping - 
                  Leading money matter sessions
  
                </p>
              </div>
  
              
            </div>
          </div>
        </div>
      </section>
    );
  };