import { wordCount } from './wordCount';

describe('wordCount', () => {

  it('Hello World', () => {

    expect(wordCount('Hello World')).toEqual(2);
  
  });

  it('one 22 three', () => {

    expect(wordCount('one 22 three')).toEqual(3);
  
  });

  it('one-word', () => {

    expect(wordCount('one-word')).toEqual(1);
  
  });

  it(' leading and trailing spaces ', () => {

    expect(wordCount(' leading and trailing spaces ')).toEqual(4);
  
  });

  it('No words', () => {

    expect(wordCount('')).toEqual(0);
  
  });

  it('Never eat shredded wheat or cake', () => {

    expect(wordCount('Never eat shredded wheat or cake')).toEqual(6);
  
  });

});