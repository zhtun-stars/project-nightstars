import type { IChat, IClinicalData } from "./interfaces";

const randomNames = [
  "Dr. Jane Doe",
  "Dr. John Smith",
  "Dr. Emily Davis",
  "Dr. Michael Brown",
  "Dr. Sarah Wilson",
  "Dr. David Johnson",
  "Dr. Laura Martinez",
  "Dr. Robert Garcia",
];

export const randomByMax = (max: number): number =>
  parseInt(Math.floor(Math.random() * max) + "", 10);
const randomBaseNames = ["Calgary", "Edmonton"];
export const randomDate = (): Date =>
  new Date(+new Date() - Math.floor(Math.random() * 10000000000));

export const CLINICAL_DATA: IClinicalData[] = Array.from(
  { length: 15 },
  (_, index) => ({
    mission: `24A00248${index + 1}`,
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    physicianDate: new Date(
      +new Date() - Math.floor(Math.random() * 10000000000)
    ),
    peerReviewDate: new Date(
      +new Date() - Math.floor(Math.random() * 10000000000)
    ),
    peerReviewed: parseInt(Math.random() * 10 + "", 10) % 2 === 0,
    acknowledged: parseInt(Math.random() * 10 + "", 10) % 2 === 0,
    physician: randomNames[Math.floor(Math.random() * randomNames.length)],
    baseName:
      randomBaseNames[Math.floor(Math.random() * randomBaseNames.length)],
    physicianReview: parseInt(Math.random() * 10 + "", 10) % 2 === 0,
    crews: Array.from({ length: randomByMax(3) }, (_, index) => ({
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    })),
  })
);

export const COMMENTS: IChat[] = Array.from(
  { length: randomByMax(5) },
  (_, index) => ({
    id: `24A00248${index + 1}`,
    message: `This is a message for mission 24A00248${index + 1}`,
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    user: randomNames[Math.floor(Math.random() * randomNames.length)],
  })
);
