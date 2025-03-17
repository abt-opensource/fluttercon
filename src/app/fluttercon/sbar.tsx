
// "use client";
// import React, { useContext, useState } from "react";
// import Link from "next/link";
// import { StrokeContext } from "../global";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Switch } from "@/components/ui/switch";
// import { Slider } from "@/components/ui/slider";
// import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react"; 

// const Sbar = () => {
//   const { strokeWidth, setStrokeWidth, color, setColor, iconSize, setIconSize } = useContext(StrokeContext);
//   const [absoluteStroke, setAbsoluteStroke] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const [isOpen, setIsOpen] = useState(false); 

//   const category = [
//     { name: "home", count: 29 },
//     { name: "Setting", count: 125 },
//     { name: "Bell", count: 20 },
//     { name: "Message", count: 201 },
//     { name: "Camera", count: 21 },
//     { name: "Heart", count: 24 },
//     { name: "Play", count: 31 },
//     { name: "Pause", count: 50 },
//     { name: "Trash", count: 82 },
//     { name: "Paperclip", count: 32 },
//     { name: "Bolt", count: 231 },
//     { name: "Clock", count: 153 },
//     { name: "Eye", count: 20 },
//     { name: "Clipboard", count: 163 },
//     { name: "Calender", count: 46 },
//     { name: "Bookmark", count: 66 },
//     { name: "Star", count: 132 },
//     { name: "Cart", count: 45 },
//     { name: "Music", count: 130 },
//     { name: "Location", count: 25 },
//     { name: "Mathematics", count: 68 },
//     { name: "Medical", count: 39 },
//     { name: "Multimedia", count: 127 },
//     { name: "Nature", count: 19 },
//     { name: "Navigation", count: 134 },
//   ];

//   return (
//     <SidebarProvider>
      
//       <Button 
//         onClick={() => setIsOpen(true)} 
//         className="fixed top-4 left-4 z-50 md:hidden bg-black] text-white"
//         size="icon"
//       >
//         <Menu size={24} />
//       </Button>

    
//       <Sidebar
       
        
//         className={`fixed top-0 left-0 h-screen bg-black text-white p-4 transition-transform duration-300 overflow-y-auto ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0`}
//       >
        
//         <Button onClick={() => setIsOpen(false)} className="mb-4 md:hidden bg-[hsl(var(--primary))] text-white">
//           <X size={20} /> Close
//         </Button>

//         <h1 className="text-lg font-bold mb-4">Fluttercon</h1>

//         <Card className="p-3 bg-[#181818] rounded-md mb-6">
//           <h2 className="text-sm font-semibold mb-2">Customizer</h2>

//           <div className="mb-3">
//             <label className="text-xs text-gray-400">Color</label>
//             <Input type="color" className="w-full h-8 bg-[#252525] cursor-pointer" value={color} onChange={(e) => setColor(e.target.value)} />
//           </div>

//           <div className="mb-3">
//             <label className="text-xs text-gray-400">Stroke width</label>
//             <Slider 
//               min={1} 
//               max={5} 
//               value={[strokeWidth]} 
//               onValueChange={(value) => setStrokeWidth(value[0])} 
//               className="relative"
//             >
//               <div 
//                 className="absolute h-2 bg-[hsl(var(--primary))]" 
//                 // style={{ width: `${(strokeWidth / 5) * 100}%` }} 
//               />
//             </Slider>
//           </div>

//           <div className="mb-3">
//             <label className="text-xs text-gray-400">Size</label>
//             <Slider 
//               min={20} 
//               max={100} 
//               value={[iconSize]} 
//               onValueChange={(value) => setIconSize(value[0])} 
//               className="relative"
//             >
//               <div 
//                 className="absolute h-2 bg-[hsl(var(--primary))]" 
//                 style={{ width: `${(iconSize / 100) * 100}%` }} 
//               />
//             </Slider>
//           </div>

//           <div className="flex justify-between items-center text-xs ml-[-2px]">
//             <span>Absolute Stroke width</span>
//             <Switch checked={absoluteStroke} onCheckedChange={setAbsoluteStroke} className="bg-white" />
//           </div>
//         </Card>

//         <div className="flex flex-row text-xs text-gray-400 mb-2">Include external libs</div>
//         <label className="flex items-center space-x-2 cursor-pointer">
//           <Switch className="bg-primary" />
//           <span>Lab</span>
//         </label>

//         <h2 className="text-sm font-semibold mt-6 mb-2">View</h2>
//         <p className="text-[hsl(var(--primary))] text-lg mb-2 cursor-pointer">All</p>

