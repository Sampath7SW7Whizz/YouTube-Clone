import React from 'react'
import { SlLike,SlDislike } from "react-icons/sl";

const commentsData = [
  {
    name: "Sampathkumar",
    text: "As a front-end developer, I find joy in creating interactive user interfaces with React and exploring the latest web development trends.",
    replies: [],
  },
  {
    name: "Sampathkumar",
    text: "Working with state management libraries like Redux provides a structured approach to handling data in complex applications.",
    replies: [
      {
        name: "Sampathkumar",
        text: "The use of styled-components for styling React components adds a level of modularity and reusability to the codebase.",
        replies: [],
      },
      {
        name: "Sampathkumar",
        text: "Building responsive designs and ensuring a seamless user experience across various devices are key aspects of front-end development.",
        replies: [
          {
            name: "Sampathkumar",
            text: "JavaScript continues to evolve, and features like async/await make asynchronous programming more readable and manageable.",
            replies: [
              {
                name: "Sampathkumar",
                text: "Optimizing web performance and understanding the critical rendering path contribute to faster and more efficient web applications.",
                replies: [
                  {
                    name: "Sampathkumar",
                    text: "Exploring serverless architectures and cloud services enhances scalability and deployment efficiency.",
                    replies: [],
                  },
                  {
                    name: "Sampathkumar",
                    text: "Collaborating with designers and back-end developers is crucial for delivering cohesive and functional applications.",
                    replies: [
                      {
                        name: "Sampathkumar",
                        text: "Continuous learning and staying updated on industry best practices keep the journey in front-end development exciting!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sampathkumar",
    text: "Experimenting with new technologies and frameworks is an essential part of staying innovative in the ever-evolving field of web development.",
    replies: [],
  },
  {
    name: "Sampathkumar",
    text: "Sharing knowledge and experiences with the developer community fosters a collaborative and supportive environment.",
    replies: [],
  },
  {
    name: "Sampathkumar",
    text: "Attending conferences and participating in hackathons are great opportunities for networking and skill enhancement.",
    replies: [],
  },
  {
    name: "Sampathkumar",
    text: "Excited about the future of web development and the possibilities it holds for creating innovative and impactful digital experiences!",
    replies: [],
  },
];



const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex w-[800px] mt-4 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-8 h-8"
        alt="profile-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        <div className='flex items-center mr-5'>
        <SlLike  className='mr-5'/>
        <SlDislike className='mr-5'/>
        <p>Reply</p>
        </div>
      </div>
    </div>
  );
};

// looping to display the comment list
const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <div className="flex">
        <img
          className="w-8 h-8"
          alt="comment-icon"
          src="https://www.svgrepo.com/show/522069/comment-2.svg"
        />
        <h1 className="text-xl font-bold ml-2">Comments</h1>
      </div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
