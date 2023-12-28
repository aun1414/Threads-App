// import {UserButton} from "@clerk/nextjs"
// export default function Home() {
//   return (
//     <main>
//       <UserButton/>
//     </main>
//   )
//   }

import { UserButton } from "@clerk/nextjs";
 
export default function Home () {
  return (
    <header>
      <h1>My application</h1>
 
      <UserButton />
    </header>
  );
};



  
