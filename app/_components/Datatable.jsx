import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleCheck } from "lucide-react";

const Datatable = () => {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">FEATURES</TableHead>
          <TableHead className="w-[100px]">FREE</TableHead>
          <TableHead className="w-[100px]">STANDARD</TableHead>
          <TableHead className="w-[100px]">BUSINESS</TableHead>
          <TableHead className="w-[100px]">ENTERPRISE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* 11111111 */}
        <TableRow className="justify-center items-center">
          {" "}
          <TableCell className="font-medium text-center">
            {" "}
            Unlimited Access
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
        </TableRow>
        {/* 2222222 */}
        <TableRow className="justify-center items-center">
          {" "}
          <TableCell className="font-medium text-center">
            No Monthly Fee
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
        </TableRow>
        {/* 3333333 */}
        <TableRow className="justify-center items-center">
          {" "}
          <TableCell className="font-medium text-center">
            Priority Support
          </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
        </TableRow>
        {/* 44444444 */}
        <TableRow className="justify-center items-center">
          {" "}
          <TableCell className="font-medium text-center">
            Value For Money
          </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
        </TableRow>
        {/* 5555555555555 */}
        <TableRow className="justify-center items-center">
          {" "}
          <TableCell className="font-medium text-center">
            Unlimited Storage
          </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
        </TableRow>
        {/* 5555555555555 */}
        <TableRow className="justify-center items-center">
          {" "}
          <TableCell className="font-medium text-center">
            Live Meeting
          </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center"> </TableCell>
          <TableCell className="font-medium text-center">
            {" "}
            <CircleCheck fill="orange" color="white" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Datatable;
