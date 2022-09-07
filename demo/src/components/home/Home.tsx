import React from 'react';


const Home = (props: any) => {   //pure function    , @Input 
    debugger;
    const { count, data } = props;
    
    return (
      <div>
            <div>{props.count}</div>
            <div>{data}</div>
      </div>
      
  );
}



export default Home;
