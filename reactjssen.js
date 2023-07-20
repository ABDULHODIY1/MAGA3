import React, {  useState } from 'react';

function Scale() {
  const [weight, setWeight] = useState(1);

  // // useEffect(() => {
  // //   const fetchData = async () => {
  // //     try {
  // //       // const response = await fetch('http://127.0.0.1:8000/kilogram/continuous_weight/');
  // //       const data = await response.json();
  // //       setWeight(data.weight);
  // //     } catch (error) {
  // //       console.log('Error:', error);
  // //     }
  // //   };

  //   const intervalId = setInterval(fetchData, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
// useEffect(()=>{
//  fetch('http://127.0.0.1:8000/kilogram/continuous_weight/').then(res=>res.json()).then(res=>{
//     console.log(res,"vazn")
//   })
// },[])
function getWeight() {
  fetch('http://127.0.0.1:8000/kilogram/continuous_weight/').then(res=>res.json()).then(res=>{
    console.log(res.data.weight)
    setWeight(res.data.weight)
  
  })
}

setInterval(()=>{
  getWeight()
},1000)
  return (
    <div>
      <h1>Weight:{weight}</h1>
    </div>
  );
}

export default Scale;

