// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){
  const complement = { A: 'T', C: 'G', T: 'A', G: 'C' }
  
  return dna.split('').map( l => complement[l]).join('')
}