import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import imgAbout from '../Image/Icon_Friends.webp';
import imgContact from '../Image/Icon_Mail.webp';
import imgHome from '../Image/System_City_Reputation.webp';

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/About", current: false },
  { name: "Contact", href: "/Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const currentRoute = window.location.pathname;

  return (
    <Disclosure as="nav" className="bg-purple-400 Genshin-Impact">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="flex flex-shrink-0 items-center text-lg font-semibold Genshin-Impact">
                  <span className="text-purple-900 pr-1.5">Decision</span>
                  <span className="text-purple-100">Support System</span>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-auto sm:pr-0">
                <div className="hidden sm:block sm:ml-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === currentRoute
                            ? "bg-purple-700 text-white"
                            : "text-purple-700 hover:bg-purple-100",
                          "rounded-md px-3 py-2 text-sm font-medium flex items-center"
                        )}
                        aria-current={item.href === currentRoute ? "page" : undefined}
                      >
                        {item.name}
                        {item.name === "About" && (
                          <img src={imgAbout} alt="About" className="ml-2 h-9 w-9" />
                        )}
                        {item.name === "Home" && (
                          <img src={imgHome} alt="Home" className="ml-2 h-9 w-9" />
                        )}
                        {item.name === "Contact" && (
                          <img src={imgContact} alt="Contact" className="ml-2 h-9 w-9" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only"></span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === currentRoute
                      ? "bg-purple-700 text-white"
                      : "text-purple-700 hover:bg-purple-100 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium flex items-center"
                  )}
                  aria-current={item.href === currentRoute ? "page" : undefined}
                >
                  {item.name}
                  {item.name === "About" && (
                    <img src={imgAbout} alt="About" className="ml-2 h-10 w-10" />
                  )}
                  {item.name === "Home" && (
                    <img src={imgHome} alt="Home" className="ml-2 h-10 w-10" />
                  )}
                  {item.name === "Contact" && (
                    <img src={imgContact} alt="Contact" className="ml-2 h-10 w-10" />
                  )}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
