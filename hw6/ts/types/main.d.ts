declare let str: string;
declare let str1: string;
declare function stringToArray(str: string): string[];
declare const arrNumbers: number[];
declare const arrStrings: string[];
declare let nums: number[];
declare function sortNums(nums: number[], ascending: string): number[];
interface Courses {
    title: string;
    monthDuration: number;
}
declare let coursesAndDurationArray: Courses[];
declare const sortArr: Courses[];
declare const filterArr: Courses[];
declare const addValueArr: Courses[];
declare const cards: string[];
declare function createCards(cardSuit: string[], value: (string | number)[]): void;
declare const allSix: string[];
declare const allHeart: string[];
declare const allDiamond: string[];
declare const allClubs: string[];
declare let result: {
    spades: any[];
    diamonds: any[];
    hearts: any[];
    clubs: any[];
};
interface CoursesArray {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}
declare let coursesArray: CoursesArray[];
declare function findAllSassModules(): CoursesArray[];
declare function findAllDockerModules(): CoursesArray[];
