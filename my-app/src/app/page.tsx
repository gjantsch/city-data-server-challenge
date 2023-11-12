'use client';

import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { debug } from 'console';
import { FormRecord, iFormRecord } from './Types';


export default function Home() {

  const queryParams = new URLSearchParams(window.location.search);

  const isAdmin = queryParams.get('user_type') === 'admin';

  const [data, setData] = useState([]);

  const getRecords = () => {
    axios.get(`http://127.0.0.1:8000/api/forms`)
      .then((response) => {
        setData(response.data);
      });
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const status = e.target.dataset.status;
    const recordId = e.target.dataset.recordId;

    axios.post(`http://127.0.0.1:8000/api/form`, { "id": recordId, "status": status })
      .then((response) => { getRecords(); });

    return false;

  }

  useEffect(() => {
    getRecords()
  }, [])

  return (
    <main role='main' className='container stripped'>
      <h1 className='mt-5'>Form List - {isAdmin ? 'Admin View ' : 'User View'}</h1>

      <div className='row stripped-header'>
        <div className='col-1 bold'>#</div>
        <div className='col-7'>Full Name</div>
        <div className='col-4'>Request Amount</div>
      </div>

      {typeof data !== 'object' ? <div className='row'>Nothing to show.</div> : data.map((record: FormRecord) => {

        return <div className='row' key={record.id}>
          <div key={'id' + record.id} className='col-1 bold'>{record.id}</div>
          <div key={'name' + record.id} className='col-4'>{record.name}</div>
          <div key={'amount' + record.id} className='col-2'>{record.amount}</div>
          <div key={'status' + record.id} className='col-2'>{record.status}</div>
          <div key={'action' + record.id} className='col-3'>
            <div className='d-inline-block pr-2'>
              {record.status === 'waiting-decision' ? <a href={'/edit/' + record.id} className='text-primary'>edit</a> : <span className='text-muted'>edit</span>}
            </div>
            <div className='d-inline-block pl-2 pr-2'>
              {isAdmin && record.status == 'waiting-decision' ? <a href='/' className='text-success' data-record-id={record.id} data-status='approved' onClick={handleClick}>approve</a> : ''}
            </div>
            <div className='d-inline-block pl-2 pr-2'></div>
            {isAdmin && record.status == 'waiting-decision' ? <a href='/' className='text-danger' data-record-id={record.id} data-status='denied' onClick={handleClick}>deny</a> : ''}
          </div>
        </div>
      })}

      <div className='row stripped-header'>
        <div className='col-12 bold'>&nbsp;</div>
      </div>

    </main >

  )
}
