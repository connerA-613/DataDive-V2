import { NavigationMenu } from "radix-ui";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white width-full h-25">
            <Image src="/Data-dive-logo-white-text.png" alt="Logo" width={200} height={100} />
            <NavigationMenu.Root className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <NavigationMenu.List className="flex justify-between gap-6 items-center p-4 bg-gray-800 text-white text-xl">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link asChild>
                            <a href="/" className="relative group inline-block text-white
                                                    after:absolute after:left-0 after:bottom-0 after:h-[2px]
                                                    after:w-0 after:bg-blue-400 after:transition-all after:duration-300
                                                    group-hover:after:w-full">Home</a>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="relative inline-block text-white group
                                                        before:content-[''] before:absolute before:bottom-0 before:left-0
                                                        before:h-[2px] before:w-0 before:bg-blue-400
                                                        before:transition-all before:duration-300
                                                        group-hover:before:w-full" href="/features">Features</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="relative inline-block text-white group
                                                        before:content-[''] before:absolute before:bottom-0 before:left-0
                                                        before:h-[2px] before:w-0 before:bg-blue-400
                                                        before:transition-all before:duration-300
                                                        group-hover:before:w-full" href="/about">About</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="relative inline-block text-white group
                                                        before:content-[''] before:absolute before:bottom-0 before:left-0
                                                        before:h-[2px] before:w-0 before:bg-blue-400
                                                        before:transition-all before:duration-300
                                                        group-hover:before:w-full" href="/contact">Contact</NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}

export default NavBar;