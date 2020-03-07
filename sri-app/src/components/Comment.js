import React from 'react';

const Comment = () => {
  return (
    <div className='comment'>
      <p
        style={{
          color: '#A9A9A9',
          marginTop: '3px',
          marginBottom: '3px',
          fontSize: '20px'
        }}
      >
        Leave a comment
      </p>
      <form>
        <textarea placeholder=' type here...' rows='10'></textarea>
        <div className='input-group'>
          <input type='text' placeholder='name' />
          <input type='text' placeholder='email' />
          <input type='text' placeholder='website' />
        </div>

        <button>post comment</button>
      </form>
    </div>
  );
};

export default Comment;
