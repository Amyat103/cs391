// import PostPreview from "@/app/components/post-preview";
import getAllPosts from "@/lib/getAllPosts";
import DisplayAllPosts from "@/app/components/display-all-posts";

export default async function Home() {
    const [posts] = await Promise.all([getAllPosts()]);

    return (
        <div className={`flex flex-col items-center bg-blue-200 p-4`}>
            <DisplayAllPosts inputPosts={posts}/>
        </div>
    );
}
