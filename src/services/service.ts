import CourseData from '../@types/CourseData';
import { LoginRequest, LoginResponse } from '../@types/LoginData';
import api from './api';

// Define the header for Authorization with the actual token
const getTokenHeader = (token:string, id:string) => {
  const authString = `Bearer ${token}`;

  return {
    headers: {
      Authorization: authString,
      id,
    },
  };
};

export async function login(values:LoginRequest):Promise<boolean> {
  const response = await api.post('/login', values);

  const responseData:LoginResponse = (response.data);

  if (responseData.auth) {
    localStorage.setItem('tokenlabCalendar/userID', responseData.idUser);
    localStorage.setItem('tokenlabCalendar/token', responseData.token);
    return (true);
  }
  return (false);
}

export async function getUserInfo() {
  const id = localStorage.getItem('tokenlabCalendar/userID');
  const token = localStorage.getItem('tokenlabCalendar/token');

  if (token && id) {
    const response = await api.get(`/users/${id}`, getTokenHeader(token, id));

    const { fullname } = response.data;

    return (
      {
        fullname,
      }
    );
  }

  return ({});
}

export async function getClassesOfTeacher() {
  const id = localStorage.getItem('tokenlabCalendar/userID');

  const { data } = await api.get(`/coursesOfTeacher/${id}`);

  return (data);
}

export async function getAllClasses() {
  const { data } = await api.get('/courses');

  return (data);
}

export async function storeCourse(values:CourseData) {
  const { data } = await api.post('/courses', values);

  return (data);
}

export async function deleteCourse(id:number) {
  const { data } = await api.delete(`/courses/${id}`);

  return (data);
}

export function getNewestClasses() {
  return [
    {
      title: 'Aula Iniciante',
      teacher: 'Raisa',
      date: '2020/12/01',
      price: 200,
    },
    {
      title: 'Foco nos Quadris',
      teacher: 'Raisa',
      date: '2020/12/01',
      price: 200,
    },
    {
      title: 'Criação de coreografias',
      teacher: 'Júlia Gunesh',
      date: '2020/12/01',
      price: 200,
    },
  ];
}
