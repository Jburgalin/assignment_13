import React from 'react';
import styles from './App.module.css'; //CSS Module import
import './app.css'; //Regular CSS import
import{Box, Text, Author} from './StyledComponents.jsx'; //Styled Components import

function QuoteBox() { 
 return ( 

  <div className="quote-box"> 

     <p className="quote-text">"The only limit to our realization of tomorrow is our doubts of today."</p> 

     <p className="quote-author">- Franklin D. Roosevelt</p> 

   </div> 
   
 ); 
} 
 

export default QuoteBox; 