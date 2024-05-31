import { Typography } from "@material-tailwind/react";
import GenshinImpactLogo from '../Image/Genshin Impact.svg';
import FandomLogo from '../Image/FandomLogo.webp'

export default function Example() {
  return (
    <footer className="relative w-full bg-purple-800">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex w-full flex-col items-center justify-center border-blue-gray-50 p-1 md:flex-row md:justify-between text-gray-400 focus:ring-white">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal Genshin-Impact text-purple-200 md:mb-0"
          >
            &copy;{" "}<a href="/">Decision Support System</a>. Demo Version.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center items-center"> {""}
            <Typography
              as="a"
              href="https://genshin.hoyoverse.com/en/"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <img src={GenshinImpactLogo} alt="Genshin Impact Logo" className="h-14" />
            </Typography>
            <Typography
              as="a"
              href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <img src={FandomLogo} alt="Fandom Logo" className="h-5 w-5" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
