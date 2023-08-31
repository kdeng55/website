import React from 'react';

const footer = () => {
return (
    <footer className="footer">
     <div className="email"> 
     <p>Contact me at:</p>
    <h1 onClick={() => window.location = 'mailto:kdeng@bu.edu'}>kdeng@bu.edu</h1>
    
    </div>
   { /*
    <div className="socials">
       <h1>Linkedin</h1>
</div> */}
    </footer>
  );
};

export default footer;