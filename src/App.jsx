// import { useState, useEffect } from "react";

// import { InjectedConnector } from "@web3-react/injected-connector";
// import { useWeb3React } from "@web3-react/core";
// import { ethers } from "ethers";
// import ContractABI from "./ABI/abi_contract.json";

// function App() {
//   const [firstname, setfirstname] = useState();
//   const [lastname, setlastname] = useState();

//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [data, setdata] = useState();
//   const { activate, deactivate, active, account, chainId } = useWeb3React();

//   const injected = new InjectedConnector({
//     supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
//   });

//   var metamask = async () => {
//     try {
//       await activate(injected);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// async function setData() {
//   try {
//     const data = "0xC729F03ebFE3a5aD23e7115eb35F54AB75F72d5C";
//     const providers = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = providers.on();
//     const contract = new ethers.Contract(data, ContractABI, signer);
//     var dataa = contract.events.names({ fromBlock: 0 }, (error, event) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(event.returnValues);
//       }
//     });
//     dataa.wait();
//     setdata(dataa);
//   } catch (err) {
//     console.log("Successfully Done" , dataa);
//     console.log(err);
//   }
// }
//   async function setName() {
//     metamask();
//     try {
//       const data = "0xC2608C553ed0240C97d8a6EbeDED5f72655cF930";
//       const providers = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = providers.getSigner();
//       const contract = new ethers.Contract(data, ContractABI, signer);
//       var dataa = await contract.setNames(firstname, lastname);
//       dataa.wait();
//       setdata(dataa)
//       console.log("Successfully Done");
//     } catch (err) {
//       console.log(err);
//     }
//   }
  

//   async function names() {
//     try {
//       const data = "0xC2608C553ed0240C97d8a6EbeDED5f72655cF930";
//       const providers = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = providers.getSigner();
//       const contract = new ethers.Contract(data, ContractABI, signer);

//       var firstname = await contract.getFirstName();
//       var lastname = await contract.getLastName();
//       setFirstName(firstname);
//       setLastName(lastname);
// setData();
//       console.log("Success");
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   function setfirst(e) {
//     setfirstname(e.target.value);
//   }
//   function setlast(e) {
//     setlastname(e.target.value);
//   }
//   names();

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
//           <div>
//             <label
//               htmlFor="firstname"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               First Name
//             </label>
//             <div className="mt-2">
//               <input
//                 onChange={setfirst}
//                 id="firstname"
//                 name="firstname"
//                 type="text"
//                 required
//                 className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label
//                 htmlFor="lastname"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Last Name
//               </label>
//             </div>
//             <div className="mt-2">
//               <input
//                 onChange={setlast}
//                 id="lastname"
//                 name="lastname"
//                 type="text"
//                 required
//                 className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               onClick={setName}
//               type="submit"
//               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               submit
//             </button>
//           </div>
//         </form>

//         <p className="mt-5">First Name: {firstName}</p>
//         <p className="mt-5">Last Name: {lastName}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


import { useState, useEffect } from "react";

import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import ContractABI from "./ABI/abi_contract.json";

function App() {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const { activate, deactivate, active, account, chainId } = useWeb3React();

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
  });
  var metamask = async () => {
    console.log("activee",active);

    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };
async function setData() {
  metamask()
  try {
    const data = "0xEf747FC7B00DDc80b7D6595329ad20C96A1C777C";
    const providers = new ethers.providers.Web3Provider(window.ethereum);
    const signer = providers.getSigner();
    const contract = new ethers.Contract(data, ContractABI, signer);
          var dataa = await contract.setData(firstname, lastname);
          // var map = await contract.MyMap();
          // map.wait();
          // console.log("🚀 ~ file: App.jsx:196 ~ setData ~ map:", map)
          dataa.wait();
          // var dataa = await contract.events.names();
          // setdata(dataa);
          console.log("🚀 ~ file: App.jsx:195 ~ setData ~ dataa:", dataa);
    
        } catch (err) {
    console.log("Successfully Done" , dataa);
    console.log(err);
  }
}
async function names() {
  try {
    const data = "0xEf747FC7B00DDc80b7D6595329ad20C96A1C777C";
    const providers = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(data, ContractABI, providers);

    const accounts = await providers.listAccounts();
    const accountAddress = accounts[0];
 contract.on("Names", (firstName, lastName, account, event) => {
   // console.log("🚀 ~ file: App.jsx:220 ~ contract.on ~ account:", account)
   // console.log("MyEvent emitted with parameters:", firstName, lastName);
  
   console.log("Event object:", event);
   setFirstName(firstName);
   setLastName(lastName);
 });
 setFirstName(firstName);
 setLastName(lastName);
    const [firstname,lastname]= await contract.getName(accountAddress);
           console.log("🚀 ~ file: App.jsx:214 ~ names ~ lastname:", lastname)
           console.log("🚀 ~ file: App.jsx:214 ~ names ~ firstname:", firstname)
           setFirstName(firstname);
           setLastName(lastname);
          // console.log("🚀 ~ file: App.jsx:216 ~ names ~ accountAddress:", accountAddress)

          

   
  
  } catch (err) {
    console.log("Error:", err);
  }
}
useEffect(() => {
names()


}, [names])

  function setfirst(e) {
    setfirstname(e.target.value);
  }
  function setlast(e) {
    setlastname(e.target.value);
  }
// console.log(">>>>>>>",firstName,lastName);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                onChange={setfirst}
                id="firstname"
                name="firstname"
                type="text"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={setlast}
                id="lastname"
                name="lastname"
                type="text"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
            onClick={setData}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              submit
            </button>
          </div>
        </form>

        <p className="mt-5">First Name: {firstName}</p>
        <p className="mt-5">Last Name: {lastName}</p>
      </div>
    </div>
  );
}

export default App;
