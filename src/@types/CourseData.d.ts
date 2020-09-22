export default interface CourseData {
  id?: number;
  title: string;
  teacher?: string;
  price: number;
  dateStart: string;
  dateEnd?: string;
  hourStart?: string;
  hourEnd?: string;
  interval?: string;
  description?: string;
  inscriptionUrl?: string;
  location?: string;
  classUrl?: string;
}
