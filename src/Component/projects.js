import React,{useState} from 'react';
import Auth from './auth';
import Chat from './chat';

const Projects = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="text-center p-5">
    {!user ? <Auth setUser={setUser} /> : <Chat user={user} />}
  </div>
  )
}

export default Projects;
