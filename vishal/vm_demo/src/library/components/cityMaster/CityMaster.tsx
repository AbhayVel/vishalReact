import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

interface CityDetails {
  id: number,
  name: string,
  pinCode: number
}


const CityMaster = (props: any) => {

  const { id, defaultValue } = props;

  let cityDetails: CityDetails[] = [
    { id: 101, name: "Pune", pinCode: 411041 },
    { id: 102, name: "Mumbai", pinCode: 400001 },
    { id: 103, name: "Jabalpur", pinCode: 482001 },
    { id: 104, name: "Balaghat", pinCode: 481001 }
  ]

  const getValue = (id: number) => {

    const result = cityDetails.filter((cityDetail) => {
      return cityDetail.id === id;
    });

    if (result.length > 1) {
      return "";
    }

    return result[0] ? result[0].name : "";

  }

  return (
    <>
      {getValue(id)}
    </>
  );
}

export default CityMaster;
