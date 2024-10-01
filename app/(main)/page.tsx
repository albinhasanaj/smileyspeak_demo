"use client";
import { useState, useEffect, lazy, Suspense, ChangeEvent } from "react";
import { MoonLoader } from "react-spinners";
import CardsContainer from "@/components/CardsContainer";
import toast from "react-hot-toast";

const Home = () => {
    // const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Tracks the loading state
    const [search, setSearch] = useState('');

    const placeholderComments = [
        {
            card_id: 1,
            username: "johndoe",
            profilePicture: "https://avatar.iran.liara.run/public/1",
            email: "johndoe@gmail.com",
            content: "This joke is hilarious! It goes like this: Why did the chicken cross the road? To get to the other side!",
            like_count: 100,
            hashtag1: "funny",
            hashtag2: "joke",
            hashtag3: "chicken"
        },
        {
            card_id: 2,
            username: "janedoe",
            profilePicture: "https://avatar.iran.liara.run/public/2",
            email: "janedoe@gmail.com",
            content: "There are 10 types of people in the world: those who understand binary, and those who don't.",
            like_count: 203,
            hashtag1: "nerdy",
            hashtag2: "binary",
            hashtag3: ""
        },
        {
            card_id: 3,
            username: "Alice",
            profilePicture: "https://avatar.iran.liara.run/public/3",
            email: "alice@gmail.com",
            content: "I'm a big fan of the band 1023MB. They haven't got a gig yet.",
            like_count: 50,
            hashtag1: "music",
            hashtag2: "",
            hashtag3: ""
        }
    ];

    const [comments, setComments] = useState<any[]>(placeholderComments);


    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-center text-[48px] md:text-[64px] lg:text-[96px]">Discover & Share <span className="block h1__span__gradient">Fun & Joyful comments</span></h1>
                <p className="text-center text-[20px] md:text-[26px] lg:text-[40px] opacity-50">SmileySpeak is a free to use website to find the best<br />comments on planet earth!</p>
            </div>
            <div className="w-full flex flex-col gap-2 items-center">
                <label htmlFor="search" className="lg:text-[20px]">Search for a tag or a username</label>
                <input type="text" name="search" id="search" placeholder="#funny"
                    className="w-2/3 md:w-[500px] lg:w-[700px] p-4 box-shadow rounded-[5px] focus:outline-none"
                    value={search}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />
            </div>
            <Suspense fallback={<MoonLoader />}
            >
                {isLoading ? (
                    // Loader will be shown when comments are being fetched
                    <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MoonLoader />
                    </div>
                ) : comments.length === 0 ? (
                    // No comments message only shown after loading is finished
                    <h2 className="text-center text-[24px]">{"No comments :("}</h2>
                ) : (
                    // Render the CardsContainer if comments are present
                    <CardsContainer comments={comments} />
                )}
            </Suspense>
        </>
    );
};

export default Home;
