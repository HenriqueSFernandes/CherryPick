import { Montserrat, Noto_Serif_Makasar } from "next/font/google";

const makasar = Noto_Serif_Makasar({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export { makasar, montserrat };
