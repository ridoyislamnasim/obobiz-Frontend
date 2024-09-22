// import useDarkmode from "@/hooks/useDarkMode";
import { useGetAllParcelListsByPaginationQuery } from "@/store/api/app/Parcel/allParcelListApiSlice";
import { useGetMerchantsByPaginationAndSearchesQuery } from "@/store/api/app/Team/Merchant/merchantApiSLice";
import { useGetRidersByPaginationQuery } from "@/store/api/app/Team/Rider/riderApiSlice";
import { useGetBranchesByPaginationQuery, useGetMerchantByBranchIdQuery, useGetRiderByBranchIdQuery } from "@/store/api/app/Team/branch/branchApiSlice";
import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const shapeLine1 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00EBFF"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine2 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FB8F65"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine3 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#5743BE"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

const statistics = [
  {
    name: shapeLine1,
    title: "Totel revenue",
    count: "3,564",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
  },
  {
    name: shapeLine2,
    title: "Products sold",
    count: "564",
    bg: "bg-[#FFEDE5] dark:bg-slate-900	",
  },
  {
    name: shapeLine3,
    title: "Growth",
    count: "+5.0%",
    bg: "bg-[#EAE5FF] dark:bg-slate-900	",
  },
];





const GroupChart1 = () => {
  const { isAuth, auth } = useSelector((state) => state.auth);
  const [isDark] = useDarkmode();
  console.log("isDark", isDark);

  const { data: adminBranch, } = useGetBranchesByPaginationQuery({});
  const { data: adminMerchant, } = useGetMerchantsByPaginationAndSearchesQuery({});
  const { data: adminRider } = useGetRidersByPaginationQuery({});

  const { data: branchTotalMerchant } = useGetMerchantsByPaginationAndSearchesQuery({
    // status: 1, 
    branch_id: auth?.user?.user_info?.branch_id
  })

  const { data: branchActiveMerchant } = useGetMerchantsByPaginationAndSearchesQuery({
    status: 1,
    branch_id: auth?.user?.user_info?.branch_id
  })

  const { data: branchRider } = useGetRiderByBranchIdQuery(auth.user.user_info.branch_id);





  const { data: pickUpParcel, } =
    useGetAllParcelListsByPaginationQuery({

      pickup_branch_id: auth?.user?.user_info?.branch_id,
      status: [1, 4, 5, 6, 7, 8, 9, 10, 11]
    });


  const { data: deliveryParcel } = useGetAllParcelListsByPaginationQuery(
    {
      delivery_branch_id: auth?.user?.user_info?.branch_id,
      status: [14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      delivery_type: []
    }
  );


  const { data: returnParcel } =
    useGetAllParcelListsByPaginationQuery({
      status_start: 25,
      status_end: 36,
      delivery_type: [4],
      return_branch_id: auth?.user?.user_info?.branch_id

    });



  return (
    <>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4" >

        {/* FOR ADMIN START _________________________________ */}
        {auth?.user?.user_type === 'admin' && <div className="flex items-center space-x-6 rtl:space-x-reverse bg-[#E5F9FF] p-4 rounded-md">
          <div className="flex-1">
            <div className={` text-sm mb-1 font-medium ${isDark ? "text-black-500" : "text-black-500"}`}>
              Total Branch
            </div>
            <div className="text-slate-900 dark:text-black-500 text-lg font-medium">
              {adminBranch?.data?.pagination?.total}
            </div>
          </div>
        </div>}

        {auth?.user?.user_type === 'admin' && <div className="flex items-center space-x-6 rtl:space-x-reverse bg-[#E5F9FF] p-4 rounded-md">
          <div className="flex-1">
            <div className={` text-sm mb-1 font-medium ${isDark ? "text-black-500" : "text-black-500"}`}>
              Total Merchant
            </div>
            <div className="text-slate-900 dark:text-black-500 text-lg font-medium">
              {adminMerchant?.data?.pagination?.total}
            </div>
          </div>
        </div>}

        {auth?.user?.user_type === 'admin' && <div className="flex items-center space-x-6 rtl:space-x-reverse bg-[#E5F9FF] p-4 rounded-md">
          <div className="flex-1">
            <div className={` text-sm mb-1 font-medium ${isDark ? "text-black-500" : "text-black-500"}`}>
              Total Rider
            </div>
            <div className={`  text-lg font-medium ${isDark ? "text-black-500" : "text-slate-900"}`}>
              {adminRider?.data?.pagination?.total}
            </div>
          </div>
        </div>}
        {/* FOR ADMIN END____________________________________________________ */}


        {auth?.user?.user_type === 'branch' && <div className="flex items-center space-x-6 rtl:space-x-reverse bg-[#E5F9FF] p-4 rounded-md">
          <div className="flex-1">
            <div className={` text-sm mb-1 font-medium ${isDark ? "text-black-500" : "text-black-500"}`}>
              Total Merchant
            </div>
            <div className="text-slate-900 dark:text-black-500 text-lg font-medium">
              {branchTotalMerchant?.data?.pagination?.total}
            </div>
          </div>
        </div>}

        {auth?.user?.user_type === 'branch' && <div className="flex items-center space-x-6 rtl:space-x-reverse bg-[#FFEDE5] p-4 rounded-md">
          <div className="flex-1">
            <div className={` text-sm mb-1 font-medium ${isDark ? "text-black-500" : "text-black-500"}`}>
              Active Merchant
            </div>
            <div className="text-slate-900 dark:text-black-500 text-lg font-medium">
              {branchActiveMerchant?.data?.pagination?.total}
            </div>
          </div>
        </div>}


        {auth?.user?.user_type === 'branch' && <div className="flex items-center space-x-6 rtl:space-x-reverse bg-[#EAE5FF] p-4 rounded-md">
          <div className="flex-1">
            <div className={` text-sm mb-1 font-medium ${isDark ? "text-black-500" : "text-black-500"}`}>
              Total Rider
            </div>
            <div className={`  text-lg font-medium ${isDark ? "text-black-500" : "text-slate-900"}`}>
              {branchRider?.data?.length}
            </div>
          </div>
        </div>}



      </div>

    </>
  );
};

export default GroupChart1;
