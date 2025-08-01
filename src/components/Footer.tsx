import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Bookkeeping Serivce
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              m.adde.osman@gmail.com
            </a>

            

          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              +44 7553 971171
            </a>

            

          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Based in London
            </a>

            

          </div>

        <div>
            
          </div>

          <div>
            
          </div>
        </div>

        <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg"></h3>
        <h3 className="font-bold text-lg"></h3>
          <div>
          
         

            

            


            

          
            
            
          </div>

          <div>
            
          </div>

          <div>
            
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg"></h3>
          <div>
            
          </div>

          <div>
            
          </div>

          <div>
            
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg"></h3>
          <div>
            
          </div>

          <div>
            
          </div>

          <div>
            
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 Bookkeeping Service{" "}
        </h3>
      </section>
    </footer>
  );
};
