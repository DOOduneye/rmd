import { useState, useContext} from 'react';
import {CurrentUserContext} from "@/providers/CurrentUserProvider";
import {DormContext} from "@/providers/DormProvider";
import mongoose from "mongoose";

const CommentInput = ({ rows, placeholder, dorm }) => {
    const [comment, setComment] = useState('');

    const { currentUser } = useContext(CurrentUserContext);

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const createComment = async () => {
        const response = await fetch('http://localhost:4000/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             "createdBy": mongoose.Types.ObjectId(currentUser._id),
             "text": comment,
             "dorm": mongoose.Types.ObjectId(dorm._id)
         })
        });

        const data = await response.json();
        setComment('');

    };

    return (
        <div className="w-full mb-4 rounded-lg bg-gray-50">
            <div className="px-4 py-2 bg-white border rounded-lg border-eerie-dark/20">
                <textarea id="comment" rows={rows} className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 " placeholder={currentUser ? "Leave a comment..." : "Please sign in or up!"} required onChange={handleChange} value={comment} disabled={!currentUser} />
            </div>
            <div className="flex flex-row-reverse items-center justify-between px-3 py-2 bg-white">
                <button onClick={createComment} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-charcoal rounded-lg hover:bg-cadet" disabled={!currentUser}>
                    Post comment
                </button>
            </div>
        </div>
    )
}

export default CommentInput;