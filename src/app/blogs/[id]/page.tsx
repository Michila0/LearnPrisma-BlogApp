import Comments from "@/components/comments";
import FormComment from "@/components/form-comments";

const BlogDetailPage = () => {
    return (
        <div className='max-w-4xl mx-auto py-8'>
            <h1 className='text-3xl font-bold'>post one</h1>
            <p>Written by: John</p>
            <div className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum eos explicabo, libero modi quia saepe suscipit temporibus ut veniam!</div>

            <Comments/>
            <FormComment/>
        </div>
    );
};

export default BlogDetailPage;