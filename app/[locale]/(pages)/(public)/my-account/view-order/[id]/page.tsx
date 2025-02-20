import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ViewOrder() {
  return (
    <div className="container max-w-4xl">
      <Card className="!shadow-none !border-none">
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap gap-2 items-center justify-start">
            <div className="space-x-1">
              <span className="text-muted-foreground">Order #</span>
              <span className="font-medium">26350</span>
            </div>
            <div className="space-x-1">
              <span className="text-muted-foreground">was placed on</span>
              <span className="font-medium">February 20, 2025</span>
            </div>
            <div className="space-x-1">
              <span className="text-muted-foreground">and is currently</span>
              <span className="font-semibold">Failed</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">ORDER DETAILS</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="!p-0 text-[16px] text-gray-800 font-bold">
                    PRODUCT
                  </TableHead>
                  <TableHead className="text-right text-[16px] !p-0 text-gray-800 font-bold">
                    TOTAL
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-gray-800 font-bold">
                <TableRow>
                  <TableCell className="!px-0 !py-4 text-[12px]">ALYSSUM × 1</TableCell>
                  <TableCell className="text-right !px-0 text-primary text-[12px]">
                    0.750 KD
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <div className=" text-[12px]">ALFA SUPER 10 EC - 250 ml × 1</div>
                    <div className="text-xs text-muted-foreground">
                      Size: 250 ml
                    </div>
                  </TableCell>
                  <TableCell className="text-right !px-0 text-primary text-[12px]">
                    3.500 KD
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">Subtotal:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 text-primary">
                    4.250 KD
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">Shipping:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 text-primary">
                    2.000 KD
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">Payment method:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 ">
                    MyFatoorah - Cards
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">TOTAL:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 text-primary">
                    6.250 KD
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">ACTIONS:</span>
                  </TableCell>
                  <TableCell className=" !px-0 !py-4">
                    <div className="flex justify-end gap-2">
                      <Button className="bg-gray-200 text-black">CANCEL</Button>
                      <Button className="bg-gray-200 text-black">PAY</Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">BILLING ADDRESS</h3>
            <address className="space-y-1 text-sm">
              <p className="font-medium">MDSABBIR SHAFI</p>
              <p>APOLLO COUTR HOTEL</p>
              <p>Mubarak al kabeer</p>
              <p>+37515221255003</p>
              <p>shihab11231@gmail.com</p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold mb-2">SHIPPING ADDRESS</h3>
            <address className="space-y-1 text-sm">
              <p className="font-medium">MDSABBIR SHAFI</p>
              <p>APOLLO COUTR HOTEL</p>
              <p>Mubarak al kabeer</p>
            </address>
          </div>
        </div>
        </CardContent>
      </Card>
    </div>
  );
}
