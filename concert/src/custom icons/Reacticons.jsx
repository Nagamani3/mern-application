import React, { useState } from 'react'
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import ShareSocial from 'react-share-social/dist/ShareSocial';
import { IoMdShare } from 'react-icons/io';
import { MdClose } from "react-icons/md";
import { DragDropContext } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';


const Reacticons = () => {
 
  
 const whatsapp = "http://localhost:3000/";
  let [state, setState] = useState(false)
 
    
let show = state
    let handleClick = () => {
      setState({ state: !state })
      
  }
  
  let handleClose = () => {
    setState(false)
    
  }

  return (
    
    <Draggable draggableId='sticky' index={1}
  >
        {(provided) => (
           <div id="sticky">
          <div className="social_share"
           {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
               <div className="social">
                 <div className="waIcon">
                   <WhatsappShareButton url={whatsapp}>
                     <WhatsappIcon size={40} round={true} />
                   </WhatsappShareButton>
                 </div>

                 <div onClick={handleClick}>
                   {show ? (
                     ""
                   ) : (
                     <IoMdShare style={{ marginLeft: "10px" }}></IoMdShare>
                   )}
                 </div>
                 {show && (
                   <div className="social_icons">
                     <FacebookShareButton url={whatsapp}>
                       <FacebookIcon size={40} round={true} />
                     </FacebookShareButton>
                     <TwitterShareButton url={whatsapp}>
                       <TwitterIcon size={40} round={true} />
                     </TwitterShareButton>
                     <LinkedinShareButton url={whatsapp}>
                       <LinkedinIcon size={40} round={true} />
                     </LinkedinShareButton>
                     <EmailShareButton url={whatsapp}>
                       <EmailIcon size={40} round={true} />
                     </EmailShareButton>

                     <MdClose
                       onClick={handleClose}
                       style={{ marginLeft: "10px" }}
                     ></MdClose>
                   </div>
                 )}
               </div>
             </div>
        </div>
        
      )}
      {/* {provided.placeholder} */}
     
       
      </Draggable>

  );
      
}
    

export default Reacticons

 
     