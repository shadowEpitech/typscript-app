export const shufflerArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

