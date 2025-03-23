"use client"

import { Button } from "@/components/ui/button";
import { OrderService } from "@/services/api/order.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { getTotalQuantity, orderStatusesToReadableSentence } from "@/services/utility/utility.service";
import dayjs from "dayjs";
import SkeletonType2 from "@/components/skeleton/skeleton-type2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import 'dayjs/locale/ar';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function OrdersPage() {

  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);

  // Orders
  const [orderConfig, setOrderConfig] = useState({
    status: 'processing,pending,on-hold,completed,cancelled,refunded,failed'
  }); // page: 1, per_page: 10
  const [orders, setOrders] = useState<any[] | null>(null);
  const router = useRouter();
  const { t, i18n: { language } } = useTranslation("common");
  const [isLoading, setIsLoading] = useState(false);

  const getOrders = async () => {
    setIsLoading(true)
    setOrders(null);

    OrderService.Get(orderConfig, axiosInstanceWithoutLoader)
      .then(response => {
        setOrders(response || []);
      })
      .catch(error => {
        console.error(error);
      });

    setIsLoading(false)
  };

  function onOrderCancel(orderId: number) {
    OrderService.Cancel(orderId, axiosInstanceWithoutLoader)
      .then(response => {
        getOrders();
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderConfig]);

  console.log(orders, isLoading);


  return (
    <div>
      {/* Desktop View */}

      <div>
        {/* Desktop View */}
        {isLoading ? (
          <SkeletonType2 />
        ) : orders?.length === 0 ? (
          <Alert className="bg-[#E0B252] border-yellow-200">
            <AlertCircle className="h-4 w-4 !text-white mt-1" />
            <AlertDescription className="flex items-center gap-2 text-white">
              {t("orders.noOrder")}
              <Button variant="link" className="font-semibold text-white uppercase">
                {t("orders.browseProducts")}
              </Button>
            </AlertDescription>
          </Alert>
        ) : orders && orders?.length > 0 ? (
          <div className="hidden md:block overflow-x-auto">

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800 uppercase">{t("orders.order")}</th>
                  <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800 uppercase">{t("orders.date")}</th>
                  <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800 uppercase">{t("orders.status")}</th>
                  {/* <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">DELIVERY DETAILS</th> */}
                  <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800 uppercase">{t("orders.total")}</th>
                  <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800 pl-[100px] uppercase">{t("orders.actions")}</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => (
                  <tr className="border-b" key={index}>
                    <td className="px-4 py-4 text-[14px] font-semibold">#{order.id}</td>
                    <td className="px-4 py-4 text-black/60 text-[14px]">{dayjs(order?.date_created)
                      .locale(language === 'ar' ? 'ar' : 'en')
                      .format("MMMM D, YYYY")}</td>
                    <td className="px-4 py-4 text-black/60 text-[14px]">{t(`orderStatus.${order.status}`)}</td>
                    {/* <td className="px-4 py-4 text-black/60 text-[14px]">
                  <div>Delivery Date: February 21, 2025</div>
                  <div>Delivery Time: 02:00 PM - 06:00 PM</div>
                </td> */}
                    <td className="px-4 py-4">
                      <span className="text-[#ff9666]">{order.total} {order.currency_symbol}</span> {t("orders.for")} {getTotalQuantity(order?.line_items) || 0} {t("orders.items")}
                    </td>
                    <td className="px-4 py-4 pl-[100px] flex justify-end gap-2">
                      {/* <span>status: {order.status}</span><br></br>
                    <span>{order.needs_payment ? 'needs_payment' : 'no needs_payment'}</span><br></br>
                    <span>{order.needs_processing ? 'needs_processing' : 'no needs_processing'}</span><br></br> */}
                      {
                        (order.status === 'failed' || order.status === 'pending') && getTotalQuantity(order?.line_items) > 0 &&
                        <Link href={`/checkout/order-pay/${order.id}`}>
                          <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white uppercase">
                            {t("orders.pay")}
                          </Button>
                        </Link>
                      }
                      {
                        <Link href={`/my-account/view-order/${order.id}`}>
                          <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] font-semibold text-xs text-white uppercase mb-2">
                            {t("orders.view")}
                          </Button>
                        </Link>
                      }
                      {
                        // (order.status === 'processing' || order.status === 'pending') && order.is_editable &&
                        (order.status === 'failed' || order.status === 'pending') && getTotalQuantity(order?.line_items) > 0 &&
                        <Button onClick={() => onOrderCancel(order.id)} size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white uppercase">
                          {t("orders.cancel")}
                        </Button>
                      }
                    </td>
                  </tr>
                ))}
                {/* <tr className="border-b">
              <td className="px-4 py-4 text-[14px]">#27815</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">February 11, 2025</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">Failed</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">
                <div>Delivery Date: February 21, 2025</div>
                <div>Delivery Time: 02:00 PM - 06:00 PM</div>
              </td>
              <td className="px-4 py-4">
                <span className="text-[#ff9666]">36,000 KD</span> for 5 items
              </td>
              <td className="px-4 py-4 pl-[100px]">
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                  PAY
                </Button>
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white ml-2 mb-2">
                  VIEW
                </Button>
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                  CANCEL
                </Button>
              </td>
            </tr> */}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      {/* Mobile View */}
      {!isLoading && orders && orders?.length > 0 && (
        <div className="">
          {orders?.map((order, index) => (
            <div key={order.id} className="md:hidden space-y-4 pb-4">
              <div className="flex justify-between items-center text-[12.5px]">
                <span className="text-gray-800">{t("orders.date")}</span>
                <span>{dayjs(order?.date_created)
                  .locale(language === 'ar' ? 'ar' : 'en')
                  .format("MMMM D, YYYY")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 text-[12.5px] ">{t("orders.status")}</span>
                <span className="text-[12.5px]">{t(`orderStatus.${order.status}`)}</span>
              </div>

              <div className="flex justify-between items-center text-[14px]">
                <span className="text-gray-800 text-[12.5px] ">{t("orders.total")}</span>
                <span>
                  <span className="text-[#ff9666]">{order.total} {order.currency_symbol}</span> {t("orders.for")} {getTotalQuantity(order?.line_items) || 0} {t("orders.items")}
                </span>
              </div>
              <div className="flex justify-between items-start pb-3">
                <span className="text-gray-800 text-[12.5px] ">{t("orders.actions")}</span>
                <div className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/checkout/order-pay/${order.id}`}>
                      <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white uppercase">
                        {t("orders.pay")}
                      </Button>
                    </Link>
                    <Link href={`/my-account/view-order/${order.id}`}>
                      <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white uppercase">
                        {t("orders.view")}
                      </Button>
                    </Link>
                    <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white uppercase" onClick={() => onOrderCancel(order.id)}>
                      {t("orders.cancel")}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-lightGray opacity-30" />
            </div>
          ))}
        </div>
      )}
      {orders && orders?.length > 9 && <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] mt-7 text-white uppercase">
        {t("orders.next")}
      </Button>}
    </div>
  )
}

