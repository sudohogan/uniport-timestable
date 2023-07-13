 interface Exam {
    date: string;
    day: string;
    morning?: {
      course: string[] | string;
      time: string;
      venue: string;
      supervisor: string;
      lecturers: string[];
      invigilators: string[];
    };
    afternoon?: {
      course: string[] | string;
      time: string;
      venue: string;
      supervisor: string;
      lecturers: string[];
      invigilators: string[];
    };
}

export const exams: Exam[] = [
    {
      date: '03/07/2023',
      day: 'Monday',
      morning: {
        course: ['GES100.1', 'GES102.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'BASIC UNIT',
        supervisor: 'GES Unit',
        lecturers: ['GES Unit'],
        invigilators: ['GES Unit'],
      }
    },
    {
        date: '04/07/2023',
        day: 'Tuesday',
        afternoon: {
          course: 'CSC 395.1',
          time: '2:00 PM - 5:00 PM',
          venue: 'CSC Hall2',
          supervisor: 'Prof. P.O. Asagba',
          lecturers: ['Prof. P.O. Asagba', 'Dr. M.O Musa', 'Dr. R. S. Ogunsakin'],
          invigilators: ['Prof. P.O. Asagba', 'Dr. M.O Musa', 'Dr. R. S. Ogunsakin', 'Bary', 'Sophia'],
        },
      },
      {
        date: '05/07/2023',
        day: 'Wednesday',
        morning: {
          course: ['STA 370.1'],
          time: '9:00 AM - 12:00 PM',
          venue: 'CSC Hall2',
          supervisor: 'Dr. L.U. Oghenekaro',
          lecturers: ['MATHS DEPT'],
          invigilators: ['Dr. L.U. Oghenekaro', 'Bary', 'Abigal,'],
        },
        afternoon: {
          course: 'CSC 396.1',
          time: '2:00 PM - 5:00 PM',
          venue: 'CSC Hall2',
          supervisor: 'Dr. E.E. Ogheneovo',
          lecturers: ['Dr. E.E. Ogheneovo', 'Prof. B.O. Eke', 'Dr. B.B. Baridam', 'Dr. R. S.Ogunsakin'],
          invigilators: ['Dr. E.E. Ogheneovo', 'Prof. B.O. Eke', 'Dr. B.B. Baridam', 'Dr. R. S.Ogunsakin', 'West', 'Wisdom,'],
        },
    },
    // Add more exam objects for other dates...
];