import { LoginRequest, LoginResponse } from '../@types/LoginData';
import api from './api';

export async function login(values:LoginRequest):Promise<boolean> {
  const response = await api.post('/login', values);

  const responseData:LoginResponse = (response.data);

  if (responseData.auth) {
    localStorage.setItem('tokenlabCalendar/userID', responseData.idUser);
    localStorage.setItem('tokenlabCalendar/token', responseData.token);
    alert('Logou');
    return (true);
  }
  alert('Nem rolou');
  return (false);
}

export function getAllClasses() {
  return [
    {
      title: 'Fundamentos do Tribal Fusion',
      teacher: 'Raisa Latorraca',
      description: 'Neste vídeo damos uma breve introdução a um dos passos básicos da dança do ventre e do tribal fusion, a clássica batida lateral. É bom lembrarmos que uma video aula rápida não supre uma aula presencial. Consulte os horários de um professor mais próximo de você ou venha fazer aulas comigo pra estudarmos juntinhos.',
      price: 150,
      date: '01/01',
      time: '08:00',
      interval: 'Segundas e Quartas',
    },
    {
      title: 'Aulão Gratuito Inaugural',
      teacher: 'Raisa Latorraca',
      description: 'Os braços são a alma do Tribal e da Dança do Ventre. A extensão da expressão do coração. Neste vídeo estou apresentando como trabalho em mim e em minhas aulas técnicas para desenvolvimento dos braços.',
      price: 2000,
      date: '01/01',
      time: '08:00',
      interval: 'Terças e Quintas',
    },
    {
      title: 'Preparação dos quadris',
      teacher: 'Júlia Gunesh',
      description: 'Proposta que objetiva ampliar as possibilidades de fusão, fornecendo maior vocabulário gestual para Tribal Fusion. Utilizando sua vasta experiência em Dança do Ventre, Nadja propõe workshop técnico em movimentação de quadril para Tribal Fusion baseado em técnicas “baladi” egípcias. Combinações de movimentos, exercícios para soltura de tremido, breaks, encaixes, oitos e ondulações adaptadas à postura e utilização muscular Tribal.',
      price: 250,
      date: '01/01',
      time: '08:00',
      interval: 'Todos os dias',
    },
    {
      title: 'Preparação dos braços e articulações para movimentos bruscos e suaves',
      teacher: 'Júlia Gunesh',
      description: 'Proposta que objetiva ampliar as possibilidades de fusão, fornecendo maior vocabulário gestual para Tribal Fusion. Utilizando sua vasta experiência em Dança do Ventre, Nadja propõe workshop técnico em movimentação de quadril para Tribal Fusion baseado em técnicas “baladi” egípcias. Combinações de movimentos, exercícios para soltura de tremido, breaks, encaixes, oitos e ondulações adaptadas à postura e utilização muscular Tribal.',
      price: 250,
      date: '01/01',
      time: '08:00',
      interval: 'Sábados e Domingos',
    },
  ];
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