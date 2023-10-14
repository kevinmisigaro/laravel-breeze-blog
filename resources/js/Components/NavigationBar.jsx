import { Link } from "@inertiajs/react";

export default function NavigationBar({ auth }) {
    return (
        <div className="flex flex-row justify-between px-20 pt-4 pb-4 text-white bg-black">
            <div className="font-bold text-lg">DevBlog</div>

            <div className="flex flex-row gap-x-4">
                <div>
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
