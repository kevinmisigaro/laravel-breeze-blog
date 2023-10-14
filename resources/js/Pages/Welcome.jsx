import ForumCard from "@/Components/Forum/ForumCard";
import NavigationBar from "@/Components/NavigationBar";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <NavigationBar auth={auth} />
            <div className="px-20">
                <div className="flex flex-col w-full mt-20">
                    <ForumCard title="Beginner here. Which programming language to begin with to learn programming? I think of starting with java." />
                    <ForumCard title="Microservices" />
                    <ForumCard title="Text" />
                </div>
            </div>
        </>
    );
}
