import Head from "next/head";
import Link from "next/link";

function TermsAndConditions() {
  return (
    <section className="mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-custom-gradient h-[100vh] w-[100vw] overflow-x-hidden flex flex-col space-y-5">
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <ol className="list-decimal pl-4">
        <li>
          <p className="text-lg pl-2">
            Delay on account of approvals and payments might lead to delay in
            project completion.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            All Subsidies will be applicable as per existing MNRE & Central
            Govt. Policies/Schemes.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            All orders as per existing Net-metering policy of the concerned
            DISCOM.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            Saving from solar usually take 2-3 months to reflect in your bill,
            depending on your DISCOM and it will levy fixed charges on net
            import.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            Working days exclude national holiday and Sunday.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            Advance payment is not refundable. All cheques / payments shall be
            made in the favour of KM Solar Energy and Engineers.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            Solar plant commissioning time is 45 days, excluding the time taken
            for bill correction or load enhancement.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            System price/quotation is only valid for 7 days. Any further delay
            on account of customer might lead to price escalation.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            EMI/Loan is subjected to T&C of bank/financial institution.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            All the disputes are subjected to Gwalior jurisdiction only.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            Interest @24% p.a. will be charged if payment is not made within due
            date.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            Goods once sold will not be taken back.
          </p>
        </li>
        <li>
          <p className="text-lg pl-2">
            All warranties of items will be provided by the concerning
            manufacturers as per their T&C.
          </p>
        </li>
      </ol>
      <p className="text-lg  text-blue-950">
        Please read the instruction manual for more details.
      </p>
      <Link
        href={"/"}
        className="px-6 py-2 md:w-[12%] rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        back to home
      </Link>
    </section>
  );
}

export default TermsAndConditions;
