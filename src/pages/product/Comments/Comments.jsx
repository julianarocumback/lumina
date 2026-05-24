import Comment from "./comment/Comment"
import Resume from "./resume/Resume"

export default function Comments(){
    return (
        <div className="bg-[rgba(249,249,251,1)] px-8 lg:px-90  h-full lg:h-screen w-full py-10 relative flex-col justify-center border-gray-300 border-b">
            <div className="flex gap-8 flex-wrap">
                <Resume/>
                <Comment/>
            </div>
        </div>
    )
}