//         <h2 className="text-lg font-semibold mb-2 ">Categories</h2>
//         <ul className="space-y-1 text-xs">
//           {category.map((category, index) => (
//             <TooltipProvider key={index}>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <li className="flex justify-between hover:text-[hsl(var(--primary))] cursor-pointer m-3">
//                     <Link href={`/${category.name.replace(/ /g, "-")}`} className="flex justify-between w-full ml-5">
//                       <span>{category.name}</span>
//                       <span className="text-gray-500">{category.count}</span>
//                     </Link>
//                   </li>
//                 </TooltipTrigger>
//                 {collapsed && <TooltipContent side="right" align="center">{category.name}</TooltipContent>}
//               </Tooltip>
//             </TooltipProvider>
//           ))}
//         </ul>
//       </Sidebar>

//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </SidebarProvider>
//   );
// };

// export default Sbar;
"use client";
import type React from "react";
import { useContext, useState } from "react";
import Link from "next/link";
import { StrokeContext } from "../global";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; 

interface Category {
  name: string;
  count: number;
}

const Sbar: React.FC = () => {
  const strokeContext = useContext(StrokeContext);

  if (!strokeContext) {
    throw new Error("Sbar must be used within a StrokeProvider");
  }

  const { strokeWidth, setStrokeWidth, color, setColor, iconSize, setIconSize } = strokeContext;
  const [absoluteStroke, setAbsoluteStroke] = useState<boolean>(false);
  const [collapsed] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false); 

  const category: Category[] = [
    { name: "home", count: 29 },
    { name: "Setting", count: 125 },
    { name: "Bell", count: 20 },
    { name: "Message", count: 201 },
    { name: "Camera", count: 21 },
    { name: "Heart", count: 24 },
    { name: "Play", count: 31 },
    { name: "Pause", count: 50 },
    { name: "Trash", count: 82 },
    { name: "Paperclip", count: 32 },
    { name: "Bolt", count: 231 },
    { name: "Clock", count: 153 },
    { name: "Eye", count: 20 },
    { name: "Clipboard", count: 163 },
    { name: "Calender", count: 46 },
    { name: "Bookmark", count: 66 },
    { name: "Star", count: 132 },
    { name: "Cart", count: 45 },
    { name: "Music", count: 130 },
    { name: "Location", count: 25 },
    { name: "Mathematics", count: 68 },
    { name: "Medical", count: 39 },
    { name: "Multimedia", count: 127 },
    { name: "Nature", count: 19 },
    { name: "Navigation", count: 134 },
  ];

  return (
    // <SidebarProvider>
    //   <Button 
    //     onClick={() => setIsOpen(true)} 
    //     className="fixed top-4 left-4 z-50 bg-black text-white md:hidden"
    //     size="icon"
    //   >
    //     <Menu size={24} />
    //   </Button>

    //   <Sidebar
    //     className={`fixed top-0 left-0 h-screen overflow-y-auto bg-black p-4 text-white transition-transform duration-300 ${
    //       isOpen ? "translate-x-0" : "-translate-x-full"
    //     } md:translate-x-0`}
    //   >
    //     <Button onClick={() => setIsOpen(false)} className="mb-4 bg-[hsl(var(--primary))] text-white md:hidden">
    //       <X size={20} /> Close
    //     </Button>

    //     <h1 className="mb-4 font-bold text-lg">Fluttercon</h1>

    //     <Card className="mb-6 rounded-md bg-[#181818] p-3">
    //       <h2 className="mb-2 font-semibold text-sm">Customizer</h2>

    //       <div className="mb-3">
    //         <label className="text-gray-400 text-xs">Color</label>
    //         <Input 
    //           type="color" 
    //           className="h-8 w-full cursor-pointer bg-[#252525]" 
    //           value={color} 
    //           onChange={(e) => setColor(e.target.value)} 
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label className="text-gray-400 text-xs">Stroke width</label>
    //         <Slider 
    //           min={1} 
    //           max={5} 
    //           value={[strokeWidth]} 
    //           onValueChange={(value) => setStrokeWidth(value[0])} 
    //           className="relative"
    //         >
    //           <div className="absolute h-2 bg-[hsl(var(--primary))]" />
    //         </Slider>
    //       </div>

    //       <div className="mb-3">
    //         <label className="text-gray-400 text-xs">Size</label>
    //         <Slider 
    //           min={20} 
    //           max={100} 
    //           value={[iconSize]} 
    //           onValueChange={(value) => setIconSize(value[0])} 
    //           className="relative"
    //         >
    //           <div className="absolute h-2 bg-[hsl(var(--primary))]" style={{ width: `${(iconSize / 100) * 100}%` }} />
    //         </Slider>
    //       </div>

    //       <div className="ml-[-2px] flex items-center justify-between text-xs">
    //         <span>Absolute Stroke width</span>
    //         <Switch checked={absoluteStroke} onCheckedChange={setAbsoluteStroke} className="bg-white" />
    //       </div>
    //     </Card>

    //     <div className="mb-2 flex flex-row text-gray-400 text-xs">Include external libs</div>
    //     <label className="flex cursor-pointer items-center space-x-2">
    //       <Switch className="bg-primary" />
    //       <span>Lab</span>
    //     </label>

    //     <h2 className="mt-6 mb-2 font-semibold text-sm">View</h2>
    //     <p className="mb-2 cursor-pointer text-[hsl(var(--primary))] text-lg">All</p>

    //     <h2 className="mb-2 font-semibold text-lg">Categories</h2>
    //     <ul className="space-y-1 text-xs">
    //       {category.map((category, index) => (
    //         <TooltipProvider key={index}>
    //           <Tooltip>
    //             <TooltipTrigger asChild>
    //               <li className="m-3 flex cursor-pointer justify-between hover:text-[hsl(var(--primary))]">
    //                 <Link href={`/${category.name.replace(/ /g, "-")}`} className="ml-5 flex w-full justify-between">
    //                   <span>{category.name}</span>
    //                   <span className="text-gray-500">{category.count}</span>
    //                 </Link>
    //               </li>
    //             </TooltipTrigger>
    //             {collapsed && <TooltipContent side="right" align="center">{category.name}</TooltipContent>}
    //           </Tooltip>
    //         </TooltipProvider>
    //       ))}
    //     </ul>
    //   </Sidebar>

    //   {isOpen && (
    //     <button type="button"
    //       className="fixed inset-0 z-40 bg-black/50 md:hidden"
    //       onClick={() => setIsOpen(false)}
    //     />
    //   )}
    // </SidebarProvider>
    <SidebarProvider>
    <Button 
      onClick={() => setIsOpen(true)} 
      className="fixed top-4 left-4 z-50 bg-black text-white md:hidden"
      size="icon"
    >
      <Menu size={24} />
    </Button>

    <Sidebar
      className={`fixed top-0 left-0 h-screen overflow-y-auto bg-black p-4 text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <Button onClick={() => setIsOpen(false)} className="mb-4 bg-[hsl(var(--primary))] text-white md:hidden">
        <X size={20} /> Close
      </Button>

      <h1 className="mb-4 font-bold text-lg">Fluttercon</h1>

      <Card className="mb-6 rounded-md bg-[#181818] p-3">
        <h2 className="mb-2 font-semibold text-sm">Customizer</h2>

        <div className="mb-3">
          <label htmlFor="color-picker" className="text-gray-400 text-xs">Color</label>
          <Input 
            id="color-picker"
            type="color" 
            className="h-8 w-full cursor-pointer bg-[#252525]" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stroke-slider" className="text-gray-400 text-xs">Stroke width</label>
          <Slider 
            id="stroke-slider"
            min={1} 
            max={5} 
            value={[strokeWidth]} 
            onValueChange={(value) => setStrokeWidth(value[0])} 
            className="relative"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="size-slider" className="text-gray-400 text-xs">Size</label>
          <Slider 
            id="size-slider"
            min={20} 
            max={100} 
            value={[iconSize]} 
            onValueChange={(value) => setIconSize(value[0])} 
            className="relative"
          />
        </div>

        <div className="ml-[-2px] flex items-center justify-between text-xs">
          <span>Absolute Stroke width</span>
          <Switch checked={absoluteStroke} onCheckedChange={setAbsoluteStroke} className="bg-white" />
        </div>
      </Card>

      <div className="mb-2 flex flex-row text-gray-400 text-xs">Include external libs</div>
      <label htmlFor="Lab" className="flex cursor-pointer items-center space-x-2">
        <Switch className="bg-primary" />
        <span>Lab</span>
      </label>

      <h2 className="mt-6 mb-2 font-semibold text-sm">View</h2>
      <p className="mb-2 cursor-pointer text-[hsl(var(--primary))] text-lg">All</p>

      <h2 className="mb-2 font-semibold text-lg">Categories</h2>
      <ul className="space-y-1 text-xs">
        {category.map((cat) => (
          <TooltipProvider key={cat.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <li className="m-3 flex cursor-pointer justify-between hover:text-[hsl(var(--primary))]">
                  <Link href={`/${cat.name.replace(/ /g, "-")}`} className="ml-5 flex w-full justify-between">
                    <span>{cat.name}</span>
                    <span className="text-gray-500">{cat.count}</span>
                  </Link>
                </li>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="right" align="center">{cat.name}</TooltipContent>}
            </Tooltip>
          </TooltipProvider>
        ))}
      </ul>
    </Sidebar>

    {isOpen && (
      <button type="button"
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
        onClick={() => setIsOpen(false)}
      />
    )}
  </SidebarProvider>
  );
};

export default Sbar;
