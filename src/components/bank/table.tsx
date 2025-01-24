import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bank } from "@/types/bank.type";
import { parseLocaleString } from "@/utils/utils";

interface BankTableProps {
  data: Bank[]
}

/* const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]; */

export function BankTable({ data }: BankTableProps) {
  const calculateTotal = () => {
    return data.reduce((total, bank) => total + bank.amount, 0);
  };

  return (
    <Table>
      <TableCaption>A list of your savings in your bank accounts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Bank</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((bank) => (
          <TableRow key={bank.id}>
            <TableCell className="font-medium">{bank.name}</TableCell>
            <TableCell>{bank.type}</TableCell>
            <TableCell>{parseLocaleString(bank.amount, true)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {parseLocaleString(calculateTotal(), true)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
