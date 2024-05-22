
"use client";
import Search from "@/components/SearchFilter";
import { NextPage } from "next";
import { useState } from "react";
;

//ค้นหา


export const Home: NextPage = () => {

    const [searchText, setSearchText] = useState<string>("");
	return (
		<main className="h-screen w-full flex overflow-auto">
            <div className="w-[75%] h-full pt-6 px-6 space-y-6 overflow-x-hidden">
			     <section className="Search/Filter">
                    <Search
                        onSubmit={(searchText) => {
                            console.log(searchText);

                            setSearchText(searchText);
                        }}
                    />
                </section>
                </div>
                
		</main>
	)
};

export default Home;

