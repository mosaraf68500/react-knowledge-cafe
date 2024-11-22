import PropTypes, { object } from 'prop-types'; 
import Blogs  from './blogs';

const Blog = ({ blog }) => {
    
    const {title, coverImage}=blog;
    return (
        
        <div>
        <img className='h-full w-full' src={coverImage} alt="" />
        <h1 className="text-2xl">title:{title}</h1>

        </div>
    );
};

Blog.propTypes={

    blog:PropTypes.object.isRequired
}


export default Blog;