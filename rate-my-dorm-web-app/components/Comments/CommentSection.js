import CommentInput from "@/components/Comments/CommentInput";
import Comment from "@/components/Comments/Comment";

const CommentSection = ({ props, dorm }) => {

    return (
        <div className="flex flex-col w-full max-w-3xl p-5 bg-white border rounded-lg shadow-md border-errie-dark/20">
            <CommentInput dorm={dorm} />
            <h1 className="w-full max-w-3xl p-2 pb-2 mx-auto mb-5 text-lg font-medium text-left border border-opacity-25 rounded-lg text-charcoal border-errie-dark/20">
                Comments
            </h1>

            <div className="flex flex-col">
                {props?.length > 0 ? props?.sort((a, b) => b.date - a.date).reverse().map((comment) => (
                    <Comment key={comment._id} comment={comment} rows={2} />
                )) : (
                    <p className="p-2 font-medium text-left text-opacity-75 text-md text-charcoal">
                        No comments yet. Be the first to comment!
                        <span className="pt-2"> 😊</span>
                    </p>
                )}
            </div>
        </div>
    )
}

export default CommentSection;