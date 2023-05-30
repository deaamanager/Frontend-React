"use client"
import {
   
    TabList,
    Tab,
    ProgressBar,
    Text,
    Flex,
    Metric,
    BadgeDelta,
    AreaChart,
  } from "@tremor/react";
import { motion } from "framer-motion";
  import { useState } from "react";

  const sales = [
    {
      Month: "Jan 21",
      Sales: 2890,
    },
    {
      Month: "Feb 21",
      Sales: 1890,
    },
    {
      Month: "Mar 21",
      Sales: 2190,
    },
    {
      Month: "Apr 21",
      Sales: 3470,
    },
    {
      Month: "May 21",
      Sales: 2170,
    },
    {
      Month: "Jun 21",
      Sales: 3170,
    },
    {
      Month: "Jul 21",
      Sales: 3490,
    },
    {
      Month: "Aug 21",
      Sales: 2680,
    },
    {
      Month: "Sep 21",
      Sales: 1290,
    },
    {
      Month: "Oct 21",
      Sales: 1010,
    },
    {
      Month: "Nov 21",
      Sales: 2350,
    },
    {
      Month: "Dec 21",
      Sales: 3350,
    },
  ];
  
  const products: { [key: string]: any } = [
    {
      title: "Product A",
      percentageValue: 38,
      metric: "$ 100,838",
      location: "A",
    },
    {
      title: "Product B",
      percentageValue: 34,
      metric: "$ 90,224",
      location: "A",
    },
    {
      title: "Product C",
      percentageValue: 28,
      metric: "$ 74,301",
      location: "A",
    },
    {
      title: "Product Z",
      percentageValue: 82,
      metric: "$ 108,799",
      location: "B",
    },
    {
      title: "Product E",
      percentageValue: 10,
      metric: "$ 13,268",
      location: "B",
    },
    {
      title: "Product N",
      percentageValue: 8,
      metric: "$ 10,614",
      location: "B",
    },
  ];
  
  const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;


function Progcess() {
 const [selectedLocation, setSelectedLocation] = useState("A");
  return (
    <div className=" w-[85%]  mx-auto px-4 bg-black py-3 my-0  rounded-xl drop-shadow-2xl"  >
      
    <Flex alignItems="start" className=" pt-4 pl-4">
     
   {/* <Metric>preformenc</Metric> */}
      <BadgeDelta   
        size="xl"  deltaType="moderateIncrease"  className=" hover:scale-105   ease-out cursor-pointer w-[150px] h-39 relative  brightness-[0.7]/ pointGreen transition-all duration-150  font-bold
      py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-30">
       Preformence
        </BadgeDelta>
    </Flex>
  
    <AreaChart
      className="mt-10 h-48 "
      data={sales}
      index="Month"
      categories={["Sales"]}
      colors={["green"]}
      showYAxis={false}
      showLegend={true}
      startEndOnly={true}
      valueFormatter={valueFormatter}
      showAnimation={true}
    />
    <TabList
    color="green"
      className="mt-4"
      defaultValue="A"
      onValueChange={(value) => setSelectedLocation(value)}
    >
      <Tab value="A" text="Location A" />
      <Tab value="B" text="Location B" />
    </TabList>
    {products
      .filter((item: any) => item.location === selectedLocation)
      .map((item: any) => (
        <div key={item.title} className="mt-4 space-y-2">
          <Flex>
            <Text className="text-sm">{item.title} </Text>
            <Text color="emerald">{`${item.percentageValue}% (${item.metric})`}</Text>
          </Flex>
          <div>
          <ProgressBar percentageValue={item.percentageValue} showAnimation={true}  color="green" className="progcessbar blur-[2px]  pointGreen my-5 brightness-[1.6] 
          
           transition-all duration-150 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[15px] before:right-[15px] before:top-0  before:transform  before:rounded-xl before:bg-[linear-gradient(#ffffffcc,#ffffff00)] before:opacity-90
          "  />
          </div>
    
        </div>
      ))}
   

  </div>
  )
}

export default Progcess;