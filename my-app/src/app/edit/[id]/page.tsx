'use client';

import axios from 'axios';
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState, useRef } from 'react';
import Form from '@/app/components/Form';

export default function EditForm({ params }: { params: { id: string } }) {

  return (
    <Form recordId={params.id}></Form>

  )
}
