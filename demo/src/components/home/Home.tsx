import React from 'react';


const Home = (props: any) => {   //pure function
    debugger;
    const { count } = props;
    
    return (
      <div>
            <div>{count}</div>
           
      </div>
      
  );
}



export default Home;
