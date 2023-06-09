"use client"
import {
   
    TabList,
    Tab,
    ProgressBar,
    Text,
    Flex,
    AreaChart,
  } from "@tremor/react";
  import { useState } from "react";

  const sales = [
    {
      Month: "Jan",
      React_Redux: 65,
      Frontend_3D: 90,
      Nodejs: 75,
      Database_and_APIs: 65,
    },
    {
      Month: "Feb",
      React_Redux: 65,
      Frontend_3D: 85,
      Nodejs: 95,
      Database_and_APIs: 80,
      },
    {
      Month: "Mar",
      React_Redux: 70,
      Frontend_3D: 90,
      Nodejs: 75,
      Database_and_APIs: 45,
    },
    {
      Month: "Apr",
      React_Redux: 55,
      Frontend_3D: 65,
      Nodejs: 95,
      Database_and_APIs: 85,
    },
    {
      Month: "May",
      React_Redux: 85,
      Frontend_3D: 90,
      Nodejs: 65,
      Database_and_APIs: 45,
    },
    {
      Month: "Jun",
      React_Redux: 65,
      Frontend_3D: 70,
      Nodejs: 95,
      Database_and_APIs: 75,
    },
   
  ];
  
  const products: { [key: string]: any } = [
    {
      title: "Code Efficiency",
      percentageValue: 99,
      metric: "DevSecOps",
      location: "A",
    },
    {
      title: "Resource Optimization",
      percentageValue: 95,
      metric: "APM",
      location: "A",
    },
    {
      title: "Responsiveness",
      percentageValue: 95,
      metric: "Something",
      location: "A",
    },
    {
      title: "Page-Speed",
      percentageValue: 99,
      metric: "Full Visible",
      location: "B",
    },
    {
      title: "User-Experience & Interface",
      percentageValue: 97,
      metric: "UX-UI",
      location: "B",
    },
    {
      title: "search engine optimization",
      percentageValue: 99,
      metric: "SEO",
      location: "B",
    },
  ];
  
  const valueFormatter = (number: number) =>
    ` ${Intl.NumberFormat("US").format(number).toString()} %`;


function Progcess() {
 const [selectedLocation, setSelectedLocation] = useState("A");
  return (
    <div className=" w-[85%]  mx-auto px-4 bg-black py-3 my-0  rounded-xl drop-shadow-2xl"  >
      
   {/*
    <Flex alignItems="start" className=" pt-4 pl-4">
   <Metric>preformenc</Metric> 
     <BadgeDelta   
        size="xl"  deltaType="moderateIncrease"  className=" hover:scale-105   ease-out cursor-pointer w-[150px] h-39 relative  brightness-[0.7]/ pointGreen transition-all duration-150  font-bold
      py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-30">
       Preformence
        </BadgeDelta>
    </Flex>
   */} 
  
    <AreaChart
      className="xl:mt-2 h-[16rem] "
      data={sales}
      index="Month"
      categories={["Frontend_3D","Database_and_APIs","Nodejs"]}
      colors={["cyan","amber","green"]}
      showYAxis={false}
      showLegend={true}
      startEndOnly={true}
      valueFormatter={valueFormatter}
      showAnimation={true}
    />
    <TabList
    color="green"
      //className="mt-4"
      defaultValue="A"
      onValueChange={(value) => setSelectedLocation(value)}
    >
      <Tab value="B" text="OptiUX" />
      <Tab value="A" text="Preformence" />
    </TabList>
    {products
      .filter((item: any) => item.location === selectedLocation)
      .map((item: any) => (
        <div key={item.title} className=" mt-2 space-y-2">
          <Flex>
            <Text className="text-sm ">{item.title} </Text>
            <Text color="emerald">{`${item.percentageValue}% `} <span className="text-gray-400">{`(${item.metric})`}</span> </Text>
          </Flex>
          <div>
          <ProgressBar percentageValue={item.percentageValue} showAnimation={true}   color="green" 
          className="progcessbar   rounded-xl  my-5 brightness-[0.8]   
           transition-all duration-150 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[15px] before:right-[15px] before:top-0  before:transform  before:rounded-xl before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-30
          "  />
          </div>
    
        </div>
      ))}
  </div>
  )
}

export default Progcess;