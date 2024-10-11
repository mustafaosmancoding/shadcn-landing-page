import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";



export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://todaysfamilylawyer.co.uk/wp-content/uploads/2022/02/SRA-logo-1.jpg"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">SRA Client Reconciliation</CardTitle>
          </div>
        </CardHeader>

        <CardContent>Have a three-way SRA compliant reconciliation completed.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="src/assets/IMG_2339.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Mustafa Osman</CardTitle>
          <CardDescription className="font-normal text-primary">
            Accounts Consultant
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
           
          </p>
        </CardContent>

        
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Client Reconciliation
            
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">£999.00</span>
            <span className="text-muted-foreground"> / £500.00 retainer</span>
          </div>

          <CardDescription>
          </CardDescription>
        </CardHeader>

      
        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
          <CardDescription className="font-normal text-primary">
            One off monthly reconciliation
          </CardDescription>
          <CardDescription className="font-normal text-primary">
            Feedback on accounts systems and SRA compliance
          </CardDescription>
          <CardDescription className="font-normal text-primary">
            Training for the month after to help you take charge
          </CardDescription>
            
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
    
          </div>
          <div>
            <CardTitle>Office Reconcilation</CardTitle>
            <CardDescription className="text-md mt-2">
              Have a monthly office reconciliation completed. 
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
