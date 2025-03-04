import type { IChat, IClinicalData, IUserInfo } from "./interfaces";

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
  Math.floor(Math.random() * max);
const randomBaseNames = ["Calgary", "Edmonton"];
export const randomDate = (): Date =>
  new Date(+new Date() - Math.floor(Math.random() * 10000000000));

export const CLINICAL_DATA: IClinicalData[] = Array.from(
  { length: 45 },
  (_, index) => ({
    missionId: index,
    mission: `24A00248${index + 1}`,
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    physician: randomNames[Math.floor(Math.random() * randomNames.length)],
    baseName: randomBaseNames[randomByMax(randomBaseNames.length)],

    initialReviewedDate:
      randomByMax(20) % 2 === 0
        ? undefined
        : new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    initialReviewer: `${
      randomNames[Math.floor(Math.random() * randomNames.length)]
    }`,
    finalReviewedDate:
      randomByMax(20) % 2 === 0
        ? undefined
        : new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    finalReviewer: `${
      randomNames[Math.floor(Math.random() * randomNames.length)]
    }`,
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
