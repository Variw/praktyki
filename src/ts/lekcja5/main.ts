
interface Sticker {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    submitter: string | undefined
}
const sticker1 = {
    id: 0,
    name: "Jef",
    createdAt: "24.01.2025",
    updatedAt: "24.01.2025",
    submitter: undefined
} as Sticker;

type stickerUpdateParam = Partial<Sticker>;
const sticker2 = {name: "string"} as stickerUpdateParam;

type StickerFromAPI = Readonly<Sticker>;
const sticker3 = sticker1 as StickerFromAPI;
//sticker3.id = 4; Nie da sie :<


console.log(sticker1);
console.log(sticker2);
console.log(sticker3);

