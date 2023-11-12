import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

interface FormProps {
  recordId: any,
}

export default function Form(props: FormProps) {

  const recordId = props.recordId;

  const timer = useRef(null as any);

  const [record, setRecord] = useState({ id: 0, name: '', amount: 0, status: 'waiting-decision' });

  const formTimeoutTime = 300;

  // handle form/record updates
  const onChangeHandler = (e: any) => {

    const updatedRecord = { ...record, [e.target.id]: e.target.value };

    setRecord(updatedRecord);

    if (updatedRecord.name.length > 2 && updatedRecord.amount > 0) {

      // clear existing request
      if (timer.current) {
        clearTimeout(timer.current);
      }

      // using setTimeout to avoid API too many requests
      timer.current = setTimeout(() => {
        axios.post(`http://127.0.0.1:8000/api/form`, updatedRecord)
          .then((response) => {
            if (response.data.id != record.id) {
              setRecord(response.data)
            }
          });

      }, formTimeoutTime);

    }
  };

  useEffect(() => {

    if (recordId === null) {
      return;
    }

    axios.get(`http://127.0.0.1:8000/api/form/${recordId}`)
      .then((response) => {
        setRecord(response.data);
      })
      .catch(error => console.log(error));

  }, [recordId])

  return (
    <main role='main' className='container'>

      <h1 className='mt-5'>{recordId > 0 ? 'Edit' : 'New'} Form</h1>

      <form>
        <div className='form-group mt-3'>
          <label htmlFor='id'>ID</label>
          <input type='text' id='id' className='form-control' readOnly={true} value={record.id}></input>
        </div>
        <div className='form-group mt-3'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' className='form-control' value={record.name} onChange={onChangeHandler}></input>
        </div>
        <div className='form-group mt-3'>
          <label htmlFor='amount'>Amount</label>
          <input type='text' className='form-control' id='amount' value={record.amount} onChange={onChangeHandler}></input>
        </div>
      </form>
    </main>

  )
}
