export const wordCount = (input: string) => {

  if(input.length === 0){

    return 0;
  
  }

  const splitInput = input.trim().split(' ');

  return splitInput.length;

};