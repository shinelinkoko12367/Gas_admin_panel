import React from 'react'
import { useState } from 'react';

const Checkbox = () => {

     const [checked, setChecked] = useState(false);
    return (
        <div>
            <input type="checkbox" 
            value={checked}
            onChange={()=>setChecked(checked => !checked)}
            />
            {checked ? "true" :"false" }
        </div>
    )
}
export default Checkbox