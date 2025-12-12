export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Placeholder question: What sound does a cat make?",
    options: ["Option A", "Option B", "Option C"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Placeholder question: Which item is cold?",
    options: ["Item A", "Item B", "Item C"],
    correctAnswer: 0
  }
];
