import React, { Fragment } from 'react';
import { getValue } from '../../util/Util';

const SubjectMaster = (props: any) => { 
    const { id, defaultValue } = props;
    const subjectMaster = [
        {
            subjectId: 1,
            subjectName: "MVC"
        },
        {
            subjectId: 2,
            subjectName: "Angular"
        },
        {
            subjectId: 3,
            subjectName: "React"
        }
    ]

   let value = getValue(subjectMaster, "subjectId", "subjectName", id, defaultValue);
    
    return (        
        <Fragment>
            {value}
        </Fragment>
  );
}



export default SubjectMaster;
