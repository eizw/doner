import OrderCard from "./orderCard";
import { Button } from "@/components/ui/button";


const orderList = [
  {
    id: "1",
    name: "ORDER-3910480139132",
    amount: 65.00,
    provider: "MPH Bookstore",
    items: [
        {
            name: "Stationaries",
            price: 3.00,
            count: 5
        },
        {
            name: "Biology Book",
            price: 10.00,
            count: 5
        },
    ]
  },
  {
    id: "2",
    name: "ORDER-22918491283442",
    amount: 50.00,
    provider: "Faris Maju",
    items: [
        {
            name: "Mi Goreng",
            price: 5.00,
            count: 10
        },
    ]
  },
];

export default function ExplorePage() {
  return (
    <div className="flex flex-col p-6 gap-3 h-screen max-h-screen">
      <div className="flex flex-row mx-3 ">
        <h1 className="font-semibold mr-auto flex items-center text-2xl">
          Explore Campaigns
        </h1>
        <Button>
          Sort
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </Button>
      </div>

      <div className="flex flex-col gap-6 h-full mt-2">
        {orderList.map((order, index) => {
          return <OrderCard key={index} order={order}></OrderCard>;
        })}
      </div>
    </div>
  );
}
