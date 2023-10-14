export default function ForumCard({ title }) {
    return (
        <div className="border border-gray-200 shadow w-full px-8 py-5">
            <div className="font-bold text-lg">{title}</div>
        </div>
    );
}
