import React from "react";
import Chart from "react-apexcharts";
// import useDarkMode from "@/hooks/useDarkMode";
// import useWidth from "@/hooks/useWidth";
import { useSelector } from "react-redux";

const RadialsChart = ({ branchOverView, adminOverView, branch_id, adminTotal, branchTotal }) => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  console.log("overView ", adminOverView)
  console.log("branchOverView ", branchOverView)

  let adminSeries = [
    parseFloat(adminOverView?.data?.percentage_delivered),
    parseFloat(adminOverView?.data?.percentage_cancel),
    parseFloat(adminOverView?.data?.percentage_partial)
  ]
  let branchSeries = [
    parseFloat(branchOverView?.data?.percentage_delivered),
    parseFloat(branchOverView?.data?.percentage_cancel),
    parseFloat(branchOverView?.data?.percentage_partial)
  ]
  console.log("branchSeries", branchOverView?.data?.total_parcels);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            color: isDark ? "#CBD5E1" : "#475569",
          },
          value: {
            fontSize: "16px",
            color: isDark ? "#CBD5E1" : "#475569",
          },
          total: {
            show: true,
            label: "Total",
            color: isDark ? "#CBD5E1" : "#475569",
            formatter: function () {
              return branch_id ? branchTotal : adminTotal;
            },
          },
        },
        track: {
          background: "#E2E8F0",
          strokeWidth: "97%",
        },
      },
    },
    labels: ["Delivered", "Cancel", "Partial"],
    colors: ["#4669FA", "#FA916B", "#50C793"],
  };

  return (
    <div>
      <div className="py-[30px]">
        <Chart
          options={options}
          series={branch_id ? branchSeries : adminSeries}
          type="radialBar"
          height={width > breakpoints.md ? 340 : 250}
        />
      </div>

    </div>
  );
};

export default RadialsChart;
