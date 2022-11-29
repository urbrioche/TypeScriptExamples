// reference
// 1. https://steveholgado.com/typescript-types-from-arrays/
// 2. https://youtu.be/plsnFfbqVEo

const letters = ['a', 'b', 'c', 'd'] as const;
// should be 'a'|'b'|'c'|'d'
type Letter = typeof letters[number];

const printLetter = (letter: Letter): void => {
    console.log(letter);
};

printLetter('a');
printLetter('b');
// 這行會出錯，因為已經限定需為a,b,c,d
// printLetter('f');

interface Alphabet {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
    h: string;
}

const data: Alphabet = {
    a: "I'm a",
    b: "I'm b",
    c: "I'm c",
    d: "I'm d",
    e: "I'm e",
    f: "I'm f",
    g: "I'm g",
    h: "I'm h",
};

// 有一種情形是我只要部分屬性，搭配Pick可以這樣寫
// type AlphabetPartial = Pick<Alphabet, 'a' | 'b' | 'c' | 'd'>;
// 可以這樣寫
// type AlphabetPartial = Pick<Alphabet, typeof letters[number]>;
// 也可以這樣寫，我喜歡這個模式
type AlphabetPartial = Pick<Alphabet, Letter>;

// 這時候data1只能拿出a,b,c,d
const data1: AlphabetPartial = data;
// 這會編譯錯誤
// console.log(data1.e)

letters.forEach(letter => {
    console.log(`key: ${letter}, value: ${data1[letter]}`);
});

// 最後請嘗試將上面的 const letters = ['a', 'b', 'c', 'd'] as const;
// 改為 const letters = ['a', 'b', 'c', 'd', 'z'] as const;
// 看看會發生什麼事
