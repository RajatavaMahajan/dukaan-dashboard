import Sidebar from "@/components/sidebar";
import {
  HelpCircle,
  Search,
  Megaphone,
  ChevronDown,
  ChevronRight,
  ArrowDownUp,
  Download
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const Dashboard = () => {
  return (
    <div className=" flex justify-center">
      <div className=" bg-[#1E2640] min-w-[204px] px-[10px] py-4 h-screen fixed top-0 left-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col ml-[204px]">
        <div className=" px-8 py-3 w-full h-auto flex justify-between border-b border-[#D9D9D9]">
          <div className=" flex items-center justify-start gap-4">
            <p className=" text-[#1A181E] font-medium text-xl">Payouts</p>
            <div className=" flex items-center text-[#4D4D4D] text-xs gap-[6px]">
              <HelpCircle className=" w-[14px] h-[14px]" />
              <p>How it works</p>
            </div>
          </div>
          <div className=" flex py-[9px] px-4 rounded-[6px] bg-[#F2F2F2] w-[400px] items-center justify-start gap-2">
            <div className=" w-4 h-4 flex items-center justify-center">
              <Search className=" w-full h-full text-[#808080]" />
            </div>
            <input
              type="text"
              placeholder=" Search features,tutorials,etc."
              className=" placeholder:text-[#808080] placeholder:text-[15px] placeholder:leading-[22px] placeholder:font-normal bg-transparent focus:outline-none"
            />
          </div>
          <div className=" flex gap-3 items-center">
            <div className=" w-10 h-10 rounded-full bg-[#E6E6E6] flex items-center justify-center">
              <Megaphone className=" w-5 h-5" />
            </div>
            <div className=" w-10 h-10 rounded-full bg-[#E6E6E6] flex items-center justify-center">
              <ChevronDown className=" w-5 h-5" />
            </div>
          </div>
        </div>
        <div className=" p-8 flex flex-col bg-[#fafafa]">
          <div className=" flex justify-between items-center">
            <p className=" text-xl font-medium">Overview</p>
            <div className=" w-[137px] h-9 py-[6px] px-[14px] rounded border border-[#D9D9D9] flex items-center justify-center gap-1">
              <p className=" text-base text-[#4D4D4D]">This Month</p>
              <ChevronDown className="text-[#4D4D4D] w-4 h-4" />
            </div>
          </div>
          <div className=" mt-6">
            <div className=" flex gap-5 w-full">
              <div className=" flex flex-col gap-0 w-full h-auto">
                <div className=" rounded-t-[8px] p-5 flex flex-col gap-4 bg-[#146EB4] text-white w-full">
                  <div className=" flex gap-2 items-center justify-start">
                    <p className="text-base">Next Payout</p>
                    <HelpCircle className=" w-4 h-4" />
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className=" text-[32px] font-medium leading-[38px]">
                    ₹2,312.23
                    </p>
                    <div className="text-white flex items-center">
                      <p className=" text-base leading-4 underline ">
                        23 orders
                      </p>
                      <ChevronRight className=" w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className=" flex justify-between items-center py-2 px-6 bg-[#0E4F82] rounded-b-[8px]">
                  <p className=" text-sm font-normal text-[#F2F2F2]">
                    Next payout date
                  </p>
                  <p className=" text-sm font-medium text-white">
                    Today, 04:00pm
                  </p>
                </div>
              </div>
              <div className=" rounded-[8px] p-5 flex flex-col gap-4 bg-white w-full h-[118px] shadow-sm">
                <div className=" flex gap-2 items-center justify-start">
                  <p className="text-base">Amount Pending</p>
                  <HelpCircle className=" w-4 h-4" />
                </div>
                <div className=" flex justify-between items-center">
                  <p className=" text-[32px] font-medium leading-[38px]">
                  ₹92,312.20
                  </p>
                  <div className="text-[#146EB4] flex items-center">
                    <p className=" text-base underline">13 orders</p>
                    <ChevronRight className=" w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className=" rounded-[8px] p-5 flex flex-col gap-4 bg-white w-full h-[118px] shadow-sm">
                <div className=" flex gap-2 items-center justify-start">
                  <p className="text-base">Amount Processed</p>
                  <HelpCircle className=" w-4 h-4" />
                </div>
                <div className=" flex justify-between items-center">
                  <p className=" text-[32px] font-medium leading-[38px]">
                  ₹23,92,312.19
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-8 flex flex-col gap-6">
            <div className=" w-fit flex flex-col gap-6">
              <p className=" text-xl font-medium">Transactions | This month</p>
              <div className=" flex justify-start gap-3 items-center">
                <button className=" px-4 py-[6px] rounded-[40px] bg-[#E6E6E6] text-sm font-medium text-[#808080]">
                  Payouts (22)
                </button>
                <button className=" px-4 py-[6px] rounded-[40px] bg-[#146EB4] text-sm font-medium text-white">
                  Refunds (22)
                </button>
              </div>
            </div>
            <div className=" p-3 rounded-[8px] flex flex-col gap-3 bg-white shadow-sm">
              <div className=" flex w-full items-center justify-between">
                <div className=" flex py-[10px] px-4 rounded-[4px] bg-transparent w-fit items-center justify-start gap-2 border border-[#D9D9D9]">
                  <div className=" w-[14px] h-[14px] flex items-center justify-center">
                    <Search className=" w-full h-full text-[#999999]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Order ID or transaction ID"
                    className=" placeholder:text-[#999999] placeholder:text-[14px] placeholder:leading-[20px] placeholder:font-normal bg-transparent focus:outline-none"
                  />
                </div>

                <div className=" w-auto flex gap-4">
                  <div className="py-[6px] px-[12px] rounded border border-[#D9D9D9] flex items-center justify-center gap-1">
                    <p className=" text-base text-[#4D4D4D]">Sort</p>
                    <ArrowDownUp className="text-[#4D4D4D] w-4 h-4" />
                  </div>

                  <div className="p-2 rounded border border-[#D9D9D9] flex items-center justify-center">
                    <Download className="text-[#4D4D4D] w-5 h-5" />
                  </div>
                </div>
              </div>
              <Table>
  <TableHeader className=" bg-[#F2F2F2] px-3 py-[10px] ">
    <TableRow className=" text-sm font-medium text-[#4D4D4D]">
      <TableHead>Order ID</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Transaction ID</TableHead>
      <TableHead>Refund Date</TableHead>
      <TableHead className="text-right">Order amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="text-sm font-normal">
      <TableCell className="text-[#146EB4] font-medium">#238904</TableCell>
      <TableCell><div className=" flex gap-2 justify-start items-center">
         <div className=" min-w-[10px] min-h-[10px] bg-[#17B31B] rounded-full"></div>
         <p>Processed</p>
        </div></TableCell>
      <TableCell>31634495747</TableCell>
      <TableCell>Today, 08:45 PM</TableCell>
      <TableCell className="text-right">₹1,125.00</TableCell>
    </TableRow>
    <TableRow className="text-sm font-normal">
      <TableCell className="text-[#146EB4] font-medium">#238904</TableCell>
      <TableCell><div className=" flex gap-2 justify-start items-center">
         <div className=" min-w-[10px] min-h-[10px] bg-[#17B31B] rounded-full"></div>
         <p>Processed</p>
        </div></TableCell>
      <TableCell>31634495747</TableCell>
      <TableCell>Today, 08:45 PM</TableCell>
      <TableCell className="text-right">₹1,125.00</TableCell>
    </TableRow>
    <TableRow className="text-sm font-normal">
      <TableCell className="text-[#146EB4] font-medium">#238904</TableCell>
      <TableCell><div className=" flex gap-2 justify-start items-center">
         <div className=" min-w-[10px] min-h-[10px] bg-[#17B31B] rounded-full"></div>
         <p>Processed</p>
        </div></TableCell>
      <TableCell>31634495747</TableCell>
      <TableCell>Today, 08:45 PM</TableCell>
      <TableCell className="text-right">₹1,125.00</TableCell>
    </TableRow>
    <TableRow className="text-sm font-normal">
      <TableCell className="text-[#146EB4] font-medium">#238904</TableCell>
      <TableCell><div className=" flex gap-2 justify-start items-center">
         <div className=" min-w-[10px] min-h-[10px] bg-[#17B31B] rounded-full"></div>
         <p>Processed</p>
        </div></TableCell>
      <TableCell>31634495747</TableCell>
      <TableCell>Today, 08:45 PM</TableCell>
      <TableCell className="text-right">₹1,125.00</TableCell>
    </TableRow>
    <TableRow className="text-sm font-normal">
      <TableCell className="text-[#146EB4] font-medium">#238904</TableCell>
      <TableCell><div className=" flex gap-2 justify-start items-center">
         <div className=" min-w-[10px] min-h-[10px] bg-[#17B31B] rounded-full"></div>
         <p>Processed</p>
        </div></TableCell>
      <TableCell>31634495747</TableCell>
      <TableCell>Today, 08:45 PM</TableCell>
      <TableCell className="text-right">₹1,125.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
