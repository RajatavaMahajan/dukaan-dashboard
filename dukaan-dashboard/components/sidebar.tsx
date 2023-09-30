"use client";

import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Home,
  ClipboardList,
  LayoutGrid,
  Truck,
  BarChartBig,
  Wallet,
  BadgePercent,
  Users,
  Palette,
  Zap,
} from "lucide-react";

const routes = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Orders",
    icon: ClipboardList,
  },
  {
    label: "Products",
    icon: LayoutGrid,
  },
  {
    label: "Delivery",
    icon: Truck,
  },
  {
    label: "Analytics",
    icon: BarChartBig,
  },
  {
    label: "Payouts",
    icon: Wallet,
  },
  {
    label: "Discounts",
    icon: BadgePercent,
  },
  {
    label: "Audience",
    icon: Users,
  },
  {
    label: "Appearence",
    icon: Palette,
  },
  {
    label: "Plugins",
    icon: Zap,
  },
];
const Sidebar = () => {
  return (
    <div className=" text-white flex justify-center flex-col gap-6 w-full h-full">
      <div className=" w-[192px] h-auto flex gap-3">
        <div className=" min-w-[39px] min-h-[39px] rounded bg-gray-300"></div>
        <div className=" flex flex-col w-[108px]">
          <p className=" text-[15px] font-medium leading-[22px]">Nishyan</p>
          <p className=" opacity-80 text-[13px] font-normal leading-4 underline">
            Visit Store
          </p>
        </div>
        <div className=" flex items-center justify-center flex-1">
          <ChevronDown className=" text-white w-5 h-5 font-bold" />
        </div>
      </div>
      <div className=" flex flex-col gap-1 flex-1">
        {routes.map((route, index) => {
            
          return (
            <div
              className={cn(" px-4 py-2 rounded flex gap-3 text-sm items-end justify-start cursor-pointer hover:bg-[#343b53]  opacity-70",route.label==='Payouts' && ' opacity-100 bg-[#343b53]')}
              key={index}
            >
              <route.icon />
              <p className="">{route.label}</p>
            </div>
          );
        })}
      </div>
      
      <div className=" w-[192px] h-auto flex gap-3 bg-[#353C53] rounded py-[6px] px-3">
        <div className="p-[6px] flex items-center justify-center bg-white bg-opacity-10 rounded">
            <Wallet className=" w-6 h-6"/>
        </div>
        <div className=" flex flex-col">
            <p className=" text-[13px] leading-[16px] font-normal opacity-80">Available Credits</p>
            <p className=" text-base font-medium">220.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
