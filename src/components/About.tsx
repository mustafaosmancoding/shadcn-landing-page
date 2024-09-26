export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_3c7a9033c0b17d66b498c13c9fef0a10/leap.png"
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
                I want to give you business owners confidence 
                when it comes to handling your books. Instead of
                completing a course on bookkeeping - which can be
                overwhelming if you do not have
                a finance background. The best way for you to understand your
                books is to start with a bank reconciliation. 
                This will be the most important thing you do
                for your business. It will all start with me
                completing the current bank reconciliation for your 
                business.

              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
