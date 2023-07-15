// interface GeneralData {
//     time: string;
//     course: string[];
// }

// export const generalData: GeneralData[] = [
//     {time: "8 - 9am", course: [
//         "GES 100.1 (TETFUND 7 in 1)",
//         "CSC 382.1 (MBS 15)",
//         "CSC483.1(MBS22)"
//     ]}
// ]

type Subject = {
    name?: string;
  };
  
  type Schedule = {
    [key: string]: Subject[][];
  };
  
 export const schedule: Schedule = {
    Monday: [
        [
          { name: 'GES 100.1 (TETFUND 7 in 1)' },
          { name: 'CSC 382.1 (MBS 15)' },
          { name: 'CSC483.1(MBS22)' },
        ],
        [
          { name: 'Subject 4' },
          { name: 'Subject 5' },
          { name: 'Subject 6' },
        ],
        [
          { name: 'Subject 7' },
          { name: 'Subject 8' },
        ],
        [
          { name: 'Subject 9' },
        ],
        [
          { name: 'Subject 10' },
          { name: 'Subject 11' },
        ],
        [
          { name: 'Subject 12' },
        ],
        [
          { name: 'Subject 13' },
          { name: 'Subject 14' },
          { name: 'Subject 15' },
        ],
        [
          { name: 'Subject 16' },
          { name: 'Subject 17' },
          { name: 'Subject 18' },
        ],
        [
          { name: 'Subject 19' },
          { name: 'Subject 20' },
        ],
      ],
    Tuesday: [
        [
          { name: 'CSC480.1(CSC HALL 2)' },
          { name: '' },
          { name: '' },
        ],
        [
          { name: 'Subject 4' },
          { name: 'Subject 5' },
          { name: 'Subject 6' },
        ],
        [
          { name: 'Subject 7' },
          { name: 'Subject 8' },
        ],
        [
          { name: 'Subject 9' },
        ],
        [
          { name: 'Subject 10' },
          { name: 'Subject 11' },
        ],
        [
          { name: 'Subject 12' },
        ],
        [
          { name: 'Subject 13' },
          { name: 'Subject 14' },
          { name: 'Subject 15' },
        ],
        [
          { name: 'Subject 16' },
          { name: 'Subject 17' },
          { name: 'Subject 18' },
        ],
        [
          { name: 'Subject 19' },
          { name: 'Subject 20' },
        ],
      ],
    Wednesday: [
        [
          { name: 'MTH 120.1(FoS,CHALL,MBA1,2)' },
          { name: '' },
          { name: '' },
        ],
        [
          { name: 'Subject 4' },
          { name: 'Subject 5' },
          { name: 'Subject 6' },
        ],
        [
          { name: 'Subject 7' },
          { name: 'Subject 8' },
        ],
        [
          { name: 'Subject 9' },
        ],
        [
          { name: 'Subject 10' },
          { name: 'Subject 11' },
        ],
        [
          { name: 'Subject 12' },
        ],
        [
          { name: 'Subject 13' },
          { name: 'Subject 14' },
          { name: 'Subject 15' },
        ],
        [
          { name: 'Subject 16' },
          { name: 'Subject 17' },
          { name: 'Subject 18' },
        ],
        [
          { name: 'Subject 19' },
          { name: 'Subject 20' },
        ],
      ],
    Thursday: [
        [
          { name: 'CSC 284.1 (CSC HAll 2)' },
          { name: 'MTH110.1(FOS,CHALL,MBA1)' },
          { name: '' },
        ],
        [
          { name: 'Subject 4' },
          { name: 'Subject 5' },
          { name: 'Subject 6' },
        ],
        [
          { name: 'Subject 7' },
          { name: 'Subject 8' },
        ],
        [
          { name: 'Subject 9' },
        ],
        [
          { name: 'Subject 10' },
          { name: 'Subject 11' },
        ],
        [
          { name: 'Subject 12' },
        ],
        [
          { name: 'Subject 13' },
          { name: 'Subject 14' },
          { name: 'Subject 15' },
        ],
        [
          { name: 'Subject 16' },
          { name: 'Subject 17' },
          { name: 'Subject 18' },
        ],
        [
          { name: 'Subject 19' },
          { name: 'Subject 20' },
        ],
      ],
    Friday: [
        [
          { name: 'CSC 394.1 (CSC HALL2)' },
          { name: '' },
          { name: '' },
        ],
        [
          { name: 'Subject 4' },
          { name: 'Subject 5' },
          { name: 'Subject 6' },
        ],
        [
          { name: 'Subject 7' },
          { name: 'Subject 8' },
        ],
        [
          { name: 'Subject 9' },
        ],
        [
          { name: 'Subject 10' },
          { name: 'Subject 11' },
        ],
        [
          { name: 'Subject 12' },
        ],
        [
          { name: 'Subject 13' },
          { name: 'Subject 14' },
          { name: 'Subject 15' },
        ],
        [
          { name: 'Subject 16' },
          { name: 'Subject 17' },
          { name: 'Subject 18' },
        ],
        [
          { name: 'Subject 19' },
          { name: 'Subject 20' },
        ],
      ],
    Saturday: [
        [
          { name: 'GES 100.1 (PS HALL)' },
        ],
        [
          { name: 'GES 100.1 (PS HALL)' },
        ],
        [
          { name: 'GES 102.1 (MBA 1)' },
        ],
        [
          { name: '' },
        ],
        [
          { name: '' },
        ],
        [
          { name: 'GES 300.1 (MBA 1)' },
        ],
        [
          { name: '' },
        ],
        [
          { name: '' },
          { name: '' },
          { name: '' },
        ],
        [
          { name: '' },
          { name: '' },
        ],
      ],
  };