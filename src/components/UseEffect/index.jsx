import React, {useEffect, useState} from 'react'

const UseEffect = () => {
 const [data, setData] = useState();
 const [selectUserId, setSelectUserId] = useState('1')

    // Case 1 => ekran re-render bo'lganda bunga tegishli bo'lmagan holatda ham doim ishlaydi.
    useEffect(()=> {
        // console.log('Case 1');
     
    });


    // Case 2 => Component birinchi marta yurganda ishlaydi xolos, qolgan paytda re-render bo'lganda bundagi kod yurmaydi.
    useEffect (()=> {
        // console.log('Case 2');
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    }, [])
    // console.log(data);

    // Case 3 => Dependency qismiga biror component biriktiriladi va ana shu componenet render bo'lganda UseEffectdagi code ham 1marta   yuradi.
    useEffect (()=> {

        fetch(`https://jsonplaceholder.typicode.com/todos/${selectUserId}`)
        .then(response => response.json())
        .then(json => setData(json))
    }, [selectUserId]);
    
    console.log(data);

  return <div>
    <h4>UseEffect</h4>
    <select onChange={e => setSelectUserId(e.target.value)}>
        <option value='1'>User1</option>
        <option value='2'>User2</option>
        <option value='3'>User3</option>
        <option value='4'>User4</option>
        <option value='5'>User5</option>
        <option value='6'>User6</option>
        <option value='7'>User7</option>
        <option value='8'>User8</option>
    </select>
  </div>
  
}

export default UseEffect