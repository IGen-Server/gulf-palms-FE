"use client";

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
import { OrderService } from "@/services/api/order.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import moment from "moment";
import { orderStatusesToReadableSentence } from "@/services/utility/utility.service";

export default function ViewOrder() {
  const { orderId } = useParams();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const [order, setOrder] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await OrderService.GetById(
          +orderId,
          axiosInstanceWithLoader
        );
        setOrder(response);

        console.log(response);

      } catch (error) {
        console.error(error);
      }
    };

    getOrder();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container max-w-4xl">
      <Card className="!shadow-none !border-none">
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap gap-2 items-center justify-start">
            <div className="space-x-1">
              <span className="text-muted-foreground">Order #</span>
              <span className="font-medium">{order?.id}</span>
            </div>
            <div className="space-x-1">
              <span className="text-muted-foreground">was placed on</span>
              <span className="font-medium">{moment(order?.date_created).format("MMMM D, YYYY")}</span>
            </div>
            <div className="space-x-1">
              <span className="text-muted-foreground">and is currently</span>
              <span className="font-semibold">{orderStatusesToReadableSentence(order?.status)}</span>
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
                {order?.line_items.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell className="!px-0 !py-4">
                      <div className="text-sm">{item.name} x {item.quantity}</div>
                      <div className="text-xs text-muted-foreground">
                        Size: 250 ml
                      </div>
                    </TableCell>
                    <TableCell className="text-right !px-0 text-primary text-sm">
                      {item.total} KD
                    </TableCell>
                  </TableRow>
                ))}


                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">Subtotal:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 text-primary">
                    {order?.total} KD
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">Payment method:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 ">
                    {order?.payment_method_title}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">TOTAL:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 text-primary">
                    {order?.total} KD
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">NOTE:</span>
                  </TableCell>
                  <TableCell className="text-right !px-0 text-primary">
                    {order?.customer_note}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="!px-0 !py-4">
                    <span className="font-bold">ACTIONS:</span>
                  </TableCell>
                  <TableCell className=" !px-0 !py-4">
                    <div className="flex justify-end gap-2">
                      <Button className="bg-gray-200 text-black" onClick={() => router.push(`/checkout/order-pay/${orderId}`)}>PAY</Button>
                      <Button className="bg-gray-200 text-black">CANCEL</Button>
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
                <p className="font-medium">{order?.billing.first_name} {order?.billing.last_name}</p>
                <p>{order?.billing.company}</p>
                <p>{order?.billing.address_1}</p>
                <p>{order?.billing.address_2}</p>
                <p className="">{order?.billing.city}</p>
                <p className="">{order?.billing.state}</p>
                <p className="">{order?.billing.postcode}</p>
                <p className="">{order?.billing.country}</p>
                <p className="">{order?.billing.phone}</p>
                <p>{order?.billing.email}</p>
              </address>
            </div>
            <div>
              <p className="font-medium">{order?.shipping.first_name} {order?.shipping.last_name}</p>
              <p>{order?.shipping.company}</p>
              <p>{order?.shipping.address_1}</p>
              <p>{order?.shipping.address_2}</p>
              <p className="">{order?.shipping.city}</p>
              <p className="">{order?.shipping.state}</p>
              <p className="">{order?.shipping.postcode}</p>
              <p className="">{order?.shipping.country}</p>
              <p className="">{order?.shipping.phone}</p>
              <p>{order?.shipping.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
