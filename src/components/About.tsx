export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="src/assets/IMG_2333.jpg"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Bank Reconciliation
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                It is a real pain when I see accounting software not being applied correctly by bookkeepers
                because they can offer so much value and insight to a business. 

              </p>
       
              <p> This is why I want to work with a 
                maximum of 10 businesses. With employee size of 2-20. To help them make sure they understand their books,
                and correctly use accounting software such as Sage50 in a way most convieneint to them. I believe the bookkeeping is the 
                most important function of any business. When done accurately, it allows you to safely budget, forecast and acquire, be acquired.
                 </p>
                
             
                <p>
                For any business that is growing and in urgent need of a bookkeeper. Outsourcing to me will be your best bet as it will be cheaper,
                £499.00 per month - compared to hiring a full time bookkeeper. Please see below for the companies that I have worked with in the past
                5 years and education background.
                </p>
                
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
