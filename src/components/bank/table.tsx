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
            <TableCell className="font-medium text-left">{bank.name}</TableCell>
            <TableCell className="text-left">{bank.type}</TableCell>
            <TableCell className="text-right">
              {parseLocaleString(bank.amount, true)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2} className="text-left">
            Total
          </TableCell>
          <TableCell className="text-right">
            {parseLocaleString(calculateTotal(), true)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
