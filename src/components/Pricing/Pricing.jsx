// import React from "react";

// const PricingH = () => {
//   const pricingData = [
//     {
//       id: "01",
//       name: "Economy",
//       txt1: "For the individuals",
//       txt2: "Secure Online Transfer",
//       txt3: "Unlimited Styles for interface",
//       txt4: "Reliable Customer Service",
//       pricing: "£199.00",
//     },
//     {
//       id: "02",

//       name: "Business",
//       txt1: "For the individuals",
//       txt2: "Secure Online Transfer",
//       txt3: "Unlimited Styles for interface",
//       txt4: "Reliable Customer Service",
//       pricing: "£299.00",
//     },
//     {
//       id: "03",

//       name: "Premium",
//       txt1: "For the individuals",
//       txt2: "Secure Online Transfer",
//       txt3: "Unlimited Styles for interface",
//       txt4: "Reliable Customer Service",
//       pricing: "£399.00",
//     },
//     {
//       id: "04",

//       name: "Exclusive",
//       txt1: "For the individuals",
//       txt2: "Secure Online Transfer",
//       txt3: "Unlimited Styles for interface",
//       txt4: "Reliable Customer Service",
//       pricing: "£499.00",
//     },
//   ];
//   return (
//    <div className="bg-[#F8F7F3] animate-reveal">
//      <div className="w-11/12  mx-auto py-24 flex flex-col gap-24 ">
//       <div className=" items-center justify-center text-center flex flex-col gap-3">
//         <h1 className="font-semibold text-4xl">Choose Your Plan</h1>
//         <p className="w-7/12 text-gray-400 ">
//           When someone does something that they know that they shouldn’t do, did
//           they.
//         </p>
//       </div>
//       <div className="grid  md:grid-cols-2 lg:grid-cols-4  gap-5 bg-[#F9F9FF] ">
//         {pricingData.map((val, i) => (
//           <div
//             key={i}
//             className="flex flex-col group gap-10 items-center text-center py-14 hover:bg-gradient-to-r hover:from-[#ed9728] hover:to-[#de56ff] transition-all delay-1000 duration-1000 ease-in-out "
//           >
//             <div className="flex bg-[#EDEFFF] border-[30px] border-[#E2E5FF] h-40 w-40 rounded-full items-center justify-center text-4xl  ">
//               {val.id}
//             </div>
//            <div  className="flex flex-col gap-11">
//            <div className="flex flex-col gap-2">
//               <h1 className="text-xl font-semibold ">{val.name}</h1>
//                 <h1>{val.txt1}</h1>

//             </div>
//               <div className="text-gray-400 flex flex-col gap-2">
//                 <hr className="border-t-2 border-gray-300 " />
//                 <h1>{val.txt2}</h1>
//                 <hr className="border-t-2 border-gray-300 " />
//                 <h1>{val.txt3}</h1>
//                 <hr className="border-t-2 border-gray-300 " />
//                 <h1>{val.txt4}</h1>
//                 <hr className="border-t-2 border-gray-300 " />
//               </div>
//             <div>
//               <h1 className="text-4xl group-hover:bg-red-600 transition-all delay-100 duration-500 ease-in-out font-semibold ">{val.pricing}</h1>
//             </div>
//            </div>
            
//           </div>
//         ))}
//       </div>
//     </div>
//    </div>
//   );
// };

// export default PricingH;
