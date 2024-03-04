import React, { useEffect, useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import axios from "axios"
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
function Feed() {
    const [data, setData] = useState([])


    const getImage = () => {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=AOdBMpZ5OhhraAHqJwjOfhyh6kxK-fJ9YOjSo_uk8N4")
            .then((response) => {
                setData(response.data.results)
            })
    }
    useEffect(() => {
        getImage()
    }, [])

    return (
        <div>
            {
                data.map((value, index) => {
                    return (
                        <div className="full-post my-4 " key={index}>
                            <div className="upper-section h-12 flex align-middle justify-around items-center">
                                <div className="user-img h-[44px] w-[44px] rounded-full justify-start">
                                    <img
                                        className='h-full w-full rounded-full'
                                        src="data:image/jpeg;base64,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" alt="" />
                                </div>
                                <div className="usename text-xl flex align-middle px-[-3rem]">hamid</div>
                                <div className="btn-dots justify-end ">
                                    <HiDotsVertical />
                                </div>
                            </div>
                           <hr />
                            <div className="post-img h-[50vh]">
                                <img 
                                className='h-full w-full'
                                src={value.urls.small} alt="" />
                            </div>
                            <div className="post-footer h-11 flex my-2">
                                <div className="left-bt flex  gap-4 justify-start text-2xl w-[90%] ">
                                <FaRegHeart />
                                <FiMessageCircle />
                                <IoPaperPlaneOutline />
                                </div>
                                <div className="right-bt flex   justify-end text-2xl">
                                <FaRegBookmark />
                                </div>
                            </div>
                            <input type="text" 
                            className='text-xl underline py-1'
                            placeholder='Write your comment ....'
                            />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Feed
