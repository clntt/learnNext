import React from "react";
import { fetchCustomers } from "@/app/lib/actions";
import { lusitana } from "@/app/ui/fonts";

const CustomerPage = async () => {
  const customers = await fetchCustomers();
  console.log(customers);

  const CustomerCard = ({
    name,
    email,
    id,
  }: {
    name: string;
    email: string;
    id: string;
  }) => (
    <>
      <div className="mb-2 p-2 border flex flex-col items-center rounded-lg">
        <h1 className="">{name}</h1>
        <p className="font-extralight">{email}</p>
      </div>
    </>
  );

  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers
      </h1>
      {customers?.map((customer) => (
        <CustomerCard
          key={customer.id}
          name={customer.name}
          email={customer.email}
          id={customer.id}
        />
      ))}
    </div>
  );
};

export default CustomerPage;
