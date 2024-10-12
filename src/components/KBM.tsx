export const KBM = () => {
    return (
      <section
        id="about"
        className="container py-24 sm:py-32"
      >
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNhwM0XmK6kW2S6-eATMFuTU-vbA-eBixvA&s"
              alt=""
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    KBM{" "}
                  </span>
                  Accounts Assistant
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Reviewing and following-up of aged debtors & receipts
                </p>

                <p>- Bank reconciliations and credit credit card reconciliations.</p>
                <p>- Monthly reporting; P&L, balance sheet.</p>
                <p>- VAT flat rate scheme.</p>
                <p>- VAT second-hand margin scheme.</p>
                <p>- VAT cash scheme.</p>
                <p>- Payroll; monthly pay slips p45 and p46.</p>
                <p>- Reconciliation of control accounts (debtors, creditors, VAT, PAYE, wage
                     control account, month end reconciliations and balance sheet reconciliations)</p>
                <p>- Accruals and prepayments.</p>
                <p>- Cash flow forecasting.</p>
                <p>- Director’s loan account.</p>
                <p>- Trial balance.</p>
                <p>- Financial analysis.</p>
              </div>
  
              
            </div>
          </div>
        </div>
      </section>
    );
  };