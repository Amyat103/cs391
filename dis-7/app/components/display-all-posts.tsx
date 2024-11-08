"use client";

import {PostProps} from "@/app/types";
import {useState} from "react";
import PostPreview from "@/app/components/post-preview";
import NewPost from "@/app/components/new-post";
import createNewPost from "@/lib/createNewPost";

export default function DisplayAllPosts({inputPosts,}:{inputPosts:PostProps[]}){
    const [posts, setPosts] = useState(inputPosts);

    async function addNewPost(title: string, content: string){
        const p = await createNewPost(title, content);
        if (p===null){
            return false;
        }

        setPosts([p, ...posts]);
        return true;
    }

    return(
        <div className={`flex flex-col items-center`}>

            {/*The UI for creating a new post*/}
            <NewPost createFunc={addNewPost}/>

            {/*Displaying all the existing posts*/}
            {
                posts.map((p, i)=>
                    <PostPreview
                        key={i+p.title}
                        post={p}
                    />
                )
            }
        </div>
    );
}